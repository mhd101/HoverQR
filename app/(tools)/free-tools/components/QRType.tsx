"use client";
import { Link, Mail, Phone, MessageSquare, Type, WifiHighIcon } from "lucide-react";

interface QRTypeProps {
    type: "text" | "email" | "url" | "phone" | "sms" | "wifi";
    value: string;
    setValue: (value: string) => void;
}

export const QRType = ({ type, value, setValue }: QRTypeProps) => {
    const getTypeConfig = () => {
        switch (type) {
            case "email":
                return {
                    label: "Email Address",
                    placeholder: "example@email.com",
                    inputType: "email",
                    icon: Mail
                };
            case "phone":
                return {
                    label: "Phone Number",
                    placeholder: "+1 (555) 123-4567",
                    inputType: "tel",
                    icon: Phone
                };
            case "sms":
                return {
                    label: "SMS Message",
                    placeholder: "Enter phone number",
                    inputType: "text",
                    icon: MessageSquare
                };
            case "text":
                return {
                    label: "Text",
                    placeholder: "Enter text",
                    inputType: "text",
                    icon: Type
                };
            case "wifi":
            return {
                label: "WiFi Credentials",
                placeholder: "WIFI:SSID;T:WPA;P:password;;",
                inputType: "text",
                icon: WifiHighIcon
            };
            case "url":
            default:
                return {
                    label: "Destination URL",
                    placeholder: "https://hoverqr.in",
                    inputType: "url",
                    icon: Link
                };
        }
    };

    const config = getTypeConfig();
    const Icon = config.icon;

    return (
        <div className="border border-indigo-500/20 rounded-xl p-4">
            <label className="block mb-1 font-medium">{config.label}</label>
            <div className="relative">
                <Icon
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                />

                <input
                    type={config.inputType}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={config.placeholder}
                    className="w-full pl-10 pr-3 p-3 rounded-lg border border-indigo-500/30 bg-gray-900/40 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                />
            </div>
        </div>
    );
}