import React, { useState } from 'react';
import { Phone, MapPin, Globe, Search, Filter, Printer, HelpCircle } from 'lucide-react';
import { resourcesData } from '../data/resources';
import { Resource } from '../types';

interface ResourceDirectoryProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: 'housing' | 'food' | 'jobs' | 'health' | 'legal' | '';
  setSelectedCategory: (category: 'housing' | 'food' | 'jobs' | 'health' | 'legal' | '') => void;
}

export default function ResourceDirectory({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}: ResourceDirectoryProps) {
  const [selectedCounty, setSelectedCounty] = useState<string>('All');

  const handlePrint = () => {
    window.print();
  };

  // Filter resources based on searches and click states
  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.helpfulTips.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === '' || resource.category === selectedCategory;

    const matchesCounty =
      selectedCounty === 'All' ||
      resource.county.toLowerCase().includes(selectedCounty.toLowerCase()) ||
      resource.county === 'All SE Michigan';

    return matchesSearch && matchesCategory && matchesCounty;
  });

  const categoryLabels = {
    housing: '🏠 Safe Beds',
    food: '🍎 Food & Clothes',
    jobs: '💼 Jobs & Skills',
    health: '⚕️ Health & Medicine',
    legal: '📝 IDs & Legal Aid'
  };

  return (
    <section id="resources-directory-section" className="mb-12">
      {/* Directory Title and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-display font-medium text-slate-900">
            Local Help Directory
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Real groups in Southeast Michigan that can help you today. Custom filters help narrow down.
          </p>
        </div>

        {/* Print Button */}
        <button
          id="btn-print-directory"
          onClick={handlePrint}
          className="no-print self-start md:self-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm cursor-pointer transition"
        >
          <Printer className="w-4 h-4" />
          Print This List To Carry
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="no-print bg-white p-5 rounded-xl border border-slate-200 mb-6 shadow-xs space-y-4">
        {/* County row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs font-bold text-slate-700 tracking-wider uppercase shrink-0">County Region:</span>
          <div className="flex flex-wrap gap-1.5">
            {['All', 'Wayne', 'Oakland', 'Macomb'].map((county) => (
              <button
                id={`county-filter-${county.toLowerCase()}`}
                key={county}
                onClick={() => setSelectedCounty(county)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition ${
                  (selectedCounty === county)
                    ? 'bg-amber-100 border-amber-400 text-amber-950 font-bold'
                    : 'bg-slate-55 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {county === 'All' ? '🌍 Everywhere' : county === 'Wayne' ? '🏙️ Wayne (Detroit)' : county === 'Oakland' ? '🌳 Oakland (Pontiac)' : '🏭 Macomb (Warren)'}
              </button>
            ))}
          </div>
        </div>

        {/* Categories row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-700 tracking-wider uppercase shrink-0">Need Help With:</span>
          <div className="flex flex-wrap gap-1.5">
            <button
              id="category-filter-all"
              onClick={() => setSelectedCategory('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition ${
                selectedCategory === ''
                  ? 'bg-blue-900 border-blue-900 text-white font-bold'
                  : 'bg-slate-55 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              🔄 Show All Needs
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                id={`category-filter-${key}`}
                key={key}
                onClick={() => setSelectedCategory(key as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition ${
                  selectedCategory === key
                    ? 'bg-blue-900 border-blue-900 text-white font-bold'
                    : 'bg-slate-55 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Screen reader / print-only list explanation header */}
      <div className="print-only hidden mb-6 p-4 border border-black bg-white rounded-lg">
        <h3 className="text-lg font-bold">My Southeast Michigan Reentry Directory</h3>
        <p className="text-xs">Printed list of essential regional services of Wayne, Oakland, and Macomb counties.</p>
      </div>

      {/* Resource Count Indicator */}
      <p className="no-print text-xs font-semibold text-slate-500 mb-4">
        Showing {filteredResources.length} support services matching your filters in Michigan
      </p>

      {/* Grid of Resource Cards */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <div
              id={`resource-card-${resource.id}`}
              key={resource.id}
              className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 shadow-xs flex flex-col justify-between break-inside-avoid relative hover:shadow-sm"
            >
              <div>
                {/* County badge and Category tag */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                    resource.category === 'housing' ? 'bg-orange-100 text-orange-950 border border-orange-200' :
                    resource.category === 'food' ? 'bg-emerald-100 text-emerald-950 border border-emerald-200' :
                    resource.category === 'jobs' ? 'bg-blue-100 text-blue-950 border border-blue-200' :
                    resource.category === 'health' ? 'bg-pink-100 text-pink-950 border border-pink-200' :
                    'bg-purple-100 text-purple-950 border border-purple-200'
                  }`}>
                    {categoryLabels[resource.category].split(' ').slice(1).join(' ')}
                  </span>
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                    📍 {resource.county}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {resource.name}
                </h3>

                {/* Simple 6th Grade Description */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* Helpful Tip Box */}
                <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-amber-900 font-bold mb-1">
                    <HelpCircle className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Simple Tip (How to use this):</span>
                  </div>
                  <p className="text-slate-800 leading-relaxed font-normal">
                    {resource.helpfulTips}
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="border-t border-slate-100 pt-4 mt-2 flex flex-wrap gap-3 items-center justify-between no-print">
                {/* Left side actions */}
                <div className="space-y-1 text-xs">
                  {/* Map Pin */}
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{resource.address}</span>
                  </div>
                </div>

                {/* Right side contact triggers */}
                <div className="flex gap-2 w-full sm:w-auto pt-2 sm:pt-0">
                  <a
                    id={`btn-call-${resource.id}`}
                    href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                    className="flex-1 sm:grow-0 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    Call Now
                  </a>
                  {resource.website && resource.website !== '#' && (
                    <a
                      id={`btn-web-${resource.id}`}
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-250 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <Globe className="w-3.5 h-3.5 text-slate-500" />
                      Website
                    </a>
                  )}
                </div>
              </div>

              {/* Print Only Contact Sheet Card element */}
              <div className="hidden print-only mt-3 text-xs border-t border-slate-300 pt-2 text-slate-800 space-y-1">
                <div>📍 <strong>Address:</strong> {resource.address}</div>
                <div>📞 <strong>Phone:</strong> {resource.phone}</div>
                {resource.website !== '#' && <div>💻 <strong>Website:</strong> {resource.website}</div>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 text-center max-w-md mx-auto">
          <p className="font-bold text-slate-700">No services found</p>
          <p className="text-xs text-slate-500 mt-2">
            No resources matched your search for "{searchQuery}". Try clearing your filter buttons to see all resources.
          </p>
          <button
            id="clear-all-filters-bnt"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('');
              setSelectedCounty('All');
            }}
            className="mt-4 px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-blue-950 transition"
          >
            Show All Resources
          </button>
        </div>
      )}
    </section>
  );
}
