import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aktu-erp.in';

  return [
    {
      url: baseUrl, // Homepage
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/university-info`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
  url: `${baseUrl}/Terms`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.5,
},
{
  url: `${baseUrl}/about`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.5,
},
{
  url: `${baseUrl}/contact`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.5,
},
{
  url: `${baseUrl}/disclaimer`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.3,
},
{
  url: `${baseUrl}/lateral-entry`,
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.8,
}
  ];
}