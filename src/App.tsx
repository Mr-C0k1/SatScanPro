import React from 'react';
import { TacticalOverride } from './components/TacticalOverride';
import { MainMap } from './components/MainMap';

export default function App() {
  return (
    <div className="flex h-screen bg-black text-slate-300">
      <main className="flex-1 overflow-hidden">
        {/* Placeholder for visualization layer */}
        <MainMap />
      </main>
      <aside className="w-96 border-l border-slate-800">
        {/* Command Interface */}
        <TacticalOverride />
      </aside>
    </div>
  );
}
