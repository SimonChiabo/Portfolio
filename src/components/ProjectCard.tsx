import Link from 'next/link';
import Image from 'next/image';
import { ProjectFrontmatter } from '@/lib/projects';
import SyntheticDataBadge from './SyntheticDataBadge';
import ImpactStat from './ImpactStat';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-background rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-border/50">
          <Image
            src={project.imagen_portada}
            alt={`Portada del proyecto ${project.titulo}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.datos_sinteticos && (
            <div className="absolute top-4 left-4">
              <SyntheticDataBadge />
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
            {project.titulo}
            <ArrowUpRight size={20} className="text-accent opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </h3>
          <p className="text-foreground/70 mb-6 flex-grow">{project.problema}</p>
          <div className="mt-auto pt-6 border-t border-border">
            <ImpactStat value={project.cifra_impacto} size="sm" />
          </div>
        </div>
      </article>
    </Link>
  );
}
