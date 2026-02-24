export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { verifyToken, signToken, LicensePayload } from "../jwt";
import { FREE_LIMITS, FeatureName } from "../limits";

function createFreePayload(deviceId: string): LicensePayload {
  return {
    licenseKey: "FREE",
    deviceId,
    premium: false,
    usage: { history: 0, snipToScan: 0, generateQRFromSelection: 0 },
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const feature = body.feature as FeatureName;
    const deviceId = body.deviceId || "unknown";
    const token = body.token;

    if (!feature || !FREE_LIMITS[feature]) {
      return NextResponse.json(
        { allowed: false, reason: "INVALID_FEATURE" },
        { status: 400 }
      );
    }

    // 🔹 PREMIUM FLOW
    if (token) {
      try {
        const payload = verifyToken(token);

        if (payload.premium) {
          return NextResponse.json({ allowed: true, token });
        }
      } catch {
        // invalid token → continue as free
      }
    }

    // 🔹 FREE FLOW
    let payload: LicensePayload;

    if (token) {
      try {
        payload = verifyToken(token);
      } catch {
        payload = createFreePayload(deviceId);
      }
    } else {
      payload = createFreePayload(deviceId);
    }

    // ensure usage exists
    payload.usage = payload.usage || {
      history: 0,
      snip: 0,
      generate: 0,
    };

    const limit = FREE_LIMITS[feature];
    const used = payload.usage[feature] || 0;

    if (used >= limit) {
      return NextResponse.json({
        allowed: false,
        reason: "FREE_LIMIT_REACHED",
        token: signToken(payload),
        usage: payload.usage,
        limits: FREE_LIMITS,
        premium: false,
      });
    }

    payload.usage[feature] = used + 1;

    const newToken = signToken(payload);

    return NextResponse.json({
      allowed: true,
      token: newToken,
      usage: payload.usage,
      limits: FREE_LIMITS,
      premium: false,
    });
  } catch (err) {
    console.error("USAGE ERROR:", err);
    return NextResponse.json(
      { allowed: false, reason: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}