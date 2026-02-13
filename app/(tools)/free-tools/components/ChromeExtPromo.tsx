"use client";
import Image from "next/image";

export const ChromeExtPromo = () => {
    return (
        < div className="mt-10 w-full border border-indigo-500/20 rounded-2xl p-6 sm:p-8 bg-linear-to-br from-indigo-500/5 to-transparent hover:border-indigo-500/40 transition-all duration-300" >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

                {/* Left */}
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                        Scan QR codes instantly — anywhere on the web 🚀
                    </h3>

                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                        Install <span className="text-indigo-400 font-medium">HoverQR</span>, the Chrome extension that lets you scan QR codes
                        just by hovering over links, images, or even videos. No clicks. No downloads.
                    </p>

                    <ul className="text-md text-gray-400 space-y-1 mb-5">
                        <li>• Scan QR codes inside images & YouTube videos</li>
                        <li>• Generate QR codes instantly</li>
                        <li>• Fast, private & lightweight</li>
                    </ul>

                    <a
                        href="https://chromewebstore.google.com/detail/mjgheejcnmceaaobpilbpmehlpkbigmp?utm_source=item-share-cb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-indigo-500 text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 active:scale-95 gap-2"
                    >
                        <Image
                            src="/images/chrome.png"
                            alt="Chrome Logo"
                            width={24}
                            height={24}
                        />
                        Add to Chrome
                    </a>
                </div>

                {/* Right (Visual Placeholder / Icon) */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-semibold relative">
                    <Image 
                        src="/images/hoverqr.png" 
                        alt="HoverQR" 
                        fill
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div >
    )
}