import React from 'react';
import '../styles/globals.css';
import NavigationBar from '../components/NavigationBar';

export const metadata = {
  title: 'Escala+ | Gestão de Escalas',
  description: 'Plataforma Inteligente de Escalas e Operação de Cultos para Igrejas',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#090d16] text-slate-100 min-h-screen font-sans flex flex-col items-center">
        <main className="w-full max-w-md min-h-screen pb-24 relative flex flex-col">
          {children}
          <NavigationBar />
        </main>
      </body>
    </html>
  );
}
