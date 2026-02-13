"use client";

import { UploadCloudIcon, Phone } from "lucide-react";
import { Accordion } from "./Accordian";
import { ColorRow } from "./ColorRow";
import { BACKGROUND_COLORS, FOREGROUND_COLORS, PATTERNS } from "../utils/utils";
import { QRType } from "./QRType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QRSettings = ({ type, value, setValue, subject, setSubject, body, setBody, smsMessage, setSmsMessage, encryption, setEncryption, wifiPassword, setWifiPassword, qrMargin, setQrMargin, openAccordion, toggleAccordion, fgColor, setFgColor, bgColor, setBgColor, useGradient, setUseGradient, gradientStart, setGradientStart, gradientEnd, setGradientEnd, gradientRotation, setGradientRotation, pattern, setPattern, logo, setLogo, logoSize, setLogoSize, resetSettings, hasChanges, correction, setCorrection }: any) => {

    return (
        <div className="w-full space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">QR Code Settings</h2>
                {hasChanges && (
                    <button
                        onClick={resetSettings}
                        className="text-sm px-3 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-500/80 hover:cursor-pointer transition-all"
                    >
                        Reset
                    </button>
                )}
            </div>

            {/* URL */}
            {type !== "sms" && type !== "wifi" && (
                <QRType type={type} value={value} setValue={setValue} />
            )}

            {/* Email Subject and Body */}
            {type === "email" && (
                <div className="border border-indigo-500/20 rounded-xl p-5 space-y-5">
                    <h3 className="text-sm font-semibold text-gray-200">Email Details</h3>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block font-medium text-sm text-gray-300">Subject <span className="text-gray-500">(optional)</span></label>
                            <span className="text-xs text-gray-500">{subject.length}/100</span>
                        </div>
                        <input
                            type="text"
                            maxLength={100}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="What is this email about?"
                            className="w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block font-medium text-sm text-gray-300">Body <span className="text-gray-500">(optional)</span></label>
                            <span className="text-xs text-gray-500">{body.length}/500</span>
                        </div>
                        <textarea
                            maxLength={500}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Add your message..."
                            rows={3}
                            className="w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all resize-none"
                        />
                    </div>
                </div>
            )}

            {/* SMS Message */}
            {type === "sms" && (
                <div className="border border-indigo-500/20 rounded-xl p-5 space-y-5">
                    <h3 className="text-sm font-semibold text-gray-200">SMS Details</h3>

                    <div>
                        <label className="block mb-2 font-medium text-sm text-gray-300">Phone Number</label>
                        <div className="relative">
                            <Phone
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                            />
                            <input
                                type="tel"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="+1 (555) 123-4567"
                                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block font-medium text-sm text-gray-300">Message <span className="text-gray-500">(optional)</span></label>
                            <span className="text-xs text-gray-500">{smsMessage.length}/160</span>
                        </div>
                        <textarea
                            maxLength={160}
                            value={smsMessage}
                            onChange={(e) => setSmsMessage(e.target.value)}
                            placeholder="Type your message..."
                            rows={3}
                            className="w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all resize-none"
                        />
                    </div>
                </div>
            )}

            {/* WiFi Settings */}
            {type === "wifi" && (
                <div className="border border-indigo-500/20 rounded-xl p-5 space-y-5">
                    <h3 className="text-sm font-semibold text-gray-200">WiFi Details</h3>

                    <div>
                        <label className="block mb-2 font-medium text-sm text-gray-300">SSID (Network Name)</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Your WiFi Network Name"
                            className="w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-sm text-gray-300">Encryption Type</label>
                        <select value={encryption} onChange={(e) => setEncryption(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all " >
                            <option value="WPA">WPA/WPA2</option>
                            <option value="WEP">WEP</option>
                            <option value="nopass">None</option>
                        </select>
                    </div>

                    <div>
                        <label
                            className={`block mb-2 font-medium text-sm ${encryption === "nopass"
                                    ? "text-gray-600"
                                    : "text-gray-300"
                                }`}
                        >
                            Password
                        </label>
                        <input
                            type="text"
                            value={wifiPassword}
                            onChange={(e) => setWifiPassword(e.target.value)}
                            placeholder={encryption === "nopass" ? "No password required" : "Your WiFi Password"}
                            disabled={encryption === "nopass"}
                            className={`w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all ${encryption === "nopass" ? "opacity-50 cursor-not-allowed" : ""}`}
                        />
                    </div>
                </div>
            )}

            {/* Margin */}
            <Accordion
                title="Add Margin"
                isOpen={openAccordion === "size"}
                onClick={() => toggleAccordion("size")}
            >
                <div className="space-y-4">

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm text-gray-400">Margin (Quiet Zone)</label>
                            <span className="text-xs font-medium text-indigo-400">
                                {qrMargin}px
                            </span>
                        </div>

                        <input
                            type="range"
                            value={qrMargin}
                            min={5}
                            max={50}
                            step={5}
                            onChange={(e) => setQrMargin(Number(e.target.value))}
                            className="w-full accent-indigo-500 cursor-pointer "

                        />
                    </div>


                </div>
            </Accordion>


            {/* COLORS */}
            <Accordion
                title="Customize Colors"
                isOpen={openAccordion === "colors"}
                onClick={() => toggleAccordion("colors")}
            >
                <ColorRow label="Foreground Color" colors={FOREGROUND_COLORS} value={fgColor} onChange={setFgColor} />

                <div className="border-t border-indigo-500/20 pt-5 space-y-5">

                    {/* Toggle */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-400">Use Gradient</p>
                        </div>

                        <button
                            onClick={() => setUseGradient(!useGradient)}
                            className={`cursor-pointer relative w-11 h-6 rounded-full transition-all duration-300 ${useGradient ? "bg-indigo-500" : "bg-gray-700"
                                }`}
                        >
                            <span
                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${useGradient ? "translate-x-5" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    {useGradient && (
                        <div className="space-y-5">

                            {/* Color Pickers */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-400">Start</label>
                                    <input
                                        type="color"
                                        value={gradientStart}
                                        onChange={(e) => setGradientStart(e.target.value)}
                                        className="w-full h-10 rounded-lg cursor-pointer border border-gray-700 bg-gray-800"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400">End</label>
                                    <input
                                        type="color"
                                        value={gradientEnd}
                                        onChange={(e) => setGradientEnd(e.target.value)}
                                        className="w-full h-10 rounded-lg cursor-pointer border border-gray-700 bg-gray-800"
                                    />
                                </div>
                            </div>

                            {/* Rotation */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs text-gray-400">Rotation</label>
                                    <span className="text-xs text-indigo-400 font-medium">
                                        {gradientRotation}°
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min={0}
                                    max={360}
                                    value={gradientRotation}
                                    onChange={(e) => setGradientRotation(Number(e.target.value))}
                                    className="w-full accent-indigo-500 cursor-pointer"
                                />
                            </div>

                        </div>
                    )}
                </div>


                <div className="border-t border-indigo-500/20" />

                <ColorRow label="Background Color" colors={BACKGROUND_COLORS} value={bgColor} onChange={setBgColor} />

            </Accordion>

            {/* PATTERN */}
            <Accordion
                title="Pattern Style"
                isOpen={openAccordion === "pattern"}
                onClick={() => toggleAccordion("pattern")}
            >
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                    {PATTERNS.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setPattern(p.id)}
                            className={`cursor-pointer w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${pattern === p.id ? "bg-indigo-500 text-white" : "bg-gray-900/40 text-indigo-300 hover:bg-gray-900/60"
                                }`}
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                {p.icon}
                            </svg>
                        </button>
                    ))}
                </div>
            </Accordion>

            {/* LOGO */}
            <Accordion
                title="Add Logo"
                isOpen={openAccordion === "logo"}
                onClick={() => toggleAccordion("logo")}
            >
                <label className="flex flex-col items-center justify-center w-full h-36 border border-dashed border-indigo-500/30 rounded-xl cursor-pointer bg-gray-900/40 hover:bg-gray-900/60 transition">
                    <UploadCloudIcon className="w-8 h-8 text-indigo-400 mb-2" />
                    <p className="text-sm font-medium">Click to upload</p>
                    <p className="text-xs text-gray-400">SVG, PNG, JPG</p>
                    <input type="file" accept={".png,.jpg,.jpeg,.svg"} className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                            setLogo(reader.result as string);
                        }
                        reader.readAsDataURL(file)
                    }} />


                </label>

                {logo && (
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm text-gray-400">Logo Size</label>
                            <span className="text-xs font-medium text-indigo-400">
                                {Math.round(logoSize * 100)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            value={logoSize}
                            min={0.4}
                            max={1}
                            step={.1}
                            onChange={(e) => setLogoSize(Number(e.target.value))}
                            className="w-full accent-indigo-500 "

                        />

                        <button onClick={() => setLogo(undefined)} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg cursor-pointer">Remove Logo</button>
                    </div>
                )}
            </Accordion>

            {/* QR Correction Level */}
            <Accordion
                title="Error Correction Level"
                isOpen={openAccordion === "correction"}
                onClick={() => toggleAccordion("correction")}
            >
                <div className="space-y-4">

                    <div>

                        <select value={correction} onChange={(e) => setCorrection(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all " > <option value="L">Low</option> <option value="M">Medium</option> <option value="Q">Quartile</option> <option value="H">High</option> </select>
                    </div>


                </div>
            </Accordion>


        </div>

    )
}