import React, { useState } from 'react';
import { HelpCircle, Search, HelpCircle as HelpIcon } from 'lucide-react';
import { glossaryTerms } from '../data/resources';

export default function GlossarySection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = glossaryTerms.filter((term) =>
    term.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.easyMeaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="glossary-section-block" className="mb-12">
      {/* Title */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-blue-950 flex items-center gap-2">
            <HelpIcon className="w-6 h-6 text-blue-900" />
            Easy-to-Read Word Directory
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Do not let large, complicated government words confuse you. Find their simple meanings below!
          </p>
        </div>

        {/* Local search box */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="glossary-search-box"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type a word (like 'Medicaid')..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
      </div>

      {/* Grid of Dictionary words */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((term) => (
            <div
              id={`glossary-card-${term.word.toLowerCase().replace(/\s+/g, '-')}`}
              key={term.word}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-start gap-4 hover:shadow-sm"
            >
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl shrink-0 font-display font-bold text-lg">
                💡
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 font-display">
                  {term.word}
                </h3>
                
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                  {term.easyMeaning}
                </p>

                {/* Example sentence box */}
                <div className="mt-3 bg-slate-50 border-l-2 border-emerald-500 pl-3 py-1 text-xs text-slate-600 italic">
                  <strong>How it is used:</strong> "{term.sentenceExample}"
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 text-center max-w-sm mx-auto">
          <p className="font-bold text-slate-700">Word not found</p>
          <p className="text-xs text-slate-500 mt-1">
            We do not have "{searchQuery}" in our easy glossary yet. Try searching for "Bridge" or "ID".
          </p>
        </div>
      )}
    </section>
  );
}
