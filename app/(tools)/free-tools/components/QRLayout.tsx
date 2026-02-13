"use client";

export const QRLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full p-6 sm:p-8 bg-linear-to-br from-indigo-500/5 to-transparent border border-indigo-500/20 rounded-2xl hover:border-indigo-500/40 hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
                {children}
            </div>
        </div >
    );
}