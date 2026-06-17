import React, { useState } from 'react';
import { Landmark, ArrowDownCircle, ArrowUpCircle, PiggyBank, RefreshCw, AlertTriangle, Lightbulb } from 'lucide-react';

export default function BudgetHelper() {
  const [income, setIncome] = useState<number>(1200);
  const [assistance, setAssistance] = useState<number>(200);
  
  const [rent, setRent] = useState<number>(600);
  const [phone, setPhone] = useState<number>(40);
  const [bus, setBus] = useState<number>(50);
  const [food, setFood] = useState<number>(150);
  const [other, setOther] = useState<number>(100);

  const totalIncome = Math.max(0, income + assistance);
  const totalExpenses = Math.max(0, rent + phone + bus + food + other);
  const netSavings = totalIncome - totalExpenses;

  // Percentage calculations
  const rentPercent = Math.round((rent / Math.max(1, totalIncome)) * 100);
  const otherPercent = Math.round(((phone + bus + food + other) / Math.max(1, totalIncome)) * 100);
  const leftPercent = Math.max(0, Math.round((netSavings / Math.max(1, totalIncome)) * 100));

  const handleReset = () => {
    setIncome(1200);
    setAssistance(200);
    setRent(600);
    setPhone(40);
    setBus(50);
    setFood(150);
    setOther(100);
  };

  return (
    <section id="budget-planner-section" className="mb-12">
      {/* Title */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-display font-bold text-blue-950 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-blue-900" />
          My Pocket Budget Planner
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          A very simple tool to see where your cash goes. Plan your monthly expenses so you can stay safe and save up.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hand: The Inputs */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          
          {/* INCOME (Green section) */}
          <div>
            <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
              <ArrowUpCircle className="w-5 h-5 text-emerald-600" />
              ➕ Money Coming In (Per Month)
            </h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="income-job" className="block text-xs font-semibold text-slate-700 mb-1">
                  My Job Paycheck ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="income-job"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="income-assistance" className="block text-xs font-semibold text-slate-700 mb-1">
                  Food help / Family gift card ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="income-assistance"
                    type="number"
                    value={assistance}
                    onChange={(e) => setAssistance(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* EXPENSES (Red section) */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-rose-800 uppercase tracking-wider mb-4 flex items-center gap-2 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100">
              <ArrowDownCircle className="w-5 h-5 text-rose-600" />
              ➖ Money Going Out (Per Month)
            </h3>

            <div className="space-y-4">
              {/* Rent */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <label htmlFor="expense-rent" className="text-xs font-semibold text-slate-700 flex-1">
                  Rent / Share Room Cost ($):
                  <span className="block text-[11px] text-slate-500 font-normal">What you pay for your bed or room.</span>
                </label>
                <div className="relative w-full sm:w-44 shrink-0">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="expense-rent"
                    type="number"
                    value={rent}
                    onChange={(e) => setRent(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-dashed border-slate-100">
                <label htmlFor="expense-phone" className="text-xs font-semibold text-slate-700 flex-1">
                  Smart Phone Bill ($):
                  <span className="block text-[11px] text-slate-500 font-normal">Keep this as low as you can!</span>
                </label>
                <div className="relative w-full sm:w-44 shrink-0">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="expense-phone"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>

              {/* Bus / Travel */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-dashed border-slate-100">
                <label htmlFor="expense-bus" className="text-xs font-semibold text-slate-700 flex-1">
                  Bus Tickets or Car Gas ($):
                  <span className="block text-[11px] text-slate-500 font-normal">DDOT or SMART bus monthly passes are around $50.</span>
                </label>
                <div className="relative w-full sm:w-44 shrink-0">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="expense-bus"
                    type="number"
                    value={bus}
                    onChange={(e) => setBus(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>

              {/* Food stamps / Extras */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-dashed border-slate-100">
                <label htmlFor="expense-food" className="text-xs font-semibold text-slate-700 flex-1">
                  Extra Groceries & Soap ($):
                  <span className="block text-[11px] text-slate-500 font-normal">What you pay out-of-pocket for snacks or items.</span>
                </label>
                <div className="relative w-full sm:w-44 shrink-0">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="expense-food"
                    type="number"
                    value={food}
                    onChange={(e) => setFood(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>

              {/* Other */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-dashed border-slate-100">
                <label htmlFor="expense-other" className="text-xs font-semibold text-slate-700 flex-1">
                  Other Personal Costs ($):
                  <span className="block text-[11px] text-slate-500 font-normal">Haircuts, clean work shirts, laundry.</span>
                </label>
                <div className="relative w-full sm:w-44 shrink-0">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-bold">$</span>
                  <input
                    id="expense-other"
                    type="number"
                    value={other}
                    onChange={(e) => setOther(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Reset */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              id="btn-reset-budget"
              onClick={handleReset}
              className="px-4 py-2 border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Budget Numbers
            </button>
          </div>
        </div>

        {/* Right Hand: Visual Meter & Financial Tips */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Visual box */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <PiggyBank className="w-4 h-4 text-emerald-400" />
                Monthly Cash Balance
              </span>

              {/* Main Net Number */}
              <div className="my-4">
                <span className={`text-4xl md:text-5xl font-display font-bold block tracking-tight ${
                  netSavings >= 0 ? 'text-emerald-400' : 'text-rose-450'
                }`}>
                  {netSavings >= 0 ? '+' : ''}${netSavings}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">Leftover cash at the end of the month</span>
              </div>
            </div>

            {/* Visual stacked bar chart */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block mb-1">Where your income goes:</span>
                <div className="w-full h-4 bg-slate-850 rounded-full overflow-hidden flex shadow-inner">
                  {rentPercent > 0 && (
                    <div 
                      className="h-full bg-rose-500" 
                      style={{ width: `${rentPercent}%` }} 
                      title={`Rent: ${rentPercent}%`}
                    />
                  )}
                  {otherPercent > 0 && (
                    <div 
                      className="h-full bg-amber-500" 
                      style={{ width: `${otherPercent}%` }} 
                      title={`Expenses: ${otherPercent}%`}
                    />
                  )}
                  {leftPercent > 0 && (
                    <div 
                      className="h-full bg-emerald-500" 
                      style={{ width: `${leftPercent}%` }} 
                      title={`Savings: ${leftPercent}%`}
                    />
                  )}
                </div>
              </div>

              {/* Legends */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-rose-500 rounded-sm" /> Rent ({rentPercent}%)</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-amber-500 rounded-sm" /> Bills ({otherPercent}%)</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" /> Remaining ({leftPercent}%)</span>
              </div>
            </div>

            {/* Danger / Success notification */}
            {netSavings < 0 ? (
              <div className="mt-6 bg-rose-950/55 border border-rose-800 rounded-xl p-3.5 flex items-start gap-2 text-rose-200">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold block text-rose-300">Warning: spending too much!</span>
                  You are spending more than you bring in. Try to lower your phone bill, or let us assist you in finding food pantries to cut out-of-pocket costs.
                </div>
              </div>
            ) : (
              <div className="mt-6 bg-emerald-950/55 border border-emerald-900 rounded-xl p-3.5 flex items-start gap-2 text-emerald-100">
                <div className="text-xs">
                  <span className="font-bold block text-emerald-400">Great Job! You have extra money!</span>
                  Put this cash in a safe savings account at a local credit union. Keep this aside for emergency renting or a car.
                </div>
              </div>
            )}
          </div>

          {/* Practical financial advice cards */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-4 text-slate-900">
            <h4 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Easy Local Money Saving Tips:
            </h4>

            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold shrink-0">💸</span>
                <div>
                  <strong>Get a Free Lifeline Government Phone:</strong> Don't pay for cell phone plans. Ask soup kitchens in Wayne or Pontiac how to get a free Lifeline smartphone with free monthly text messages.
                </div>
              </li>
              <li className="flex gap-2 border-t border-amber-200/50 pt-3">
                <span className="text-amber-500 font-bold shrink-0">🚌</span>
                <div>
                  <strong>Buy Month passes, not individual rides:</strong> A DDOT or SMART bus monthly pass is $50. If you buy daily single tickings, it costs much more! Buy it on the 1st of each month.
                </div>
              </li>
              <li className="flex gap-2 border-t border-amber-200/50 pt-3">
                <span className="text-amber-500 font-bold shrink-0">🏛️</span>
                <div>
                  <strong>Pay $0 for Bank Accounts:</strong> Many big name checking banks charge $12 each month just to hold your money! Go to a neighborhood <strong>Detroit Credit Union</strong>. They offer completely free basic accounts.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
