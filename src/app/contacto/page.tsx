import { Metadata } from 'next';
import { Mail, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contacto | Simón',
  description: 'Formas de contactarme.',
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Contacto</h1>
      <p className="text-xl text-gray-600 mb-12">
        Si querés hablar sobre un proyecto, oportunidad laboral o simplemente conectar, acá tenés dónde encontrarme.
      </p>
      
      <div className="flex flex-col gap-6">
        <a 
          href="mailto:TODO@example.com" 
          className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-black hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">Email</h2>
            <p className="text-gray-600">TODO@example.com</p>
          </div>
        </a>

        <a 
          href="https://linkedin.com/in/TODO" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#0A66C2] hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">LinkedIn</h2>
            <p className="text-gray-600">Conectemos profesionalmente</p>
          </div>
        </a>

        <a 
          href="https://github.com/TODO" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-black hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
            <FaGithub size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">GitHub</h2>
            <p className="text-gray-600">Mirá mi código fuente</p>
          </div>
        </a>

        <a 
          href="/cv.pdf" 
          download
          className="flex items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all mt-4 group"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
            <FileDown size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold transition-colors">Descargar CV</h2>
            <p className="opacity-80 transition-colors">Versión en PDF (TODO)</p>
          </div>
        </a>
      </div>
    </div>
  );
}
