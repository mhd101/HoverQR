"use client"

import { AlertCircle } from "lucide-react";
import { memo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QRPreviewComponent = ({ qrRef, qrCode, isUrlEmpty, isContrastGood }: any) => {

    return (
        <div className="w-full lg:w-56 flex flex-col items-center gap-4">
            <div className="w-full border border-dashed border-indigo-500/20 rounded-xl p-4 flex flex-col items-center gap-3 overflow-hidden">
                <span className="font-bold text-sm">Live Preview</span>

                <div className="w-full flex justify-center overflow-x-auto">
                    <div
                        ref={qrRef}
                        className="shrink-0"
                    />
                </div>

                {/* Contrast Warning */}
                {!isUrlEmpty && !isContrastGood && (
                    <div className="w-full flex items-start gap-2 px-3 py-2.5 rounded-lg text-sm bg-red-500/10 border border-red-500/30">
                        <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-red-500 font-medium">Low Contrast</p>
                            <p className="text-red-400/80 text-xs">
                                QR code may not scan properly. Select darker foreground colors.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <button disabled={isUrlEmpty} className={`w-full bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 ${isUrlEmpty ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "hover:shadow-lg hover:shadow-indigo-500/40 active:scale-95 cursor-pointer"}`}
                onClick={() => qrCode.current?.download({ name: `QR Code`, extension: 'jpeg' })}>
                Download QR Code
            </button>

            <div className="flex w-full gap-2">
                <button disabled={isUrlEmpty} className={`flex-1 bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 ${isUrlEmpty ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "hover:shadow-lg hover:shadow-indigo-500/40 active:scale-95 cursor-pointer"}`}
                    onClick={() => qrCode.current?.download({ name: `QR Code`, extension: 'svg' })}>
                    SVG
                </button>
                <button disabled={isUrlEmpty} className={`flex-1 bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 ${isUrlEmpty ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "hover:shadow-lg hover:shadow-indigo-500/40 active:scale-95 cursor-pointer"}`}
                    onClick={() => qrCode.current?.download({ name: `QR Code`, extension: 'png' })}>
                    PNG
                </button>
            </div>
        </div>
    )
}

export const QRPreview = memo(QRPreviewComponent);