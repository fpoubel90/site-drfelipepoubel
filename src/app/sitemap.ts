// Em src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // MUITO IMPORTANTE: Substitua pela URL base correta do SEU site
  const baseUrl = 'https://www.drfelipepoubel.com.br'; 

  // Páginas principais do seu site
  const staticPages = [
    {
      url: baseUrl, // Página Inicial
      lastModified: new Date(),
      changeFrequency: 'yearly', // Pode ser 'monthly' se você atualiza a home com frequência
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#sobre`, // Seção Sobre na página inicial
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#servicos`, // Seção Tratamentos em Destaque na página inicial
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#localizacao`, // Seção Onde me Encontrar na página inicial
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Suas páginas de serviço detalhadas
  const servicePages = [
    {
      url: `${baseUrl}/servicos/cirurgia-geral`,
      lastModified: new Date(), // Idealmente, data da última modificação real do conteúdo
      changeFrequency: 'monthly', // Com que frequência você espera que o conteúdo mude
      priority: 0.9, // Prioridade um pouco maior para páginas de serviço
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
    // Adicione mais páginas de serviço aqui se você criar mais no futuro
  ];

  return [...staticPages, ...servicePages];
}