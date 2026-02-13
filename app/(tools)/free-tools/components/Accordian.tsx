"use client";

import { ChevronDown } from "lucide-react";

export const Accordion = ({
    title,
    isOpen,
    onClick,
    children,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
    return (
        <div className="border border-indigo-500/20 rounded-xl">
            <button onClick={onClick} className="w-full p-4 flex justify-between items-center">
                <span className="font-medium">{title}</span>
                <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <div className="p-4 pt-0 space-y-4">{children}</div>}
        </div>
    );
}