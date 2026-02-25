export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../jwt";
const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ error: "TOKEN_REQUIRED" }, { status: 400 });
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
      return NextResponse.json(
        { error: "LICENSE_INVALID" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      valid: true,
      licenseKey: payload.licenseKey,
      deviceId: payload.deviceId,
      name: payload.name,
      id: payload.id,
    });
  } catch {
    return NextResponse.json(
      { error: "INVALID_OR_EXPIRED" },
      { status: 401 }
    );
  }
}
