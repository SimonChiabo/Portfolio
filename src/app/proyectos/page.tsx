import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos | Simón',
  description: 'Proyectos y casos de estudio de análisis de datos.',
};

export default function ProyectosPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-20">
      <header className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Proyectos</h1>
        <p className="text-xl text-gray-600">
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
