# Portfolio — Playbook de implementación

Guía operativa para construir y mantener el portfolio. Cada fase indica si es
**tu mano** (un procedimiento que ejecutás vos) o un **prompt de agente** (lo
pegás en tu agente de IA). Los prompts son autocontenidos.

Regla que atraviesa todo: **ningún agente inventa tus números ni tu historia.**
Donde un dato no salga de tu notebook o de una respuesta tuya, queda marcado
`[VERIFICAR]` o `TODO` para que lo completes vos.

---

## Decisiones tomadas por mí (revisalas y corregí si no van)

1. **Idioma: español primero.** Todo el sitio arranca en español. Si tu mercado
   objetivo es remoto/internacional, conviene una versión en inglés o bilingüe
   más adelante; la arquitectura MDX lo soporta sin rehacer. *Pendiente tuyo:
   confirmar mercado objetivo.*
2. **Dominio: comprar `simonchiabo.com` (o similar).** Recomendado sobre quedarse
   en `*.vercel.app`. Cuesta poco y la percepción profesional cambia. El diseño
   funciona igual si todavía no lo comprás. *Pendiente tuyo: decidir y comprar.*
3. **Un solo tema visual en v1.** Sin toggle dark/light. Se suma después si lo
   querés.
4. **Contacto sin formulario.** `mailto:` + links + descarga de CV. Un form
   necesita backend y antispam y no suma nada que un reclutador valore.
5. **Framing del uso de IA en "Sobre mí": tu decisión, no la mía.** Lo dejo como
   pendiente de redacción tuya (ver Fase 4). Sugerencia: "dirijo y valido", no
   "delego".

---

## Fase 0 — Preparación · TU MANO (≈30 min)

No hay prompt. Es juntar lo que las fases siguientes necesitan. Sin esto, el
sitio buildea pero queda hueco.

**Confirmar decisiones:** mercado/idioma (decisión 1) y dominio (decisión 2).

**Juntar materiales:**
- [ ] Email de contacto profesional.
- [ ] URL de tu LinkedIn.
- [ ] URL de tu GitHub.
- [ ] CV en PDF (lo vas a poner en `/public/cv.pdf`).
- [ ] Del notebook del Proyecto 1: exportá los **2–3 gráficos clave** como PNG
      (los que cuentan el hallazgo: derroche estacional, ahorro, ROI/payback).
      Estos son la evidencia visual que convence; sin ellos el detalle queda
      con el aviso de datos sintéticos pero sin la prueba.
- [ ] Una imagen de portada para el Proyecto 1 (puede ser uno de esos gráficos).

---

## Fase 1 — Esqueleto · PROMPT DE AGENTE

Genera el sitio que corre y buildea, con las 5 rutas y el Proyecto 1 cargado con
metadatos reales y narrativa en TODO.

```
Construí un sitio web de portfolio profesional en Next.js, listo para
desplegar en Vercel y conectar a GitHub. NO inventes contenido narrativo ni
métricas: donde no te dé texto real, dejá un TODO visible.

STACK
- Next.js con App Router y TypeScript.
- Tailwind CSS para estilos.
- Contenido en MDX leído del filesystem (frontmatter con gray-matter,
  render con next-mdx-remote/rsc o equivalente compatible con React Server
  Components). Sin CMS, sin base de datos, sin servicios externos.
- Todo estático/SSG. Debe correr con `npm run dev` y buildear sin errores.

MODELO DE CONTENIDO
- Los proyectos viven en `content/proyectos/<slug>.mdx`.
- Frontmatter tipado (definí un type TypeScript y validá que cada archivo lo
  cumpla; si falta un campo, que falle el build):
    titulo: string
    slug: string
    orden: number          // controla el orden en la vitrina
    problema: string        // una línea, problema de negocio
    cifra_impacto: string   // ej. "~20% de ahorro en combustible"
    tags: string[]
    repo_url: string
    notebook_url: string | null
    imagen_portada: string  // ruta en /public/proyectos/<slug>/
    datos_sinteticos: boolean
    destacado: boolean      // aparece en la landing
- El cuerpo MDX contiene la narrativa en 4 secciones, en este orden:
  Problema de negocio → Datos y metodología → Qué hice → Qué encontré / impacto.
- Las imágenes de cada proyecto van en `public/proyectos/<slug>/`.

UTILIDADES DE CONTENIDO
- `getAllProjects()`: lee todos los frontmatter y los devuelve ordenados por
  `orden` (sin compilar el cuerpo). Lo usa la vitrina y la landing.
- `getProject(slug)`: devuelve frontmatter + cuerpo MDX compilado. Lo usa el
  detalle.
- `getStaticParams` para pre-generar todas las rutas de detalle.

RUTAS Y PÁGINAS
- `/` (Landing): hero con titular de posicionamiento y subtítulo (dejalos como
  TODO editable), y un bloque de "proyecto destacado" en formato EDITORIAL
  grande (no una grilla) para los proyectos con `destacado: true`. Con uno o dos
  proyectos tiene que verse intencional, no vacío. CTAs a `/proyectos` y
  `/contacto`.
- `/proyectos` (Vitrina): grilla responsive de tarjetas ordenadas por `orden`.
  Cada tarjeta: imagen_portada, titulo, `problema`, `cifra_impacto` destacada,
  tags, y badge si `datos_sinteticos`. Linkea a `/proyectos/<slug>`.
- `/proyectos/[slug]` (Detalle): hero con titulo + `cifra_impacto` prominente +
  botones a repo_url y notebook_url. Debajo del hero, si `datos_sinteticos` es
  true, renderizá el componente SyntheticDataBadge de forma VISIBLE (no nota al
  pie). Luego el cuerpo MDX con las 4 secciones y sus gráficos.
- `/sobre-mi`: estructura con secciones (narrativa de transición, stack,
  formación, cómo trabajo) con TODOs para que el dueño escriba el texto.
- `/contacto`: SIN formulario. Links a email (mailto), LinkedIn, GitHub, y
  botón de descarga de CV desde `/public/cv.pdf`. Dejá los valores como TODO.

COMPONENTES CLAVE
- `ProjectCard`: la tarjeta de la vitrina.
- `ImpactStat`: muestra `cifra_impacto` con tratamiento destacado. La cifra es
  fuente única: tarjeta y detalle leen el MISMO campo, nunca se reescribe.
- `SyntheticDataBadge`: aviso claro y visible de datos sintéticos/supuestos.
- `Header`/`Nav` y `Footer` consistentes en todas las páginas.

DISEÑO
- Limpio, editorial, tipografía cuidada. Que NO parezca un template genérico.
- Responsive y accesible (contraste, alt en imágenes, navegación por teclado,
  HTML semántico).
- Un solo tema visual, sin toggle dark/light.

SEO
- Metadata por página (title, description) usando la API de metadata de Next.
- Open Graph básico por página y por proyecto (title, description, imagen).
- `sitemap.xml` y `robots.txt`.

CONTENIDO SEMILLA (para que el sitio buildee y muestre algo)
- Creá `content/proyectos/analisis-costos-energia.mdx` con ESTE frontmatter
  real, y el cuerpo con las 4 secciones rellenas con TODO (no inventes el
  texto ni números nuevos):
    titulo: "Análisis y Optimización de Costos de Energía"
    slug: "analisis-costos-energia"
    orden: 1
    problema: "Derroche estacional de calefacción en 200 apartamentos turísticos"
    cifra_impacto: "~20% de ahorro real en combustible"
    tags: ["Análisis de datos", "Modelado financiero", "ROI", "Python"]
    repo_url: "https://github.com/SimonChiabo/Analisis_Costos_Energia"
    notebook_url: "https://github.com/SimonChiabo/Analisis_Costos_Energia"
    imagen_portada: "/proyectos/analisis-costos-energia/portada.png"
    datos_sinteticos: true
    destacado: true
- Poné una imagen placeholder en esa ruta para que no rompa el build.

ENTREGABLE
- Repo que corre con `npm run dev` y buildea limpio.
- README con: cómo correr local, cómo agregar un proyecto nuevo (crear un .mdx
  + carpeta de imágenes), y cómo desplegar en Vercel.
- Estructura de carpetas clara y comentada donde ayude.
```

---

## Fase 2 — Deploy temprano · TU MANO (procedimiento, no prompt)

Hacelo ANTES de tener el contenido final: querés iterar sobre una URL real, no
sobre tu máquina.

1. En GitHub, creá un repo nuevo (ej. `portfolio`), vacío.
2. En la carpeta del proyecto que generó el agente:
   ```
   git init
   git add .
   git commit -m "Esqueleto del portfolio"
   git branch -M main
   git remote add origin https://github.com/SimonChiabo/portfolio.git
   git push -u origin main
   ```
3. Entrá a vercel.com, "Add New Project", importá el repo de GitHub.
4. Vercel detecta Next.js solo. Dejá los defaults y "Deploy".
5. En 1–2 min tenés una URL `*.vercel.app`. Abrila, confirmá que se ve.
6. Si compraste dominio: Project → Settings → Domains → agregá tu dominio y
   seguí las instrucciones de DNS que te da Vercel.

Desde acá, cada `git push` a `main` redespliega solo.

---

## Fase 3 — Contenido del Proyecto 1 · PROMPT DE AGENTE (anclado a tu notebook)

Este prompt NO inventa. El agente lee tu notebook real y redacta agarrado de los
outputs; lo que no pueda verificar lo marca para vos. Corré esto con el agente
apuntando al repo `Analisis_Costos_Energia`.

```
Tenés acceso al repositorio del proyecto "Análisis y Optimización de Costos de
Energía" (notebook de análisis incluido). Tu tarea: redactar el CUERPO MDX de la
página de detalle del proyecto, en español, siguiendo 4 secciones en este orden:

  1. Problema de negocio
  2. Datos y metodología
  3. Qué hice
  4. Qué encontré / Qué impacto tuvo

REGLAS INNEGOCIABLES SOBRE LOS NÚMEROS
- Toda cifra cuantitativa (porcentajes, montos, CAPEX/OPEX/ROI/payback, tamaños
  de muestra, etc.) debe salir DIRECTAMENTE de una celda del notebook o de su
  output. No estimes, no redondees "para que quede lindo", no rellenes huecos.
- Por cada cifra que uses, anotá de dónde la sacaste.
- Si una afirmación no la podés respaldar con una celda concreta, escribila igual
  pero marcada con [VERIFICAR: ...] explicando qué falta confirmar.
- Este proyecto usa DATOS SINTÉTICOS (es un caso real reconstruido). El texto
  debe dejarlo explícito en "Datos y metodología", sin que suene a que los datos
  son reales.

CONTEXTO QUE YA SÉ DEL PROYECTO (usalo como guía, verificá contra el notebook):
- Caso real reconstruido con datos sintéticos.
- Detección de derroche estacional de calefacción en 200 apartamentos turísticos.
- Propuesta: interruptores de tarjeta.
- Resultado declarado: ~20% de ahorro real en combustible.
- Incluye modelado financiero (CAPEX/OPEX/ROI/payback) y análisis de sensibilidad.

QUÉ ESCRIBIR EN CADA SECCIÓN
- Problema de negocio: qué se estaba perdiendo y por qué importa en plata.
  Sin jerga, orientado a negocio.
- Datos y metodología: origen y naturaleza de los datos (DEJAR CLARO que son
  sintéticos), período, variables, y el enfoque analítico. Mencioná las
  librerías sólo si aportan; el foco es el criterio, no "usé pandas".
- Qué hice: el análisis y el modelado financiero, en lenguaje claro.
- Qué encontró / impacto: el hallazgo central y LA cifra de impacto. La cifra
  principal debe coincidir EXACTAMENTE con el campo `cifra_impacto` del
  frontmatter ("~20% de ahorro real en combustible").

ENTREGABLE
- El cuerpo MDX listo para pegar en `content/proyectos/analisis-costos-energia.mdx`
  (debajo del frontmatter existente). Insertá los gráficos con sintaxis de imagen
  apuntando a `/proyectos/analisis-costos-energia/<nombre>.png` y dejá un
  comentario indicando qué gráfico va en cada lugar.
- AL FINAL, fuera del MDX, una tabla "Números usados y su fuente" con columnas:
  cifra | sección donde aparece | celda/output del notebook de donde sale |
  ¿verificado? (sí / [VERIFICAR]). Esta tabla es para que yo audite; no va al
  sitio.
```

Cuando te lo entregue, **revisá la tabla de fuentes vos mismo** antes de dar el
texto por bueno. Ahí es donde te cubrís de que ningún número del sitio
contradiga el notebook.

---

## Fase 4 — Sobre mí + Contacto · PROMPT DE AGENTE (anclado a TUS respuestas)

Tu bio no la inventa nadie. Primero completás este mini-cuestionario; después el
prompt convierte tus respuestas en prosa. La decisión sobre cómo presentás el
uso de IA es tuya: abajo te dejo una línea sugerida para que la aceptes, edites
o descartes.

**Cuestionario (completalo antes de correr el prompt):**
- De dónde venís (rol/experiencia en análisis de datos) y hacia dónde vas (ML):
- Formación: (curso de Python + base de Data Science en Codecademy; especialidad
  en ML en curso; career paths de engineering — data, full stack)
- Stack/herramientas con las que trabajás:
- Cómo trabajás con tooling de IA — *tu* framing. Línea sugerida (editable):
  "Uso agentes de IA para acelerar el desarrollo: dirijo, entiendo y valido el
  output, y soy dueño del resultado." ¿La usás tal cual / la cambiás / la sacás?
- Email / LinkedIn / GitHub / nombre del archivo de CV en /public:

**Prompt (corré después de completar arriba):**

```
Redactá, en español, el contenido de dos páginas del portfolio a partir de las
respuestas que te paso. NO agregues datos, logros, números, tecnologías ni
afirmaciones que no estén en mis respuestas. Si algo falta, dejá un TODO.

[PEGÁ ACÁ TUS RESPUESTAS DEL CUESTIONARIO]

PÁGINA "SOBRE MÍ" — secciones:
- Narrativa de transición (de análisis de datos hacia ML): tono directo y
  honesto, en primera persona, sin inflar. Foco en criterio e impacto de
  negocio, no en "sé usar la librería X".
- Formación: presentá lo que te di sin exagerar el estado (la especialidad en ML
  está EN CURSO, no terminada; respetá eso).
- Stack / cómo trabajo: incluí mi framing sobre el uso de IA EXACTAMENTE como te
  lo di. No lo suavices ni lo amplifiques.

PÁGINA "CONTACTO":
- Links a email (mailto:), LinkedIn y GitHub con los valores que te di.
- Botón de descarga de CV apuntando al PDF en /public.
- Sin formulario.

ENTREGABLE: el texto listo para pegar en las páginas /sobre-mi y /contacto,
respetando los componentes que ya existen en el sitio.
```

---

## Fase 5 — Auditoría y pulido · PROMPT DE AGENTE

Pasada de calidad sobre el repo ya con contenido. Corré con el agente apuntando
al repo del portfolio.

```
Auditá este repositorio de portfolio en Next.js y aplicá correcciones. NO
cambies el contenido editorial (textos, números, narrativa); enfocate sólo en
calidad técnica. Reportá cada cambio que hagas.

CHECKLIST
- Accesibilidad: todas las imágenes con alt descriptivo; navegación por teclado
  funcional; jerarquía de headings correcta (un h1 por página); contraste de
  color suficiente; HTML semántico.
- Responsive: revisá landing, vitrina y detalle en breakpoints de mobile (360px),
  tablet y desktop. Corregí desbordes, texto cortado y tarjetas rotas.
- SEO / compartir: confirmá metadata (title, description) por página; Open Graph
  por página y por proyecto con imagen; sitemap.xml y robots.txt presentes y
  correctos.
- Performance: imágenes optimizadas (next/image), sin assets enormes sin comprimir,
  sin imports innecesarios.
- Build: `npm run build` corre limpio, sin warnings de tipos ni de lint.
- Consistencia: la `cifra_impacto` que aparece en la tarjeta y en el hero del
  detalle es el MISMO valor del frontmatter (no hay copias divergentes en el
  código). Confirmá que ningún proyecto con datos_sinteticos:true esté sin
  mostrar el SyntheticDataBadge.

ENTREGABLE: lista de problemas encontrados, qué corregiste, y qué dejaste como
recomendación para que yo decida.
```

Además, **a mano**: pegá la URL del sitio y la de un proyecto en el editor de
posteo de LinkedIn y mirá que la tarjeta de preview se vea bien (título, imagen).
Es tu canal de difusión real.

---

## Fase 6 — Proyecto siguiente · WORKFLOW (sin código nuevo)

El test de que la arquitectura cumplió: agregar un proyecto NO toca código.

1. Creá `content/proyectos/<nuevo-slug>.mdx` con el frontmatter completo
   (copiá el del Proyecto 1 como plantilla y cambiá los valores; ajustá `orden`
   y `destacado` según dónde quieras que aparezca).
2. Creá la carpeta `public/proyectos/<nuevo-slug>/` con la portada y los gráficos.
3. Para la narrativa, reusá el **prompt de la Fase 3** apuntando al repo del
   proyecto nuevo. Las mismas reglas de anclaje a números aplican igual.
4. `git push`. Vercel redespliega solo.

Si en algún momento agregar un proyecto te obliga a tocar componentes o layout,
algo de la arquitectura falló — avisame y lo revisamos.
```
