export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { decodeToken, signToken } from "../jwt";

const DODO_API_KEY = process.env.DODO_API_KEY!;

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
      return NextResponse.json(
        { error: "LICENSE_INVALID" },
        { status: 401 }
      );
    }

    const newToken = signToken(payload);

    return NextResponse.json({
      token: newToken,
      premium: true,
    });
  } catch {
    return NextResponse.json(
      { error: "REFRESH_FAILED" },
      { status: 401 }
    );
  }
}