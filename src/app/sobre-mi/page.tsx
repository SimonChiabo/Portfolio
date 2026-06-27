import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: 'Conoce más sobre mi trayectoria, experiencia y cómo trabajo.',
};

export default function SobreMiPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Sobre Mí</h1>
      
      <div className="prose prose-lg prose-stone">
        <section className="mb-12">
          <h2>De dónde vengo y hacia dónde voy</h2>
          <p>
            Mi carrera comenzó en el mundo de las finanzas y la contabilidad. Al haber avanzado de forma sólida en la carrera de Contador Público y gestionado la contabilidad de múltiples empresas, desarrollé un entendimiento profundo de cómo los números impactan directamente en las decisiones críticas de negocio.
          </p>
          <p>
            Aunque tengo una fuerte afinidad por las finanzas, me apasiona entender el trasfondo de cualquier negocio, independientemente de la industria, para encontrar puntos de mejora. Más tarde, al co-fundar mi propia empresa, comprobé de primera mano la necesidad vital de automatizar procesos y analizar datos a mayor escala. 
          </p>
          <p>
            Hoy, me encuentro en una transición firme hacia la ciencia de datos y el Machine Learning. Mi objetivo es unir mi visión estratégica con el poder del análisis avanzado e ingeniería de datos para resolver problemas complejos y tangibles.
          </p>
        </section>

        <section className="mb-12">
          <h2>Formación</h2>
          <p>
            Tengo una base sólida en ciencias económicas gracias a mis estudios avanzados en Contaduría Pública en la Universidad Nacional de Córdoba. Tras decidir profundizar en el mundo tecnológico, completé el <strong>career path de Python Developer en Codecademy</strong>. 
          </p>
          <p>
            Actualmente, me encuentro cursando la especialidad de <strong>Data Scientist</strong> en la misma plataforma, complementando mi perfil con fundamentos de Data Engineering y desarrollo Full Stack para tener una visión integral del ciclo de vida de los datos y el desarrollo de producto.
          </p>
        </section>

        <section className="mb-12">
          <h2>Stack y herramientas</h2>
          <p>
            Mi stack ha evolucionado desde herramientas tradicionales de análisis (Excel, SQL, Python, Pandas, NumPy) hacia un ecosistema más robusto de automatización y despliegue.
          </p>
          <p>
            Recientemente me he enfocado en integrar APIs, construir backends con <strong>FastAPI</strong>, orquestar flujos de trabajo con <strong>n8n</strong>, y desplegar servicios utilizando <strong>Docker</strong>, <strong>Cloudflare</strong> y <strong>Vercel</strong>. Para la visualización y análisis de inteligencia de negocio, utilizo plataformas como <strong>Metabase</strong>.
          </p>
        </section>

        <section>
          <h2>Cómo trabajo (Tooling de IA)</h2>
          <p>
            Considero a la Inteligencia Artificial como una palanca multiplicadora, no como un atajo. Utilizo agentes y herramientas de IA para iterar más rápido y acelerar el desarrollo: dirijo la estrategia, entiendo y valido críticamente el código que se genera, y en última instancia, asumo la responsabilidad total del producto final. No se trata de delegar a ciegas, sino de potenciar mis capacidades como analista y desarrollador.
          </p>
        </section>
      </div>
    </div>
  );
}
