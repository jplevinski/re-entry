export interface Resource {
  id: string;
  name: string;
  category: 'housing' | 'food' | 'jobs' | 'health' | 'legal';
  county: 'Wayne (Detroit)' | 'Oakland (Pontiac)' | 'Macomb (Warren)' | 'All SE Michigan';
  address: string;
  phone: string;
  website: string;
  description: string;
  helpfulTips: string; // 6th-grade level guidance
}

export interface ChecklistItem {
  id: string;
  task: string;
  easyExplanation: string;
  category: 'housing' | 'food' | 'jobs' | 'health' | 'legal' | 'general';
}

export interface RoadmapStage {
  id: string;
  title: string;
  timeframe: string;
  statusIcon: string;
  shortGoal: string;
  items: ChecklistItem[];
}

export interface GlossaryTerm {
  word: string;
  easyMeaning: string;
  sentenceExample: string;
}
