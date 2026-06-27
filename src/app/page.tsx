import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getAllProjects } from '@/lib/projects';

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
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="max-w-3xl mb-24">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          TODO: Titular principal de posicionamiento
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
          TODO: Subtítulo que explique qué hacés y para quién, en 1 o 2 líneas.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/proyectos" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Ver proyectos <ArrowRight size={18} />
          </Link>
          <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Contactar
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
          <Link href="/proyectos" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="flex flex-col gap-16">
          {featuredProjects.map(project => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`} className="group block">
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img
                    src={project.imagen_portada}
                    alt={`Portada del proyecto ${project.titulo}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.datos_sinteticos && (
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold shadow-sm border border-amber-200">
                        Datos Sintéticos
                      </span>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.titulo}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{project.problema}</p>
                  
                  <div className="border-t border-gray-200 pt-8">
                     <span className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-2 block">
                        Impacto
                      </span>
                      <span className="font-black text-gray-900 tracking-tight leading-none text-4xl md:text-5xl">
                        {project.cifra_impacto}
                      </span>
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
