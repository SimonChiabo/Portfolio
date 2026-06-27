import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Simón Chiabo
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/proyectos" className="text-gray-600 hover:text-black transition-colors">
            Proyectos
          </Link>
          <Link href="/sobre-mi" className="text-gray-600 hover:text-black transition-colors">
            Sobre Mí
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-black transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
