export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { signToken, LicensePayload } from "../jwt";
import { corsJson, corsOptions } from "../cors";

const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function OPTIONS() {
  return corsOptions();
}

export async function POST(req: NextRequest) {
  try {
    const { licenseKey, deviceId, name } = await req.json();

    if (!licenseKey || !deviceId) {
      return corsJson(
        { error: "Missing licenseKey or deviceId" },
        400
      );
    }

    // Dodo ACTIVATE
    const actRes = await fetch(
      "https://live.dodopayments.com/licenses/activate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DODO_API_KEY}`,
        },
        body: JSON.stringify({
          license_key: licenseKey,
          name: name || deviceId,
        }),
      }
    );

    const actData = await actRes.json();

    if (actRes.status === 404) {
      return corsJson(
        { error: "License key is invalid" },
        404
      );
    }

    if (!actRes.ok) {
      return corsJson(
        { error: actData.message || "Activation failed" },
        401
      );
    }

    const payload: LicensePayload = {
      licenseKey,
      deviceId,
      name,
      id: actData.id,
    };

    const token = signToken(payload);

    return corsJson({ token, valid: true });
  } catch {
    return corsJson(
      { error: "Activation failed" },
      500
    );
  }
}
