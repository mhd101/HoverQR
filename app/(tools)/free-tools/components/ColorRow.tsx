"use client";

import { PlusIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ColorRow = ({ label, colors, value, onChange }: any) => {
    return (
        <div>
            <p className="text-sm text-gray-400 mb-2">{label}</p>
            <div className="flex gap-3 flex-wrap">
                {colors.map((c: string) => (
                    <button
                        key={c}
                        onClick={() => onChange(c)}
                        className={`cursor-pointer w-9 h-9 rounded-full ${value === c ? "ring ring-white" : ""}`}
                        style={{ backgroundColor: c }}
                    />
                ))}
                <label className="w-9 h-9 rounded-full border border-dashed border-white/30 flex items-center justify-center cursor-pointer">
                    <input type="color" className="sr-only" value={value} onChange={(e) => onChange(e.target.value)} />
                    <PlusIcon className="w-3 h-3" />
                </label>
            </div>
        </div>
    );
}


