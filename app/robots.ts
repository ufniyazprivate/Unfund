import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unfund.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Protect all internal server actions and mail/telemetry routes
          '/_next/',         // Disallow Next.js internal build assets
          '/verify/*',       // Keep unindexed unless individual public startup badges are verified
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}