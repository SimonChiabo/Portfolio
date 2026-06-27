import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-xi-steel-gquxwzv0xy.vercel.app';
  
  const projects = getAllProjects();
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
