import React, { useState } from 'react';
import { Compass, FileText, CheckSquare, Landmark, HelpCircle, Heart, PhoneCall, ExternalLink, Printer } from 'lucide-react';
import WelcomeSection from './components/WelcomeSection';
import ChecklistSection from './components/ChecklistSection';
import ResourceDirectory from './components/ResourceDirectory';
import ResumeHelper from './components/ResumeHelper';
import BudgetHelper from './components/BudgetHelper';
import GlossarySection from './components/GlossarySection';

type TabType = 'roadmap' | 'resources' | 'resume' | 'budget' | 'glossary';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('roadmap');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'housing' | 'food' | 'jobs' | 'health' | 'legal' | ''>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickCategorySelect = (category: 'housing' | 'food' | 'jobs' | 'health' | 'legal' | '') => {
    setSelectedCategory(category);
    setActiveTab('resources');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-slate-50 antialiased selection:bg-teal-100 selection:text-teal-950">
      
      {/* High-Contrast Support Top Banner (No Print) */}
      <div className="no-print bg-slate-900 text-slate-300 py-2 px-4 text-center text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-1.5 font-medium">
          <span>🚨 Need urgent emergency shelter or food right now in Wayne County?</span>
          <a 
            id="emergency-top-link"
            href="tel:3139936703" 
            className="text-amber-400 hover:text-amber-300 font-bold underline inline-flex items-center gap-1"
          >
            Call Detroit Crisis Helpline at (313) 993-6703
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 flex-1">
        
        {/* Header (No Print) */}
        <header className="no-print flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-blue-900 text-white rounded-xl shadow-sm">
              <Compass className="w-6 h-6 animate-pulse text-emerald-400" />
            </span>
            <div>
              <h1 className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight flex items-center gap-1.5 leading-none">
                Southeast Michigan Reentry Guide
              </h1>
              <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mt-1">
                Wayne &bull; Oakland &bull; Macomb County Resources
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              100% Free & Anonymous
            </span>
            <span className="block text-[10px] text-slate-500 mt-1">No sign ups or email required</span>
          </div>
        </header>

        {/* Hero Section at the top (Only shows on home/roadmap/resource modes, No Print) */}
        <div className="no-print">
          {(activeTab === 'roadmap' || activeTab === 'resources') && (
            <WelcomeSection 
              onQuickCategorySelect={handleQuickCategorySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              scrollToResources={() => {
                setActiveTab('resources');
                setTimeout(() => scrollToSection('resources-directory-section'), 50);
              }}
            />
          )}
        </div>

        {/* Main Interactive Tab Controller (No Print) */}
        <div className="no-print sticky top-0 z-20 bg-slate-50 border-b border-slate-200 py-3 mb-8 flex gap-1.5 overflow-x-auto scrollbar-none">
          {[
            { id: 'roadmap', label: '📋 Reentry Checklist', icon: CheckSquare },
            { id: 'resources', label: '🏙️ Local Resources', icon: Compass },
            { id: 'resume', label: '💼 Easy Resume Helper', icon: FileText },
            { id: 'budget', label: '🪙 Pocket Budget Tool', icon: Landmark },
            { id: 'glossary', label: '💡 Easy Word Directory', icon: HelpCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                id={`tab-button-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap cursor-pointer transition border ${
                  isSelected
                    ? 'bg-blue-900 border-blue-950 text-white shadow-sm font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* PRINT ONLY HEADER - Hidden normally, visible when physical paper printing */}
        <div className="hidden print-only py-8 border-b-4 border-slate-950 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-display font-bold">SOUTHEAST MICHIGAN REENTRY GUIDE</h1>
            <p className="text-xs uppercase tracking-widest text-slate-750 font-bold mt-1">Direct support helper directory printed from library workspace</p>
          </div>
          <div className="text-right text-xs">
            <strong>Website:</strong> {window.location.host || 'southeasternmetrogreentry.org'}<br />
            <strong>Date printed:</strong> {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Active Tab View */}
        <main className="focus:outline-hidden">
          {activeTab === 'roadmap' && <ChecklistSection />}
          {activeTab === 'resources' && (
            <ResourceDirectory 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          {activeTab === 'resume' && <ResumeHelper />}
          {activeTab === 'budget' && <BudgetHelper />}
          {activeTab === 'glossary' && <GlossarySection />}
        </main>

      </div>

      {/* Footer Block */}
      <footer className="no-print mt-12 bg-slate-100 border-t border-slate-250 py-8 px-4 text-center text-slate-650 text-xs text-slate-600 leading-relaxed max-w-none">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 font-semibold text-slate-900">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600 shrink-0" />
            <span>Dedicated to the Dignity and Success of Returning Citizens</span>
          </div>

          <p className="max-w-2xl mx-auto">
            This guide is 100% free, run for the community, and does not save any personal credit keys or usernames. All of your information stays secure on this machine.
            You are allowed to print, copy, or share this entire page.
          </p>

          <p className="text-[10px] text-slate-500">
            Inspired by Reentry United, the U.S. Department of Justice Reentry Menus, and research from Simmons. Compatible with GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}
