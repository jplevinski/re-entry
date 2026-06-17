import React from 'react';
import { ShieldCheck, Heart, Sparkles, MapPin, Search } from 'lucide-react';

interface WelcomeSectionProps {
  onQuickCategorySelect: (category: 'housing' | 'food' | 'jobs' | 'health' | 'legal' | '') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  scrollToResources: () => void;
}

export default function WelcomeSection({
  onQuickCategorySelect,
  searchQuery,
  setSearchQuery,
  scrollToResources
}: WelcomeSectionProps) {
  return (
    <section id="welcome-section" className="mb-8">
      {/* Warm Banner Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 p-6 md:p-12 text-white shadow-lg">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-600 rounded-full blur-3xl opacity-25 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Southeastern Michigan Reentry Guide
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
            Welcome Home. <span className="text-emerald-400">Let's Get Started.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-xl mb-6">
            We are so glad you are back! This guide is written in very simple, clear English. 
            No confusing words. Use this site to find warm food, a safe bed, your official ID papers, 
            and bosses in Detroit who are happy to hire you.
          </p>

          {/* Quick Action Search */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type 'food', 'shelter', 'ID', 'Pontiac'..."
                className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-sm"
              />
            </div>
            <button
              id="search-go-button"
              onClick={scrollToResources}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold rounded-xl transition duration-150 shadow-sm grow-0 shrink-0 cursor-pointer"
            >
              Find Help Now
            </button>
          </div>
        </div>
      </div>

      {/* Helpful Clarification Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8 flex items-start gap-3">
        <span className="p-1 bg-amber-100 rounded-full text-amber-700 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </span>
        <div>
          <h2 className="text-sm font-bold text-slate-900">Easy Language Mode is ON</h2>
          <p className="text-xs text-slate-700 mt-0.5">
            This guide is written at a <strong>6th-grade classroom level</strong>. If a word is hard, 
            we explain exactly what it means. We made this so you do not have to struggle with thick legal documents.
          </p>
        </div>
      </div>

      {/* Quick Category Finder Circles */}
      <h3 className="text-xl font-display font-semibold text-slate-900 mb-4 flex items-center gap-2">
        <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600 animate-pulse" />
        What do you need help with right now?
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { key: 'housing', label: '🏠 A Safe Bed', desc: 'Shelters & apartments', color: 'border-orange-200 hover:border-orange-500 bg-orange-50/50 text-orange-950' },
          { key: 'food', label: '🍎 Food & Clothes', desc: 'Free meals & pantries', color: 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/50 text-emerald-950' },
          { key: 'jobs', label: '💼 Finding a Job', desc: 'Resume plans & work', color: 'border-blue-200 hover:border-blue-500 bg-blue-50/50 text-blue-950' },
          { key: 'health', label: '⚕️ Health & Medicine', desc: 'Free doctors & clinics', color: 'border-pink-200 hover:border-pink-500 bg-pink-50/50 text-pink-950' },
          { key: 'legal', label: '📝 IDs & Attorneys', desc: 'State ID, records help', color: 'border-purple-200 hover:border-purple-500 bg-purple-50/50 text-purple-950' }
        ].map((item) => (
          <button
            id={`category-quick-${item.key}`}
            key={item.key}
            onClick={() => {
              onQuickCategorySelect(item.key as any);
              scrollToResources();
            }}
            className={`p-4 border-2 rounded-xl text-left transition hover:shadow-md cursor-pointer flex flex-col justify-between ${item.color}`}
          >
            <span className="font-bold text-sm tracking-tight">{item.label}</span>
            <span className="text-[11px] text-slate-600 mt-1 lines-clamp-1">{item.desc}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
