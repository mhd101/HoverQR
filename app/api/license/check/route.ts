import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../jwt";
import { FREE_LIMITS } from "../limits";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const payload = verifyToken(token);

    return NextResponse.json({
      premium: payload.premium,
      usage: payload.usage,
      limits: FREE_LIMITS,
    });
  } catch {
    return NextResponse.json(
      { error: "INVALID_OR_EXPIRED" },
      { status: 401 }
    );
  }
}