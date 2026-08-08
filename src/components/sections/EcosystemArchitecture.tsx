import { useState } from 'react';
import { GraduationCap, Heart, Briefcase, ArrowRight } from 'lucide-react';

interface CategoryBranch {
  title: string;
  icon: any;
  color: string;
  items: string[];
}

const branches: CategoryBranch[] = [
  {
    title: 'STUDENTS',
    icon: GraduationCap,
    color: '#8B5CF6',
    items: ['Research', 'Homework', 'PDF', 'Scanner'],
  },
  {
    title: 'FAMILIES',
    icon: Heart,
    color: '#EC4899',
    items: ['Pregnancy', 'Baby', 'Finance', 'Utilities'],
  },
  {
    title: 'PROFESSIONALS',
    icon: Briefcase,
    color: '#3B82F6',
    items: ['Resume', 'Interview', 'Career', 'Productivity'],
  },
];

export default function EcosystemArchitecture() {
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
      
      {/* Central Root Node */}
      <div className="flex flex-col items-center">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yorik-purple via-yorik-cyan to-yorik-purple opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>
          <div className="relative px-8 py-4 rounded-xl bg-yorik-surface-elevated border border-yorik-purple/50 flex items-center gap-3 text-white shadow-2xl">
            <div className="w-9 h-9 rounded-lg bg-yorik-bg border border-yorik-purple/40 flex items-center justify-center p-0.5 shadow-glow">
              <img src="/logo.png" alt="Yorik Labs 3D Ribbon Y Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-yorik-cyan uppercase tracking-widest block">Root Engine</span>
              <h3 className="font-extrabold text-xl tracking-wider">YORIK LABS</h3>
            </div>
          </div>
        </div>

        {/* Vertical Trunk Line */}
        <div className="w-0.5 h-12 bg-gradient-to-b from-yorik-purple via-yorik-purple/40 to-yorik-border"></div>

        {/* Horizontal Connector Bus */}
        <div className="w-full max-w-3xl h-0.5 bg-gradient-to-r from-yorik-purple/20 via-yorik-purple to-yorik-purple/20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2.5 h-2.5 rounded-full bg-yorik-purple animate-ping"></div>
        </div>

        {/* Branch Lines down */}
        <div className="w-full max-w-3xl grid grid-cols-3 gap-4 text-center">
          <div className="w-0.5 h-8 bg-yorik-purple/50 mx-auto"></div>
          <div className="w-0.5 h-8 bg-yorik-purple/50 mx-auto"></div>
          <div className="w-0.5 h-8 bg-yorik-purple/50 mx-auto"></div>
        </div>
      </div>

      {/* Category Level Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-2">
        {branches.map((branch) => {
          const Icon = branch.icon;
          const isHighlighted = activeBranch === branch.title;

          return (
            <div
              key={branch.title}
              onMouseEnter={() => setActiveBranch(branch.title)}
              onMouseLeave={() => setActiveBranch(null)}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                isHighlighted
                  ? 'bg-yorik-surface-elevated border-yorik-purple shadow-glow-strong transform -translate-y-1'
                  : 'glass-panel border-yorik-border hover:border-yorik-purple/40'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-yorik-border/60 mb-4">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold"
                    style={{ backgroundColor: `${branch.color}20`, color: branch.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-wider text-white">{branch.title}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yorik-surface text-yorik-subtle border border-yorik-border">
                  Category
                </span>
              </div>

              {/* Focused Apps List */}
              <div className="space-y-2">
                {branch.items.map((app) => (
                  <div 
                    key={app}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-yorik-bg/80 border border-yorik-border/40 hover:border-yorik-purple/40 text-xs text-yorik-muted hover:text-white transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: branch.color }}></span>
                      <span>{app}</span>
                    </div>
                    <span className="text-[10px] font-mono text-yorik-subtle">Focused App</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Expansion Footer */}
      <div className="mt-12 flex flex-col items-center">
        <div className="w-0.5 h-8 bg-gradient-to-b from-yorik-purple/40 to-yorik-cyan"></div>
        
        <div className="p-6 rounded-2xl glass-panel border border-yorik-cyan/30 text-center max-w-xl w-full relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-yorik-purple/5 via-yorik-cyan/10 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-yorik-cyan font-bold tracking-widest uppercase">
              <span>MORE APPS</span>
              <span>•</span>
              <span>MORE CATEGORIES</span>
              <span>•</span>
              <span>MORE POSSIBILITIES</span>
            </div>
            
            <p className="text-xs text-yorik-muted max-w-md">
              Yorik Labs is engineered as an expandable modular ecosystem. New utility applications are seamlessly integrated into category trees.
            </p>

            <a 
              href="/roadmap"
              className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-yorik-purple-glow hover:text-white transition-colors"
            >
              <span>Explore Platform Expansion Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
