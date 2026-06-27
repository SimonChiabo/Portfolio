import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Simón Chiabo',
    default: 'Simón Chiabo | Analista de Datos',
  },
  description: 'Portfolio profesional de Simón Chiabo, enfocado en análisis de datos, automatización y Machine Learning.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent/20">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
