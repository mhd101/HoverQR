export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { verifyToken } from "../jwt";
import { corsJson, corsOptions } from "../cors";
const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function OPTIONS() {
  return corsOptions();
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    if (!token) {
      return corsJson({ error: "TOKEN_REQUIRED" }, 400);
    }

    const payload = verifyToken(token);
    const valRes = await fetch(
      "https://live.dodopayments.com/licenses/validate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DODO_API_KEY}`,
        },
        body: JSON.stringify({
          license_key: payload.licenseKey,
        }),
      }
    );

    const valData = await valRes.json();
    if (!valRes.ok || !valData.valid) {
      return corsJson(
        { error: "LICENSE_INVALID" },
        401
      );
    }

    return corsJson({
      valid: true,
      licenseKey: payload.licenseKey,
      deviceId: payload.deviceId,
      name: payload.name,
      id: payload.id,
    });
  } catch {
    return corsJson(
      { error: "INVALID_OR_EXPIRED" },
      401
    );
  }
}
