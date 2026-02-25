export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../jwt";
const DODO_API_KEY = process.env.DODO_API_KEY!;

type LicenseInstance = {
  license_key?: string;
  name?: string;
};

function extractInstances(data: unknown): LicenseInstance[] {
  if (Array.isArray(data)) return data as LicenseInstance[];
  if (
    data &&
    typeof data === "object" &&
    "items" in data &&
    Array.isArray((data as { items: unknown }).items)
  ) {
    return (data as { items: LicenseInstance[] }).items;
  }

  return [];
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ error: "TOKEN_REQUIRED" }, { status: 400 });
    }

    const payload = verifyToken(token);
    if (!payload.licenseKey || !payload.deviceId || !payload.name) {
      return NextResponse.json(
        { error: "INVALID_OR_EXPIRED" },
        { status: 401 }
      );
    }

    const instancesRes = await fetch(
      "https://live.dodopayments.com/license_key_instances",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${DODO_API_KEY}`,
        },
      }
    );

    if (!instancesRes.ok) {
      return NextResponse.json(
        { error: "INSTANCE_LOOKUP_FAILED" },
        { status: 502 }
      );
    }

    const instancesData = await instancesRes.json();
    const instances = extractInstances(instancesData);
    const matchedInstance = instances.find(
      (item) =>
        item.license_key === payload.licenseKey && item.name === payload.name
    );

    if (!matchedInstance) {
      return NextResponse.json(
        { error: "INVALID_OR_EXPIRED" },
        { status: 401 }
      );
    }

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
    });
  } catch {
    return NextResponse.json(
      { error: "INVALID_OR_EXPIRED" },
      { status: 401 }
    );
  }
}
