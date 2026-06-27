import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FileText, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { getAllProjects, getProject } from '@/lib/projects';
import ImpactStat from '@/components/ImpactStat';
import SyntheticDataBadge from '@/components/SyntheticDataBadge';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);
  if (!project) return { title: 'No encontrado' };

  return {
    title: `${project.frontmatter.titulo} | Simón`,
    description: project.frontmatter.problema,
    openGraph: {
      images: [project.frontmatter.imagen_portada]
    }
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <article className="container mx-auto px-4 py-32 max-w-4xl">
      <header className="mb-12">
        <Link href="/proyectos" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={20} /> Volver a proyectos
        </Link>
          
          <div className="flex gap-2 flex-wrap mb-6">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-8 leading-tight">
            {frontmatter.titulo}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-10">
            <ImpactStat value={frontmatter.cifra_impacto} size="lg" />
            
            {frontmatter.datos_sinteticos && (
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <SyntheticDataBadge />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {frontmatter.repo_url && (
              <a href={frontmatter.repo_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent-hover transition-colors shadow-sm">
                <FaGithub size={18} /> Ver Repositorio
              </a>
            )}

          </div>
      </header>

      <div className="prose prose-lg prose-stone max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
