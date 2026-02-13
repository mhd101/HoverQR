"use client"

import { useRef } from "react"
import { useEffect } from "react"
import QRCodeStyling, {Options} from "qr-code-styling"

type DotType = NonNullable<
  NonNullable<Options["dotsOptions"]>["type"]
>;

type GradientType = NonNullable<
  NonNullable<Options["dotsOptions"]>["gradient"]
>["type"];

interface QRProps {
    url: string,
    fgColor: string,
    bgColor: string,
    pattern: DotType,
    qrMargin: number,
    useGradient: boolean,
    gradientStart: string,
    gradientEnd: string,
    gradientRotation: number,
    gradientType: GradientType,
    logo: string | null,
    logoSize: number,
    isUrlEmpty: boolean,
    correction: "L" | "M" | "Q" | "H",
}

export const useQRCode = (props: QRProps) => {
    const qrRef = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling | null>(null);

    useEffect(() => {
    
            qrCode.current = new QRCodeStyling({
                width: 200,
                height: 200,
                data: props.url,
                image: "",
                margin: props.qrMargin,
                dotsOptions: {
                    color: props.fgColor,
                    type: props.pattern as "dots" | "rounded" | "classy" | "classy-rounded" | "square",
                },
                backgroundOptions: {
                    color: props.bgColor,
                },
                qrOptions: {
                    typeNumber: 0,
                    errorCorrectionLevel: props.correction,
                    mode: "Byte",
                }
            });
            if (qrRef.current) {
                qrRef.current.innerHTML = ""
                qrCode.current.append(qrRef.current);
            }
    
            if (!qrCode.current) return;
    
            const dotsOptions = props.useGradient
                ? {
                    type: props.pattern,
                    gradient: {
                        type: props.gradientType,
                        rotation: props.gradientRotation,
                        colorStops: [
                            { offset: 0, color: props.gradientStart },
                            { offset: 1, color: props.gradientEnd },
                        ],
                    },
                }
                : {
                    type: props.pattern,
                    color: props.fgColor,
                    gradient: undefined, // important: removes old gradient
                };
    
    
            qrCode.current.update({
                width: 200,
                height: 200,
                margin: props.qrMargin,
                data: props.isUrlEmpty ? "https://hoverqr.in" : props.url,
                image: props.logo || "",
                imageOptions: {
                    crossOrigin: 'anonymous',
                    margin: 0,
                    imageSize: props.logoSize,
                },
                dotsOptions: dotsOptions,
                backgroundOptions: {
                    color: props.bgColor,
                },
                qrOptions: {
                    typeNumber: 0,
                    errorCorrectionLevel: props.correction,
                    mode: "Byte",
                }
            });
        }, [props.bgColor, props.correction, props.fgColor, props.gradientEnd, props.gradientRotation, props.gradientStart, props.gradientType, props.isUrlEmpty, props.logo, props.logoSize, props.pattern, props.qrMargin, props.url, props.useGradient]);

    return {qrRef, qrCode}
}