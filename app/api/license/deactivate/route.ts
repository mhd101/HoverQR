export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "../jwt";

const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "TOKEN_REQUIRED" },
        { status: 400 }
      );
    }

    const payload = decodeToken(token);
    const license_key = payload.licenseKey;
    const license_key_instance_id = payload.id;

    if (!license_key || !license_key_instance_id) {
      return NextResponse.json(
        { error: "INVALID_OR_EXPIRED" },
        { status: 401 }
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
      return NextResponse.json({ deleted: true, success: true });
    }

    const deactData = await deactRes.json().catch(() => null);
    return NextResponse.json(
      { error: deactData?.message || "Deactivation failed" },
      { status: deactRes.status || 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Deactivation failed" },
      { status: 500 }
    );
  }
}
