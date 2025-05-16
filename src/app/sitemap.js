import { siteConfig } from "@/lib/metadata";

export default function sitemap() {

  return [
    {
      url: siteConfig.baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/bsw`,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.baseUrl}/msw`,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}