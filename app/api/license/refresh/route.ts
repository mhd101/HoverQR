export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { decodeToken, signToken } from "../jwt";
import { corsJson, corsOptions } from "../cors";

const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function OPTIONS() {
  return corsOptions();
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    if (!token) throw new Error();

    const payload = decodeToken(token);

    // 🔹 Dodo VALIDATE
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

    if (!valData.valid) {
      return corsJson(
        { error: "LICENSE_INVALID" },
        401
      );
    }

    const newToken = signToken(payload);

    return corsJson({
      token: newToken,
      valid: true,
    });
  } catch {
    return corsJson(
      { error: "REFRESH_FAILED" },
      401
    );
  }
}
