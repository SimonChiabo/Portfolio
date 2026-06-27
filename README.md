# Portfolio de Simón

Portfolio profesional construido con Next.js (App Router), Tailwind CSS y MDX.

## Cómo correr localmente

1. Clona el repositorio.
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Cómo agregar un proyecto nuevo

1. Crea un nuevo archivo `.mdx` en `content/proyectos/` (ej: `nuevo-proyecto.mdx`).
2. Usa el siguiente bloque de frontmatter al inicio del archivo:
   ```yaml
   ---
   titulo: "Título de tu proyecto"
   slug: "nuevo-proyecto"
   orden: 2
   problema: "Breve descripción del problema de negocio"
   cifra_impacto: "El impacto, ej. ~15% de ahorro"
   tags: ["Tag 1", "Tag 2"]
   repo_url: "https://github.com/..."
   notebook_url: "https://github.com/..."
   imagen_portada: "/proyectos/nuevo-proyecto/portada.png"
   datos_sinteticos: true o false
   destacado: true o false
   ---
   ```
3. Debajo del frontmatter, redacta el contenido con las 4 secciones principales (Problema de negocio, Datos y metodología, Qué hice, Qué encontré / impacto).
4. Crea la carpeta de imágenes en `public/proyectos/nuevo-proyecto/` y coloca ahí tu `portada.png` y cualquier otro gráfico referenciado en el MDX.

## Cómo desplegar en Vercel

1. Sube tu código a un repositorio en GitHub.
2. Ve a [Vercel](https://vercel.com) y selecciona "Add New Project".
3. Importa el repositorio de GitHub.
4. Vercel detectará automáticamente que es un proyecto Next.js.
5. Haz clic en "Deploy".
