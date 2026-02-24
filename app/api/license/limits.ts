export const runtime = "nodejs";

export const FREE_LIMITS = {
  history: 3,
  snipToScan: 3,
  generateQRFromSelection: 3,
};

export type FeatureName = keyof typeof FREE_LIMITS;