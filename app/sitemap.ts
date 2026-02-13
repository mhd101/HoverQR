// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hoverqr.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
        url: "https://hoverqr.in/privacy-policy",
        lastModified: new Date(),
        priority: 0.8,
    },
    {
        url: "https://hoverqr.in/terms-of-service",
        lastModified: new Date(),
        priority: 0.8,
    },
    {
        url: "https://hoverqr.in/contact-us",
        lastModified: new Date(),
        priority: 0.8,
    },
    {
        url: "https://hoverqr.in/credits",
        lastModified: new Date(),
        priority: 0.8,
    },
    {
      url: "https://hoverqr.in/free-tools",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
        url: "https://hoverqr.in/free-tools/url-qr-generator",
        lastModified: new Date(),
        priority: 0.9,  
    },
    {
        url: "https://hoverqr.in/free-tools/text-qr-generator",
        lastModified: new Date(),
        priority: 0.9,  
    },
    {
        url: "https://hoverqr.in/free-tools/email-qr-generator",
        lastModified: new Date(),
        priority: 0.9,  
    },
    {
        url: "https://hoverqr.in/free-tools/phone-qr-generator",
        lastModified: new Date(),
        priority: 0.9,
    },
    {
        url: "https://hoverqr.in/free-tools/sms-qr-generator",
        lastModified: new Date(),
        priority: 0.9,
    },
    {
        url: "https://hoverqr.in/free-tools/wifi-qr-generator",
        lastModified: new Date(),
        priority: 0.9,
    }
  ];
}
