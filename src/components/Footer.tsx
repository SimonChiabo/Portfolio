import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Simón. Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <a href="#" className="hover:text-black transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-black transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="mailto:TODO@example.com" className="hover:text-black transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
