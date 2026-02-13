export const FOREGROUND_COLORS = [
    "#000000",
    "#6366f1",
    "#ec4899",
    "#22c55e",
];

export const BACKGROUND_COLORS = [
    "#ffffff",
];

export type QRPattern =
  | "square"
  | "dots"
  | "rounded"
  | "classy"
  | "classy-rounded"
  | "extra-rounded";


export const PATTERNS : {id: QRPattern; label: string, icon: React.ReactNode}[] = [
    {
        id: "square",
        label: "Square",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <rect x="4" y="4" width="6" height="6" />
                <rect x="14" y="4" width="6" height="6" />
                <rect x="4" y="14" width="6" height="6" />
                <rect x="14" y="14" width="6" height="6" />
            </svg>
        ),
    },
    {
        id: "dots",
        label: "Dots",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <circle cx="7" cy="7" r="2" />
                <circle cx="17" cy="7" r="2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
            </svg>
        ),
    },
    {
        id: "rounded",
        label: "Rounded",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <rect x="4" y="4" width="6" height="6" rx="2" />
                <rect x="14" y="4" width="6" height="6" rx="2" />
                <rect x="4" y="14" width="6" height="6" rx="2" />
                <rect x="14" y="14" width="6" height="6" rx="2" />
            </svg>
        ),
    },
    {
        id: "extra-rounded",
        label: "Extra Rounded",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <rect x="4" y="4" width="6" height="6" rx="4" />
                <rect x="14" y="4" width="6" height="6" rx="4" />
                <rect x="4" y="14" width="6" height="6" rx="4" />
                <rect x="14" y="14" width="6" height="6" rx="4" />
            </svg>
        ),
    },
    {
        id: "classy",
        label: "Classy",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <rect x="4" y="4" width="5" height="5" />
                <rect x="10" y="4" width="3" height="3" />
                <rect x="14" y="4" width="5" height="5" />
                <rect x="4" y="14" width="5" height="5" />
                <rect x="14" y="14" width="5" height="5" />
            </svg>
        ),
    },
    {
        id: "classy-rounded",
        label: "Classy Rounded",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <rect x="4" y="4" width="5" height="5" rx="2" />
                <rect x="10" y="4" width="3" height="3" rx="1" />
                <rect x="14" y="4" width="5" height="5" rx="2" />
                <rect x="4" y="14" width="5" height="5" rx="2" />
                <rect x="14" y="14" width="5" height="5" rx="2" />
            </svg>
        ),
    },
];

// Contrast Detection Functions
// Convert hex color to RGB
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
};

// Calculate relative luminance (WCAG standard)
export const getLuminance = (hex: string): number => {
    const { r, g, b } = hexToRgb(hex);
    const [rs, gs, bs] = [r, g, b].map(x => {
        x = x / 255;
        return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

// Calculate contrast ratio between two colors
export const getContrastRatio = (color1: string, color2: string): number => {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (lighter + 0.05) / (darker + 0.05);
};

// Check if contrast is sufficient for QR code scanning
// QR codes need contrast ratio >= 3:1 for reliable scanning
export const isContrastSufficient = (fgColor: string, bgColor: string): boolean => {
    const contrastRatio = getContrastRatio(fgColor, bgColor);
    return contrastRatio >= 3; // Minimum 3:1 ratio for QR scanning
};

// Get contrast status and color
export const getContrastStatus = (contrastRatio: number): { status: string; color: string } => {
    if (contrastRatio >= 7) return { status: "Excellent", color: "text-green-500" };
    if (contrastRatio >= 4.5) return { status: "Good", color: "text-green-500" };
    if (contrastRatio >= 3) return { status: "Acceptable", color: "text-yellow-500" };
    return { status: "Poor", color: "text-red-500" };
};
