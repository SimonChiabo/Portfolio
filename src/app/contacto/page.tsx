import { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contacto | Simón',
  description: 'Formas de contactarme.',
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Contacto</h1>
      <p className="text-lg text-foreground/70 mb-12">
        ¿Te interesa discutir cómo podemos colaborar, tenés un problema de negocio que resolver con datos, o simplemente querés saludar? Mis bandejas de entrada están abiertas.
      </p>
      
      <div className="flex flex-col gap-6">
        <a 
          href="mailto:simonchiabo@gmail.com" 
          className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl hover:border-accent hover:shadow-md hover:shadow-accent/5 transition-all group"
        >
          <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-foreground">Email</h2>
            <p className="text-foreground/70">simonchiabo@gmail.com</p>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/simon-chiabo-38831776/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl hover:border-[#0A66C2] hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-[#0A66C2]/10 text-[#0A66C2] rounded-xl flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-foreground">LinkedIn</h2>
            <p className="text-foreground/70">Conectemos profesionalmente</p>
          </div>
        </a>

        <a 
          href="https://github.com/SimonChiabo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl hover:border-accent hover:shadow-md hover:shadow-accent/5 transition-all group"
        >
          <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
            <FaGithub size={24} />
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-foreground">GitHub</h2>
            <p className="text-foreground/70">Mira mi código y contribuciones</p>
          </div>
        </a>


      </div>
    </div>
  );
}
