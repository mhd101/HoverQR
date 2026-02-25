export const runtime = "nodejs";

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface LicensePayload {
  licenseKey: string;
  deviceId: string;
  name?: string;
}

export function signToken(payload: LicensePayload) {
  // remove jwt meta fields if present
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cleanPayload: any = { ...payload };
  delete cleanPayload.exp;
  delete cleanPayload.iat;
  delete cleanPayload.nbf;

  return jwt.sign(cleanPayload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): LicensePayload {
  return jwt.verify(token, JWT_SECRET) as LicensePayload;
}

export function decodeToken(token: string): LicensePayload {
  return jwt.verify(token, JWT_SECRET, {
    ignoreExpiration: true,
  }) as LicensePayload;
}
