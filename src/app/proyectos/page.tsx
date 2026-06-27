import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Casos de estudio detallados donde aplico análisis de datos para resolver problemas de negocio reales.',
  openGraph: {
    title: 'Proyectos | Simón Chiabo',
    description: 'Casos de estudio detallados donde aplico análisis de datos para resolver problemas de negocio reales.',
    images: ['/proyectos/analisis-costos-energia/portada.png'], // TODO: Cambiar por imagen real
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos | Simón Chiabo',
    description: 'Casos de estudio detallados donde aplico análisis de datos para resolver problemas de negocio reales.',
    images: ['/proyectos/analisis-costos-energia/portada.png'],
  },
};

export default function ProyectosPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-32">
      <header className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Proyectos</h1>
        <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
          Casos de estudio detallados donde aplico análisis de datos para resolver problemas de negocio reales.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
