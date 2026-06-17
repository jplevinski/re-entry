import React, { useState, useEffect } from 'react';
import { FileText, Copy, Printer, Check, Info, Trash2 } from 'lucide-react';

interface ResumeData {
  fullName: string;
  phone: string;
  email: string;
  cityState: string;
  aboutMe: string;
  selectedSkills: string[];
  customSkills: string;
  workHistory: string;
}

export default function ResumeHelper() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem('reentry_resume_draft');
      return saved
        ? JSON.parse(saved)
        : {
            fullName: '',
            phone: '',
            email: '',
            cityState: '',
            aboutMe: '',
            selectedSkills: [],
            customSkills: '',
            workHistory: ''
          };
    } catch {
      return {
        fullName: '',
        phone: '',
        email: '',
        cityState: '',
        aboutMe: '',
        selectedSkills: [],
        customSkills: '',
        workHistory: ''
      };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('reentry_resume_draft', JSON.stringify(formData));
    } catch (e) {
      console.error(e);
    }
  }, [formData]);

  const skillOptions = [
    'Building Construction & Carpentry',
    'Commercial Painting & Plastering',
    'Commercial Kitchen prep & Cooking',
    'Landscaping, Grass Mowing & Planting',
    'Warehouse Packing, Lifting & Forklifts',
    'Janitorial, Office Cleaning & Disinfecting',
    'Auto Repair, Oil changes & Engines',
    'Welding, Metalwork & Basic Engineering',
    'Basic Typing, Computers & Office Work',
    'Active Teamwork, Punctual & Positive Attitude'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    const current = formData.selectedSkills;
    if (current.includes(skill)) {
      setFormData((prev) => ({ ...prev, selectedSkills: current.filter((s) => s !== skill) }));
    } else {
      setFormData((prev) => ({ ...prev, selectedSkills: [...current, skill] }));
    }
  };

  const clearResume = () => {
    if (window.confirm('Delete everything on this draft and start over?')) {
      const clean = {
        fullName: '',
        phone: '',
        email: '',
        cityState: '',
        aboutMe: '',
        selectedSkills: [],
        customSkills: '',
        workHistory: ''
      };
      setFormData(clean);
    }
  };

  const loadExample = () => {
    setFormData({
      fullName: 'Marcus Williams',
      phone: '(313) 555-0182',
      email: 'marcus.w.detroit@email.com',
      cityState: 'Detroit, MI',
      aboutMe: 'Reliable, energetic, and hard-working professional with over 3 years of practical, fast-paced team trade experience. I am highly skilled in building carpentry, warehouse operations, and equipment handling. I arrive early every single day, enjoy learning new skills quickly, and get along great with everyone on the crew.',
      selectedSkills: [
        'Building Construction & Carpentry',
        'Warehouse Packing, Lifting & Forklifts',
        'Active Teamwork, Punctual & Positive Attitude'
      ],
      customSkills: 'Forklift Safety training certified, manual blueprints reading, heavy load lifting math.',
      workHistory: 'Commercial Carpentry Crew Helper (2023 - 25)\n- Handled wood framing, tool assemblies, and heavy raw material handling.\n- Kept construction grounds clean and secure.\n\nWarehouse Fulfillment Specialist (2021 - 23)\n- Picked, packaged, and sorted over 200 daily parcels with absolute zero errors.'
    });
  };

  // Plain Text Compiler for clipboard copying
  const compilePlainText = () => {
    const skillsList = [
      ...formData.selectedSkills,
      ...(formData.customSkills ? [formData.customSkills] : [])
    ]
      .map((s) => `- ${s}`)
      .join('\n');

    return `${formData.fullName.toUpperCase()}
${formData.cityState} | ${formData.phone} | ${formData.email}

HIGHLIGHT OF CAPABILITIES & GOALS:
${formData.aboutMe || 'Reliable and punctual professional ready to work.'}

CORE PRACTICAL TRADE SKILLS:
${skillsList || '- General labor and carpentry skills\n- Willing to learn new systems'}

PAST EXPERIENCE & TRAINING HISTORY:
${formData.workHistory || 'Ready for immediate employment.'}

(References available upon request)`;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(compilePlainText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Could not auto copy. Please highlight and copy manually from the preview below.');
    }
  };

  return (
    <section id="resume-builder-section" className="mb-12">
      {/* Introduction block */}
      <div className="mb-8 bg-slate-900 text-white rounded-2xl p-6 shadow-sm border border-slate-800">
        <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
          <FileText className="w-6 h-6 text-amber-400" />
          Easy Resume Helper
        </h2>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          When you have a gap on your record, you do not need to feel stressed! A <strong>"Functional Resume"</strong> focuses on your real hands-on skills first, rather than dates. 
          Use our simple tool below to build one in 10 minutes.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            id="btn-load-resume-example"
            onClick={loadExample}
            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold rounded-lg cursor-pointer transition"
          >
            📋 Load a Good Example
          </button>
          <button
            id="btn-clear-resume"
            onClick={clearResume}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg cursor-pointer transition border border-slate-700"
          >
            🗑️ Clear Draft
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hand: Fill form fields (Hidden on Print automatically) */}
        <div className="no-print lg:col-span-6 space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 border-b border-rose-100 pb-2">
            Step 1: Write Your Info
          </h3>

          {/* Grid fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name:
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Marcus Miller"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number:
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(313) 555-0100"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address (Optional):
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="marcus@email.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="cityState" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                City, State:
              </label>
              <input
                id="cityState"
                type="text"
                name="cityState"
                value={formData.cityState}
                onChange={handleInputChange}
                placeholder="Detroit, MI"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
              />
            </div>
          </div>

          {/* About me */}
          <div>
            <label htmlFor="aboutMe" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Who are you? (Brief Bio / Goal statement):
            </label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleInputChange}
              rows={3}
              placeholder="E.g., Reliable worker who is great on commercial crews. Very friendly, ready to learn, and always arrives early."
              className="w-full p-3.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white leading-relaxed"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">💡 Keep it short. Focus on punctuality, energy, and eagerness to learn!</span>
          </div>

          {/* Checked Skills */}
          <div>
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Your Best Skills (Choose up to 4):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto border border-slate-100 p-3 bg-slate-50 rounded-xl">
              {skillOptions.map((skill) => {
                const isSelected = formData.selectedSkills.includes(skill);
                return (
                  <button
                    id={`skill-btn-${skill.replace(/\s+/g, '-').slice(0, 15)}`}
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-2 rounded-lg text-xs font-medium text-left border cursor-pointer transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-50 border-blue-400 text-blue-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{skill}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-blue-900" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom skills */}
          <div>
            <label htmlFor="customSkills" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Any Other Skills or Licenses? (Optional):
            </label>
            <input
              id="customSkills"
              type="text"
              name="customSkills"
              value={formData.customSkills}
              onChange={handleInputChange}
              placeholder="CDL Class A license, CPR certified, forklift driver, welding degree."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
            />
          </div>

          {/* Work / Training Details */}
          <div>
            <label htmlFor="workHistory" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tell us about any past jobs, training programs, or crew work:
            </label>
            <textarea
              id="workHistory"
              name="workHistory"
              value={formData.workHistory}
              onChange={handleInputChange}
              rows={4}
              placeholder="Volunteer grounds crew - Detroit Soup Kitchen (2025)&#10;- mowed lawms, cleaned equipment&#10;&#10;Facility maintenance crew helper (2021)&#10;- fixed broken equipment and painted walls"
              className="w-full p-3.5 bg-slate-50 border border-slate-350 rounded-xl text-slate-900 text-xs md:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white leading-relaxed"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">💡 Tip: You can include maintenance, garden work, or soup kitchen helpers! All crew work counts.</span>
          </div>
        </div>

        {/* Right Hand: Final Resume Sheet with copy and print buttons */}
        <div className="lg:col-span-6 space-y-4">
          {/* Action Header for preview (No Print) */}
          <div className="no-print flex items-center justify-between bg-slate-100 p-4 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">🌟 LIVE Printable Preview</span>
            <div className="flex gap-2.5">
              {/* Copy Text */}
              <button
                id="btn-copy-resume"
                onClick={handleCopyText}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Text'}
              </button>

              {/* Print Resume */}
              <button
                id="btn-print-resume"
                onClick={() => window.print()}
                className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                Print My Resume
              </button>
            </div>
          </div>

          {/* Interactive Info Sheet */}
          <div className="no-print bg-amber-50 p-4 rounded-xl border border-amber-100 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-[11px] text-amber-950 font-medium">
              <strong>Public Library Tip:</strong> If you are on a computer at the Detroit Public Library or Michigan Works! office, click <strong>"Print My Resume"</strong>. It prints just the blank white paper sheet with your resume format nicely on black ink!
            </p>
          </div>

          {/* Actual Resume Sheet Paper Layout */}
          <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-slate-300 shadow-md min-h-[600px] font-sans text-slate-900 overflow-hidden relative break-inside-avoid">
            {/* Watermark preview banner */}
            <div className="no-print absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 opacity-90">
              Printable Format
            </div>

            {/* Header section */}
            <div className="text-center border-b-2 border-slate-200 pb-5 mb-5 space-y-1">
              <h4 className="text-2xl md:text-3xl font-display font-medium text-slate-950 uppercase tracking-tight">
                {formData.fullName || 'YOUR NAME HERE'}
              </h4>
              <p className="text-xs md:text-sm text-slate-700 font-medium font-sans">
                {formData.cityState || 'City, State'} &bull; {formData.phone || 'Phone Number'} &bull; {formData.email || 'Your Email (Optional)'}
              </p>
            </div>

            {/* Main content sections */}
            <div className="space-y-6">
              {/* Profile Bio */}
              <div>
                <h5 className="text-xs uppercase tracking-widest font-bold text-slate-950 mb-1 border-b border-slate-100 pb-0.5">
                  About Me / Employment Goal
                </h5>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                  {formData.aboutMe || 'Hardworking, reliable, and highly motivated professional ready to support local commercial trade operations. Quick listener, physically capable, and always arrives early.'}
                </p>
              </div>

              {/* Skills Highlights */}
              <div>
                <h5 className="text-xs uppercase tracking-widest font-bold text-slate-950 mb-2 border-b border-slate-100 pb-0.5">
                  Core Practical Skills & Qualifications
                </h5>
                {/* List checked skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {formData.selectedSkills.length > 0 ? (
                    formData.selectedSkills.map((sk) => (
                      <div key={sk} className="flex items-start gap-1.5 text-xs md:text-sm text-slate-800">
                        <span className="text-slate-400 mt-0.5 font-bold shrink-0">&bull;</span>
                        <span className="font-medium">{sk}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-400 italic text-xs">
                      No core skills checked yet. Tap boxes on the left to add your list.
                    </div>
                  )}
                </div>

                {/* Custom skills */}
                {formData.customSkills && (
                  <div className="mt-3 text-xs md:text-sm text-slate-800 bg-slate-50 border border-slate-150 p-2.5 rounded-lg">
                    <strong>Other Hands-on Skills:</strong> {formData.customSkills}
                  </div>
                )}
              </div>

              {/* Training and crews work */}
              <div>
                <h5 className="text-xs uppercase tracking-widest font-bold text-slate-950 mb-2 border-b border-slate-100 pb-0.5">
                  Experience & Job Training History
                </h5>
                <div className="whitespace-pre-line text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                  {formData.workHistory || (
                    <span className="text-slate-400 italic">
                      List your volunteer jobs, trade training classes, soup kitchen work, or previous employment. Click on the left input box to enter details.
                    </span>
                  )}
                </div>
              </div>

              {/* References */}
              <div className="text-center pt-4 border-t border-slate-100 text-[11px] text-slate-500 italic">
                Professional and community references are available immediately upon request.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
