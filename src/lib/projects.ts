import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/proyectos');

export type ProjectFrontmatter = {
  titulo: string;
  slug: string;
  orden: number;
  problema: string;
  cifra_impacto: string;
  tags: string[];
  repo_url: string;
  notebook_url: string | null;
  imagen_portada: string;
  datos_sinteticos: boolean;
  destacado: boolean;
};

export type Project = {
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getAllProjects(): ProjectFrontmatter[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      return data as ProjectFrontmatter;
    })
    .sort((a, b) => a.orden - b.orden);

  return projects;
}

export function getProject(slug: string): Project | null {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  } catch (e) {
    return null;
  }
}
