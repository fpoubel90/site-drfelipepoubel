import { MetadataRoute } from 'next';

// Define o tipo para cada entrada do sitemap para maior clareza
type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; // Tipo literal exato
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.drfelipepoubel.com.br'; 

  const staticPages: SitemapEntry[] = [ // Adiciona o tipo aqui
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly', 
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#sobre`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#servicos`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#localizacao`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const servicePages: SitemapEntry[] = [ // Adiciona o tipo aqui
    {
      url: `${baseUrl}/servicos/cirurgia-geral`,
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.9, 
    },
    {
      url: `${baseUrl}/servicos/cancer-de-pele`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/cirurgias-ambulatoriais`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  const allEntries: MetadataRoute.Sitemap = [...staticPages, ...servicePages];
  return allEntries; // Retorna o array já com o tipo esperado
}