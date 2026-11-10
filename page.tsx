'use client';
import React, { useState } from 'react';
import { User, Calendar, Bell, Settings, Plus } from 'lucide-react';

export default function PerfilPage() {
  const [userName] = useState('NICOLAS OLIVEIRA');
  const [userHandle] = useState('@mbcvportao');
  const [mainMinistry] = useState('Técnica');
  const [stickers, setStickers] = useState(['🎵', '📹', '🔊', '🎤']);

  const addRandomSticker = () => {
    const list = ['🎸', '💻', '🎬', '⚡', '✝️', '🕊️'];
    const next = list[Math.floor(Math.random() * list.length)];
    setStickers(prev => [...prev, next]);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold text-white pt-2">Meu Perfil</h1>

      {/* Crachá Digital Customizável */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-12 border-x-4 border-indigo-600/80 bg-indigo-950/40 flex items-center justify-center rounded-b-lg shadow-inner">
          <span className="text-[9px] font-black tracking-widest text-indigo-300 uppercase rotate-90">ESCALA+</span>
        </div>

        <div className="w-full max-w-xs bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 border-2 border-indigo-500/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden text-center space-y-4">
          <div className="absolute top-2 left-2 flex gap-1 text-base">
            {stickers.map((st, i) => (
              <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>{st}</span>
            ))}
          </div>

          <button
            onClick={addRandomSticker}
            title="Adicionar Sticker ao Crachá"
            className="absolute top-2 right-2 bg-indigo-600/50 hover:bg-indigo-500 text-white p-1.5 rounded-full border border-indigo-400/40 text-xs"
          >
            <Plus size={14} />
          </button>

          <div className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-400/60 overflow-hidden shadow-lg bg-slate-800 flex items-center justify-center">
            <User size={48} className="text-indigo-300" />
          </div>

          <div>
            <h2 className="text-lg font-black text-white tracking-wide">{userName}</h2>
            <p className="text-xs text-indigo-300 font-mono">{userHandle}</p>
          </div>

          <div className="inline-block bg-indigo-600/30 border border-indigo-400/50 text-indigo-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            {mainMinistry}
          </div>
        </div>
      </div>

      {/* Configurações */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80 text-sm">
        <button className="w-full px-4 py-3.5 flex justify-between items-center text-slate-200 hover:bg-slate-800/50">
          <span className="flex items-center gap-3 font-medium">
            <User size={18} className="text-teal-400" /> Editar Dados Pessoais
          </span>
          <span className="text-slate-500">&gt;</span>
        </button>

        <button className="w-full px-4 py-3.5 flex justify-between items-center text-slate-200 hover:bg-slate-800/50">
          <span className="flex items-center gap-3 font-medium">
            <Calendar size={18} className="text-teal-400" /> Minha Disponibilidade
          </span>
          <span className="text-slate-500">&gt;</span>
        </button>

        <button className="w-full px-4 py-3.5 flex justify-between items-center text-slate-200 hover:bg-slate-800/50">
          <span className="flex items-center gap-3 font-medium">
            <Bell size={18} className="text-teal-400" /> Notificações Push
          </span>
          <span className="text-slate-500">&gt;</span>
        </button>
      </div>
    </div>
  );
}
