// src/app/layout.tsx
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Importa o objeto da fonte
// Remova a importação de GeistMono se não estiver usando
import './globals.css'; 
import Header from '@/components/Header'; // Deixe estas por enquanto, vamos arrumar o erro delas a seguir
import Footer from '@/components/Footer'; // Deixe estas por enquanto

// NÃO precisamos da instanciação const geistSans = GeistSans({ ... }) aqui
// O objeto GeistSans importado já tem o que precisamos.

export const metadata: Metadata = {
  title: "Dr. Felipe Poubel - Cirurgia Geral e Cuidados com a Pele", 
  description: "Site oficial do Dr. Felipe Poubel...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplicando a VARIÁVEL CSS da fonte ao HTML para ser usada pelo Tailwind
    <html lang="pt-BR" className={`${GeistSans.variable} antialiased`}> 
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}