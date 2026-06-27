import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí | Simón',
  description: 'Conoce más sobre mi trayectoria y experiencia.',
};

export default function SobreMiPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Sobre Mí</h1>
      
      <div className="prose prose-lg prose-blue">
        <section className="mb-12">
          <h2>De dónde vengo y hacia dónde voy</h2>
          <p className="text-gray-500 italic bg-gray-50 p-4 rounded-md border border-gray-200">
            TODO: Narrativa de transición (de análisis de datos hacia ML). Foco en criterio e impacto de negocio.
          </p>
        </section>

        <section className="mb-12">
          <h2>Formación</h2>
          <p className="text-gray-500 italic bg-gray-50 p-4 rounded-md border border-gray-200">
            TODO: Detallar formación (curso Python, Data Science en Codecademy, especialidad en ML en curso, etc).
          </p>
        </section>

        <section className="mb-12">
          <h2>Stack y herramientas</h2>
          <p className="text-gray-500 italic bg-gray-50 p-4 rounded-md border border-gray-200">
            TODO: Listar stack con el que trabajás.
          </p>
        </section>

        <section>
          <h2>Cómo trabajo (Tooling de IA)</h2>
          <p className="text-gray-500 italic bg-gray-50 p-4 rounded-md border border-gray-200">
            TODO: Tu framing sobre uso de IA (ej: "Uso agentes de IA para acelerar el desarrollo: dirijo, entiendo y valido el output, y soy dueño del resultado.")
          </p>
        </section>
      </div>
    </div>
  );
}
