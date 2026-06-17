import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Award, ArrowRight, RefreshCw, BookmarkCheck } from 'lucide-react';
import { roadmapStages } from '../data/resources';
import { ChecklistItem, RoadmapStage } from '../types';

export default function ChecklistSection() {
  // Store checked task IDs in state, persist in localStorage
  const [completedItems, setCompletedItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('reentry_completed_tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeStageId, setActiveStageId] = useState<string>('r1');

  useEffect(() => {
    try {
      localStorage.setItem('reentry_completed_tasks', JSON.stringify(completedItems));
    } catch (e) {
      console.error('Could not save progress to localStorage', e);
    }
  }, [completedItems]);

  const toggleItem = (itemId: string) => {
    if (completedItems.includes(itemId)) {
      setCompletedItems(completedItems.filter((id) => id !== itemId));
    } else {
      setCompletedItems([...completedItems, itemId]);
    }
  };

  const resetAllProgress = () => {
    if (window.confirm('Do you want to start over and clear your checked items?')) {
      setCompletedItems([]);
    }
  };

  // Get total tasks across all stages
  const totalTasks = roadmapStages.reduce((sum, stage) => sum + stage.items.length, 0);
  const totalCompleted = completedItems.length;
  const overallPercentage = Math.round((totalCompleted / totalTasks) * 100) || 0;

  // Selected stage
  const activeStage = roadmapStages.find((s) => s.id === activeStageId) || roadmapStages[0];
  const activeStageCompletedCount = activeStage.items.filter((item) => completedItems.includes(item.id)).length;

  return (
    <section id="roadmap-checklist-section" className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      {/* Header and Progress Meter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold text-blue-950 flex items-center gap-2">
            <BookmarkCheck className="w-6 h-6 text-blue-900" />
            Your Reentry Steps
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Check off these items as you get them done. We will save your progress!
          </p>
        </div>

        {/* Progress Bar widget */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 grow max-w-md">
          <div className="flex-1">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
              <span>Overall Progress</span>
              <span>{totalCompleted} of {totalTasks} Done ({overallPercentage}%)</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
            {overallPercentage}%
          </div>
        </div>
      </div>

      {/* Stage Select Tab Row */}
      <div className="flex flex-wrap gap-2 mb-6">
        {roadmapStages.map((stage) => {
          const isSelected = stage.id === activeStageId;
          const stageTotal = stage.items.length;
          const stageCompleted = stage.items.filter((it) => completedItems.includes(it.id)).length;
          const isStageFinished = stageTotal === stageCompleted;

          return (
            <button
              id={`stage-tab-${stage.id}`}
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`px-4 py-3 rounded-lg text-xs md:text-sm font-bold text-left transition cursor-pointer flex-1 min-w-[200px] border flex items-center gap-2.5 ${
                isSelected
                  ? 'bg-blue-900 border-blue-900 text-white shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className={`w-2.5 h-10 rounded-full shrink-0 ${isStageFinished ? 'bg-emerald-400' : isSelected ? 'bg-emerald-300' : 'bg-slate-400'}`} />
              <div className="flex-1 min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wider opacity-90">{stage.timeframe}</span>
                <span className="block text-sm font-bold tracking-tight truncate">{stage.title.split(': ')[1]}</span>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-blue-950/60 text-blue-100' : 'bg-slate-200 text-slate-800'}`}>
                {stageCompleted}/{stageTotal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Goal Explainer */}
      <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 mb-6">
        <p className="text-sm text-slate-900 font-medium">
          🌟 <strong>Goal:</strong> {activeStage.shortGoal}
        </p>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {activeStage.items.map((item) => {
          const isCompleted = completedItems.includes(item.id);

          return (
            <div
              id={`task-card-${item.id}`}
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`group p-4 md:p-5 border-2 rounded-xl transition cursor-pointer text-left flex items-start gap-4 ${
                isCompleted
                  ? 'bg-emerald-50/35 border-emerald-300/80'
                  : 'bg-white border-slate-200 hover:border-slate-350 hover:shadow-sm'
              }`}
            >
              {/* Giant high-contrast touch target checkbox icon */}
              <button
                id={`task-check-${item.id}`}
                aria-label={isCompleted ? 'Mark task incomplete' : 'Mark task complete'}
                className={`p-1 rounded-lg shrink-0 mt-0.5 transition ${
                  isCompleted ? 'text-emerald-700' : 'text-slate-400 group-hover:text-slate-600'
                }`}
              >
                {isCompleted ? (
                  <CheckSquare className="w-6 h-6 fill-emerald-100" />
                ) : (
                  <Square className="w-6 h-6" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <span className={`block text-base font-bold tracking-tight ${
                  isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'
                }`}>
                  {item.task}
                </span>

                <p className={`text-xs md:text-sm mt-1.5 leading-relaxed font-normal ${
                  isCompleted ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.easyExplanation}
                </p>

                {/* Pill categories indicator */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    item.category === 'housing' ? 'bg-orange-100 text-orange-850' :
                    item.category === 'food' ? 'bg-emerald-100 text-emerald-850' :
                    item.category === 'jobs' ? 'bg-blue-100 text-blue-850' :
                    item.category === 'health' ? 'bg-pink-100 text-pink-850' :
                    item.category === 'legal' ? 'bg-purple-100 text-purple-850' :
                    'bg-slate-100 text-slate-800'
                  }`}>
                    {item.category === 'jobs' ? '💼 Job Help' :
                     item.category === 'housing' ? '🏠 Safe Bed' :
                     item.category === 'food' ? '🍎 Food Stamps' :
                     item.category === 'health' ? '⚕️ Doctor' :
                     item.category === 'legal' ? '📝 Papers / ID' :
                     '⚙️ Step'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Encouragement Footer */}
      {activeStageCompletedCount === activeStage.items.length && (
        <div className="mt-6 flex items-center gap-4 bg-emerald-50 border border-emerald-200 p-5 rounded-xl text-slate-900 animate-bounce">
          <span className="p-3 bg-emerald-500 text-white rounded-full font-bold">
            <Award className="w-6 h-6" />
          </span>
          <div>
            <h4 className="font-bold text-sm text-emerald-950">Incredible Work! Stage Accomplished!</h4>
            <p className="text-xs text-slate-700 mt-1">
              You finished every single task in this stage. Keep going! Click on another tab above to check off more milestones.
            </p>
          </div>
        </div>
      )}

      {/* Clear/Reset */}
      <div className="mt-8 flex justify-end">
        <button
          id="btn-reset-checklist"
          onClick={resetAllProgress}
          className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-2 hover:bg-slate-100 rounded-lg transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Clear Checklist Progress
        </button>
      </div>
    </section>
  );
}
