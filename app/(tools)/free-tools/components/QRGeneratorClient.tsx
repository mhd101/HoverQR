"use client";

import { QRLayout } from "./QRLayout";
import { QRSettings } from "./QRSettings";
import { QRPreview } from "./QRPreview";
import { useQRCode } from "../hooks/useQRCode";
import { useState, useMemo, useCallback } from "react";
import { BACKGROUND_COLORS, FOREGROUND_COLORS, isContrastSufficient } from "../utils/utils";


interface QRGeneratorClientProps {
    type: "text" | "email" | "url" | "phone" | "sms" | "wifi";
}

export const QRGeneratorClient = ({ type }: QRGeneratorClientProps) => {

    const [fgColor, setFgColor] = useState(FOREGROUND_COLORS[0]);
    const [bgColor, setBgColor] = useState(BACKGROUND_COLORS[0]);
    const [qrMargin, setQrMargin] = useState(10);

    const [pattern, setPattern] = useState<"square" | "dots" | "rounded" | "classy" | "classy-rounded" | "extra-rounded">("square");
    const [value, setValue] = useState(type === 'url' ? 'https://hoverqr.in' : '');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [smsMessage, setSmsMessage] = useState('');
    const [logo, setLogo] = useState<string | undefined>(undefined);
    const [logoSize, setLogoSize] = useState(0.4);

    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const [useGradient, setUseGradient] = useState(false);
    const [gradientStart, setGradientStart] = useState("#6366f1");
    const [gradientEnd, setGradientEnd] = useState("#ec4899");
    const [gradientRotation, setGradientRotation] = useState(0);
    const [gradientType, setGradientType] = useState<"linear" | "radial">("linear");

    const [correction, setCorrection] = useState<"L" | "M" | "Q" | "H">("Q");
    const isUrlEmpty = value.trim() === "";

    const [encryption, setEncryption] = useState<"WPA" | "WEP" | "nopass">("WPA");
    const [wifiPassword, setWifiPassword] = useState("");



    const toggleAccordion = useCallback((id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    }, []);

    const resetSettings = useCallback(() => {
        setFgColor(FOREGROUND_COLORS[0]);
        setBgColor(BACKGROUND_COLORS[0]);
        setQrMargin(10);
        setPattern("square");
        setValue(type === 'url' ? 'https://hoverqr.in' : '');
        setSubject('');
        setBody('');
        setSmsMessage('');
        setLogo(undefined);
        setLogoSize(0.4);
        setOpenAccordion(null);
        setUseGradient(false);
        setGradientStart("#6366f1");
        setGradientEnd("#ec4899");
        setGradientRotation(0);
        setGradientType("linear");
        setCorrection("Q");
        setEncryption("WPA");
        setWifiPassword("");
    }, [type]);

    const hasChanges = () => {
        return (
            fgColor !== FOREGROUND_COLORS[0] ||
            bgColor !== BACKGROUND_COLORS[0] ||
            qrMargin !== 10 ||
            pattern !== "square" ||
            logo !== undefined ||
            logoSize !== 0.4 ||
            useGradient !== false ||
            gradientStart !== "#6366f1" ||
            gradientEnd !== "#ec4899" ||
            gradientRotation !== 0 ||
            gradientType !== "linear" ||
            correction !== "Q"
        );
    };

    const getFormattedValue = useCallback(() => {
        switch (type) {
            case "email":
                let mailtoUrl = `mailto:${value}`;
                const params = [];
                if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
                if (body) params.push(`body=${encodeURIComponent(body)}`);
                if (params.length > 0) {
                    mailtoUrl += `?${params.join("&")}`;
                }
                return mailtoUrl;

            case "phone":
                return `tel:${value}`;

            case "sms":
                let smsUrl = `sms:${value}`;
                if (smsMessage) {
                    smsUrl += `?body=${encodeURIComponent(smsMessage)}`;
                }
                return smsUrl;

            case "wifi":
                if (!value) return "";

                if (encryption === "nopass") {
                    return `WIFI:S:${value};T:nopass;;`;
                }

                return `WIFI:S:${value};T:${encryption};P:${wifiPassword};;`;

            case "text":
            case "url":
            default:
                return value;
        }
    }, [type, value, subject, body, smsMessage, encryption, wifiPassword]);


    // Calculate contrast ratio for the QR code colors
    const isContrastGood = useMemo(() => {
        return isContrastSufficient(fgColor, bgColor);
    }, [fgColor, bgColor]);

    const { qrRef, qrCode } = useQRCode({
        url: getFormattedValue(),
        fgColor,
        bgColor,
        pattern,
        qrMargin,
        useGradient,
        gradientStart,
        gradientEnd,
        gradientRotation,
        gradientType,
        logo: logo || null,
        logoSize,
        isUrlEmpty,
        correction,

    });
    return (
        <QRLayout>
            {/* LEFT */}
            <QRSettings type={type} value={value} setValue={setValue} subject={subject} setSubject={setSubject} body={body} setBody={setBody} smsMessage={smsMessage} setSmsMessage={setSmsMessage} qrMargin={qrMargin} setQrMargin={setQrMargin} openAccordion={openAccordion} toggleAccordion={toggleAccordion} fgColor={fgColor} setFgColor={setFgColor} bgColor={bgColor} setBgColor={setBgColor} useGradient={useGradient} setUseGradient={setUseGradient} gradientStart={gradientStart} setGradientStart={setGradientStart} gradientEnd={gradientEnd} setGradientEnd={setGradientEnd} gradientRotation={gradientRotation} setGradientRotation={setGradientRotation} pattern={pattern} setPattern={setPattern} logo={logo} setLogo={setLogo} logoSize={logoSize} setLogoSize={setLogoSize} resetSettings={resetSettings} hasChanges={hasChanges()} correction={correction} setCorrection={setCorrection} encryption={encryption} setEncryption={setEncryption} wifiPassword={wifiPassword} setWifiPassword={setWifiPassword} />

            {/* RIGHT */}
            <QRPreview qrRef={qrRef} qrCode={qrCode} isUrlEmpty={isUrlEmpty} isContrastGood={isContrastGood} />
        </QRLayout>
    )
}