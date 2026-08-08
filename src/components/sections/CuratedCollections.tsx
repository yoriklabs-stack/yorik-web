import { useState } from 'react';
import { Check, Plus, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface BundleData {
  id: string;
  name: string;
  category: string;
  description: string;
  apps: string[];
  tagColor: string;
}

const presetBundles: BundleData[] = [
  {
    id: 'student',
    name: 'Student Collection',
    category: 'Students',
    description: 'A complete academic toolkit uniting deep paper research, step-by-step homework guidance, and PDF scanning.',
    apps: ['AI Researcher', 'Homework Helper', 'Study Assistant', 'PDF Utility', 'Document Scanner'],
    tagColor: '#8B5CF6',
  },
  {
    id: 'family',
    name: 'Family Collection',
    category: 'Families',
    description: 'Thoughtful utilities for pregnancy tracking, baby routine logs, and home budgeting.',
    apps: ['Family Organizer', 'Pregnancy Tracker', 'Baby Journal', 'Family Finance', 'Utilities'],
    tagColor: '#EC4899',
  },
  {
    id: 'career',
    name: 'Career Collection',
    category: 'Graduates',
    description: 'Accelerate career transition with ATS resume optimization and interactive voice interview coaching.',
    apps: ['AI Resume Builder', 'AI Interview Trainer', 'Career Assistant', 'Productivity'],
    tagColor: '#3B82F6',
  },
  {
    id: 'finance',
    name: 'Finance Collection',
    category: 'Individuals',
    description: 'Privacy-first personal finance tracking, budget alerts, and offline receipt scanning.',
    apps: ['Expense Tracker', 'Budgeting', 'Finance Advisor', 'Planning'],
    tagColor: '#06B6D4',
  },
  {
    id: 'utilities',
    name: 'Utilities Collection',
    category: 'Everyday',
    description: 'Essential document utilities including local compression, merging, and document intelligence.',
    apps: ['PDF Utility', 'Scanner', 'Documents', 'Everyday Tools'],
    tagColor: '#10B981',
  },
  {
    id: 'individual',
    name: 'Individual Collection',
    category: 'Personal',
    description: 'A minimalist suite for personal productivity, habit tracking, and daily life organization.',
    apps: ['Expense Tracker', 'Fitness Tracker', 'Planner', 'Personal Utilities'],
    tagColor: '#F97316',
  },
];

const availableBuildingApps = [
  'AI Researcher', 'Homework Helper', 'PDF Utility', 'Document Scanner',
  'AI Resume Builder', 'AI Interview Trainer', 'Expense Tracker', 'Pregnancy Tracker',
  'Baby Journal', 'Fitness Tracker', 'Personal Planner', 'Family Finance'
];

export default function CuratedCollections() {
  const [customSelected, setCustomSelected] = useState<string[]>([
    'AI Researcher', 'PDF Utility', 'Expense Tracker'
  ]);

  const toggleCustomApp = (appName: string) => {
    setCustomSelected(prev => 
      prev.includes(appName)
        ? prev.filter(a => a !== appName)
        : [...prev, appName]
    );
  };

  return (
    <div className="space-y-12">
      
      {/* Preset Bundles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {presetBundles.map((bundle) => (
          <div
            key={bundle.id}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-yorik-border flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Card Ambient Accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 blur-2xl rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: bundle.tagColor }}
            ></div>

            <div>
              {/* Header badge */}
              <div className="flex items-center justify-between mb-3">
                <span 
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border"
                  style={{ backgroundColor: `${bundle.tagColor}15`, color: bundle.tagColor, borderColor: `${bundle.tagColor}35` }}
                >
                  {bundle.category}
                </span>
                <span className="text-[10px] font-mono text-yorik-subtle">
                  Curated Collection
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-extrabold text-xl text-white mb-2 group-hover:text-yorik-purple-glow transition-colors">
                {bundle.name}
              </h3>
              <p className="text-xs text-yorik-muted leading-relaxed mb-6">
                {bundle.description}
              </p>

              {/* App Tags */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-yorik-subtle uppercase tracking-wider block">Included Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {bundle.apps.map((app) => (
                    <span 
                      key={app}
                      className="px-2.5 py-1 rounded-lg bg-yorik-bg/80 border border-yorik-border/80 text-[11px] text-yorik-muted font-medium flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: bundle.tagColor }}></span>
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer indicator */}
            <div className="pt-4 border-t border-yorik-border/60 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-yorik-cyan">Future Collection</span>
              <a 
                href={`/collections/${bundle.id}`}
                className="inline-flex items-center gap-1 text-yorik-purple-glow font-semibold hover:text-white transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Build Your Own Interactive Collection Section */}
      <div className="p-8 rounded-3xl glass-panel border border-yorik-purple/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <SlidersHorizontal className="w-48 h-48 text-yorik-purple" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yorik-purple/15 text-yorik-purple-glow text-xs font-mono mb-3 border border-yorik-purple/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Customization</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Build Your Own Collection
          </h3>
          <p className="text-sm text-yorik-muted leading-relaxed mb-6">
            Choose the focused utility tools that fit your unique lifestyle. As Yorik Labs grows, build a personalized workspace tailored to your exact needs.
          </p>

          {/* Interactive Chips */}
          <div className="space-y-3 mb-6">
            <span className="text-xs font-mono text-yorik-subtle uppercase tracking-wider block">
              Select Apps to Add to Your Collection ({customSelected.length} selected):
            </span>
            
            <div className="flex flex-wrap gap-2">
              {availableBuildingApps.map((app) => {
                const isSelected = customSelected.includes(app);
                return (
                  <button
                    key={app}
                    type="button"
                    onClick={() => toggleCustomApp(app)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-yorik-purple text-white shadow-glow border border-yorik-purple-glow'
                        : 'bg-yorik-surface border border-yorik-border text-yorik-muted hover:text-white hover:border-yorik-purple/40'
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{app}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Custom Summary Preview */}
          <div className="p-4 rounded-xl bg-yorik-bg/90 border border-yorik-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-yorik-cyan font-semibold block">Your Custom Yorik Suite:</span>
              <p className="text-xs text-yorik-muted mt-0.5">
                {customSelected.length > 0 ? customSelected.join(' + ') : 'Select apps above to preview your collection.'}
              </p>
            </div>
            
            <a
              href="/contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-yorik-surface-elevated border border-yorik-purple/40 hover:bg-yorik-purple transition-colors shrink-0"
            >
              Request Custom Apps →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
