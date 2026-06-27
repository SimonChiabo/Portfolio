import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getAllProjects } from '@/lib/projects';
import ImpactStat from '@/components/ImpactStat';
import SyntheticDataBadge from '@/components/SyntheticDataBadge';

export const metadata: Metadata = {
  openGraph: {
    images: ['/proyectos/analisis-costos-energia/portada.png'], // TODO: Cambiar por una imagen real tuya o del sitio
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter(p => p.destacado);

  return (
    <div className="container mx-auto px-4 py-32">
      {/* Hero Section */}
      <section className="max-w-3xl mb-32">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Datos que impulsan decisiones estratégicas.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed">
          Soy Simón Chiabo. Combino mi base en ciencias económicas con análisis avanzado y automatización para descubrir valor oculto y optimizar negocios.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/proyectos" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-medium rounded-xl hover:bg-accent-hover transition-colors shadow-sm">
            Ver proyectos <ArrowRight size={18} />
          </Link>
          <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-foreground border border-border font-medium rounded-xl hover:border-accent hover:text-accent transition-colors">
            Contactar
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
          <Link href="/proyectos" className="text-accent hover:text-accent-hover font-medium flex items-center gap-1 group">
            Ver todos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex flex-col gap-16">
          {featuredProjects.map(project => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`} className="group block">
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-border/50">
                   <Image
                    src={project.imagen_portada}
                    alt={`Portada del proyecto ${project.titulo}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.datos_sinteticos && (
                    <div className="absolute top-6 left-6">
                      <SyntheticDataBadge />
                    </div>
                  )}
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {project.titulo}
                  </h3>
                  <p className="text-xl text-foreground/70 mb-8 leading-relaxed">{project.problema}</p>
                  
                  <div className="border-t border-border pt-8">
                     <ImpactStat value={project.cifra_impacto} size="lg" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
          {featuredProjects.length === 0 && (
            <p className="text-gray-500 italic">No hay proyectos destacados aún.</p>
          )}
        </div>
      </section>
    </div>
  );
}
