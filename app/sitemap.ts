import { MetadataRoute } from 'next'

const serviceSlugs = [
  "custom-web-solutions",
  "digital-marketing",
  "ui-ux-design",
  "ai-automation",
  "mobile-app-development",
  "custom-crm",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = serviceSlugs.map((slug) => ({
    url: `https://mattered.digital/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://mattered.digital',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mattered.digital/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mattered.digital/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mattered.digital/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mattered.digital/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...servicePages,
  ];
}
