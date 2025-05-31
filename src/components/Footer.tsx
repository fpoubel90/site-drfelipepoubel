import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-t border-gray-300 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 items-start text-center sm:text-left mb-8">
          {/* Coluna 1: Endereço Laranja da Terra */}
          <div className="space-y-1 px-1 pt-4 sm:pt-0">
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-1">
              Laranja da Terra
            </h4>
            <address className="not-italic text-xs leading-snug">
              <p>Av. Davi Schraiber, 54</p>
            </address>
          </div>
          {/* Coluna 2: Endereço Afonso Cláudio */}
          <div className="space-y-1 px-1 pt-4 sm:pt-0">
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-1">
              Afonso Cláudio
            </h4>
            <address className="not-italic text-xs leading-snug">
              <p>R. José Giestas, 63</p>
            </address>
          </div>
          {/* Coluna 3: Endereço Santa Maria de Jetibá */}
          <div className="space-y-1 px-1 pt-4 sm:pt-0">
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-1">
              Santa Maria de Jetibá
            </h4>
            <address className="not-italic text-xs leading-snug">
              <p>R. Herman Miertschink, 175</p>
            </address>
          </div>
          {/* Coluna 4: Páginas */}
          <div className="space-y-1 px-1 pt-4 sm:pt-0 md:col-span-1">
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-1 text-center sm:text-left">
              Páginas
            </h4>
            <ul className="space-y-0.5 text-xs leading-snug text-center sm:text-left">
              <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link href="/#sobre" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre</Link></li>
              <li><Link href="/#servicos" className="hover:text-blue-600 dark:hover:text-blue-400">Tratamentos</Link></li>
              <li><Link href="/#localizacao" className="hover:text-blue-600 dark:hover:text-blue-400">Onde Atendo</Link></li>
            </ul>
          </div>
          {/* Coluna 5: Redes Sociais */}
          <div className="space-y-1 px-1 pt-4 sm:pt-0 md:col-span-1 flex flex-col items-center sm:items-start md:items-end">
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-2 text-center sm:text-left md:text-right">
              Siga-nos
            </h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/felipe.poubel?locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path></svg>
              </a>
              <a href="https://www.instagram.com/felipe.poubel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-pink-600 dark:text-slate-400 dark:hover:text-pink-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.796.218 2.226.395.466.198.824.465 1.193.833.37.37.636.728.833 1.193.178.43.343 1.054.395 2.226.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.218 1.796-.395 2.226a3.207 3.207 0 01-.833 1.193c-.37.37-.728.636-1.193.833-.43.178-1.054.343-2.226.395-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.796-.218-2.226-.395a3.207 3.207 0 01-.833-1.193 3.207 3.207 0 01-.395-2.226c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.218-1.796.395-2.226.198-.466.465-.824.833-1.193.37-.37.728.636 1.193-.833.43-.178 1.054.343 2.226.395C8.416 2.175 8.796 2.163 12 2.163zm0 1.623c-3.142 0-3.494.012-4.722.068-1.08.048-1.67.21-2.025.354a1.975 1.975 0 00-.906.906c-.143.354-.306.945-.354 2.025-.056 1.228-.068 1.58-.068 4.722s.012 3.494.068 4.722c.048 1.08.21 1.67.354 2.025a1.975 1.975 0 00.906.906c.354.143.945.306 2.025.354 1.228.056 1.58.068 4.722.068s3.494-.012 4.722-.068c1.08-.048 1.67-.21 2.025-.354a1.975 1.975 0 00.906.906c.143-.354.306.945-.354-2.025.056-1.228.068-1.58.068-4.722s-.012-3.494-.068-4.722c-.048-1.08-.21-1.67-.354-2.025a1.975 1.975 0 00-.906.906c-.354-.143-.945-.306-2.025-.354C15.494 3.798 15.142 3.786 12 3.786zm0 2.728a3.482 3.482 0 100 6.964 3.482 3.482 0 000-6.964zm0 1.623a1.86 1.86 0 110 3.719 1.86 1.86 0 010-3.72zM16.802 6.11a1.03 1.03 0 100-2.06 1.03 1.03 0 000 2.06z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Linha de Copyright e Logo na Mesma Altura e Centralizados */}
        <div className="mt-0 pt-0 border-t border-slate-300 dark:border-slate-700 text-xs"> {/* Reduzido mt-10 pt-10 */}
          <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:items-center md:space-x-4">
            {/* Logo */}
            <div className="md:mb-0"> {/* Removida margem inferior em telas md+ */}
              <Link href="/" aria-label="Página inicial Dr. Felipe Poubel" className="inline-block">
                <Image 
                  src="/Logo_felipe_poubel sem fundo.png" 
                  alt="Logo Dr. Felipe Poubel" 
                  width={100}  // Tamanho reduzido para caber melhor ao lado do texto
                  height={71}  // Mantendo a proporção
                />
              </Link>
            </div>
            {/* Texto do Copyright */}
            <p className="text-slate-500 dark:text-slate-400 text-center">
              &copy; {new Date().getFullYear()} Dr. Felipe Poubel. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}