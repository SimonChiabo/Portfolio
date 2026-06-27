import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Simón. Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-4 text-foreground/50">
          <a href="https://www.linkedin.com/in/simon-chiabo-38831776/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/SimonChiabo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="mailto:simonchiabo@gmail.com" className="hover:text-accent transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
