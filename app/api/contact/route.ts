import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("Contact form:", { email, subject, message });

  return NextResponse.json({ success: true });
}
