export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { signToken, LicensePayload } from "../jwt";

const DODO_API_KEY = process.env.DODO_API_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { licenseKey, deviceId, name } = await req.json();

    if (!licenseKey || !deviceId) {
      return NextResponse.json(
        { error: "Missing licenseKey or deviceId" },
        { status: 400 }
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

    if (!actRes.ok) {
      return NextResponse.json(
        { error: actData.message || "Activation failed" },
        { status: 401 }
      );
    }

    const payload: LicensePayload = {
      licenseKey,
      deviceId,
      name
    };

    const token = signToken(payload);

    return NextResponse.json({ token, valid: true });
  } catch {
    return NextResponse.json(
      { error: "Activation failed" },
      { status: 500 }
    );
  }
}
