export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { decodeToken } from "../jwt";
import { corsJson, corsOptions } from "../cors";

const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function OPTIONS() {
  return corsOptions();
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return corsJson(
        { error: "TOKEN_REQUIRED" },
        400
      );
    }

    const payload = decodeToken(token);
    const license_key = payload.licenseKey;
    const license_key_instance_id = payload.id;

    if (!license_key || !license_key_instance_id) {
      return corsJson(
        { error: "INVALID_OR_EXPIRED" },
        401
      );
    }

    const deactRes = await fetch(
      "https://live.dodopayments.com/licenses/deactivate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DODO_API_KEY}`,
        },
        body: JSON.stringify({
          license_key,
          license_key_instance_id,
        }),
      }
    );

    if (deactRes.status === 200) {
      return corsJson({ deleted: true, success: true });
    }

    const deactData = await deactRes.json().catch(() => null);
    return corsJson(
      { error: deactData?.message || "Deactivation failed" },
      deactRes.status || 401
    );
  } catch {
    return corsJson(
      { error: "Deactivation failed" },
      500
    );
  }
}
