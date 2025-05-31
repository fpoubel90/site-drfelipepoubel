import Image from "next/image";
import Link from "next/link"; // Usar Link do Next.js para navegação interna

export default function Header() {
  return (
    <header className="bg-stone-100 dark:bg-slate-800 shadow-sm">
      <nav className="container mx-auto px-6 sm:px-8 lg:px-10 xl:px-16 py-0 flex justify-between items-center">
        <div>
          <Link href="/" aria-label="Página inicial Dr. Felipe Poubel">
            <Image 
              src="/Logo_felipe_poubel sem fundo.png" 
              alt="Logo Dr. Felipe Poubel" 
              width={180} 
              height={127} 
              priority       
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
          <Link href="/" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium uppercase tracking-wider text-sm transition-colors px-3 py-2">
            HOME
          </Link>
          <Link href="/#sobre" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium uppercase tracking-wider text-sm transition-colors px-3 py-2">
            SOBRE
          </Link>
          <Link href="/#servicos" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium uppercase tracking-wider text-sm transition-colors px-3 py-2">
            TRATAMENTOS
          </Link>
          <Link
            href="/#localizacao" 
            className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium uppercase tracking-wider text-sm transition-colors px-3 py-2"
          >
            CONTATO 
          </Link>
        </div>
        <div className="md:hidden">
          <button 
            aria-label="Abrir menu"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}