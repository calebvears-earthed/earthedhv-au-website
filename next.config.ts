import type { NextConfig } from "next";

const legacy: { source: string; hash: string }[] = [
  { source: "/about", hash: "about" },
  { source: "/services", hash: "capabilities" },
  { source: "/services/:path*", hash: "capabilities" },
  { source: "/capabilities", hash: "capabilities" },
  { source: "/capabilities/:path*", hash: "capabilities" },
  { source: "/projects", hash: "projects" },
  { source: "/projects/:path*", hash: "projects" },
  { source: "/safety", hash: "safety" },
  { source: "/contact", hash: "contact" },
  { source: "/privacy", hash: "privacy" },
  { source: "/thank-you", hash: "contact" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacy.map((item) => ({
      source: item.source,
      destination: `/#${item.hash}`,
      permanent: false,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
