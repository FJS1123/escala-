'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Users, Bell, User } from 'lucide-react';

export default function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Escalas', href: '/escalas', icon: Calendar },
    { label: 'Equipe', href: '/equipe', icon: Users },
    { label: 'Avisos', href: '/avisos', icon: Bell },
    { label: 'Perfil', href: '/perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#0d1424]/90 backdrop-blur-md border-t border-slate-800 py-2.5 px-4 flex justify-around items-center z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-teal-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1.5 rounded-full ${isActive ? 'bg-teal-500/10' : ''}`}>
              <Icon size={20} />
            </div>
            <span className="text-[11px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
