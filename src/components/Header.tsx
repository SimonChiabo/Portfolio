import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground">
          Simón Chiabo
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/proyectos" className="text-foreground/70 hover:text-accent transition-colors">
            Proyectos
          </Link>
          <Link href="/sobre-mi" className="text-foreground/70 hover:text-accent transition-colors">
            Sobre Mí
          </Link>
          <Link href="/contacto" className="text-foreground/70 hover:text-accent transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
