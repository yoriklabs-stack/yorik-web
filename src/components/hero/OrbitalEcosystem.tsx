import { useState, useEffect } from 'react';
import { GraduationCap, Wallet, Heart, Briefcase, FileText, ChevronRight, ShieldCheck } from 'lucide-react';

interface CategoryNode {
  id: string;
  name: string;
  apps: string[];
  icon: any;
  color: string;
  glow: string;
  angle: number;
  radius: number;
}

const categories: CategoryNode[] = [
  {
    id: 'students',
    name: 'Students',
    apps: ['AI Researcher', 'Homework Helper', 'PDF Utility'],
    icon: GraduationCap,
    color: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.4)',
    angle: 0,
    radius: 170,
  },
  {
    id: 'finance',
    name: 'Finance',
    apps: ['Expense Tracker', 'Budget Companion', 'Finance Advisor'],
    icon: Wallet,
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.4)',
    angle: 72,
    radius: 170,
  },
  {
    id: 'family',
    name: 'Families',
    apps: ['Pregnancy Tracker', 'Baby Journal', 'Family Organizer'],
    icon: Heart,
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.4)',
    angle: 144,
    radius: 170,
  },
  {
    id: 'professionals',
    name: 'Professionals',
    apps: ['AI Resume Builder', 'Interview Trainer', 'Career Tools'],
    icon: Briefcase,
    color: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.4)',
    angle: 216,
    radius: 170,
  },
  {
    id: 'utilities',
    name: 'Utilities',
    apps: ['Document Scanner', 'PDF Tools', 'Personal Planner'],
    icon: FileText,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    angle: 288,
    radius: 170,
  },
];

export default function OrbitalEcosystem() {
  const [activeNode, setActiveNode] = useState<CategoryNode | null>(categories[0]);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto h-[480px] sm:h-[540px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Orbital Rings */}
      <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-yorik-purple/20 animate-pulse-slow"></div>
      <div className="absolute w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full border border-yorik-cyan/15 border-dashed"></div>

      {/* Ambient Radial Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-yorik-purple/20 blur-3xl pointer-events-none"></div>

      {/* Central Device Container */}
      <div className="relative z-20 w-44 sm:w-52 h-72 sm:h-80 rounded-[32px] p-2 bg-gradient-to-b from-yorik-border-bright via-yorik-surface-elevated to-yorik-bg shadow-glow border border-yorik-purple/40 flex flex-col items-center justify-between">
        
        {/* Device Speaker Notch */}
        <div className="w-14 h-3 bg-yorik-bg rounded-full border border-yorik-border/80 flex items-center justify-center mt-1">
          <div className="w-3 h-1 rounded-full bg-yorik-purple/60"></div>
        </div>

        {/* Central Screen Content */}
        <div className="w-full flex-1 my-2 rounded-[22px] bg-yorik-bg/90 backdrop-blur-md p-3 flex flex-col justify-between border border-yorik-border/50 relative overflow-hidden group">
          
          {/* Subtle grid pattern inside device */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          {/* Device Header */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-[9px] text-yorik-purple-glow tracking-widest uppercase">YORIK OS</span>
            <span className="w-2 h-2 rounded-full bg-yorik-cyan animate-pulse"></span>
          </div>

          {/* Device Center Information */}
          <div className="relative z-10 text-center my-auto space-y-1.5">
            <div className="w-14 h-14 mx-auto rounded-2xl overflow-hidden shadow-glow border border-yorik-purple/40">
              <img src="/app_icon.png" alt="Yorik Labs 3D Ribbon Y App Icon" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white">Yorik Labs Core</h4>
            <p className="text-[10px] text-yorik-muted leading-tight">
              {activeNode ? activeNode.name : 'One Ecosystem'}
            </p>
            <div className="pt-1">
              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-mono bg-yorik-purple/15 text-yorik-purple-glow border border-yorik-purple/30">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Device Footer status */}
          <div className="relative z-10 pt-2 border-t border-yorik-border/60 flex items-center justify-between text-[9px] font-mono text-yorik-subtle">
            <span>Starting Android</span>
            <ShieldCheck className="w-3 h-3 text-yorik-cyan" />
          </div>
        </div>

        {/* Device Home Indicator */}
        <div className="w-16 h-1 bg-yorik-muted/40 rounded-full mb-1"></div>
      </div>

      {/* Orbiting Category Nodes */}
      {categories.map((cat) => {
        const currentAngle = (cat.angle + rotationAngle) * (Math.PI / 180);
        // Scale radius for mobile responsiveness
        const responsiveRadius = typeof window !== 'undefined' && window.innerWidth < 640 ? 135 : cat.radius;
        const x = Math.cos(currentAngle) * responsiveRadius;
        const y = Math.sin(currentAngle) * responsiveRadius;

        const Icon = cat.icon;
        const isSelected = activeNode?.id === cat.id;

        return (
          <div
            key={cat.id}
            onClick={() => setActiveNode(cat)}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: isPaused ? 'transform 0.2s ease-out' : 'none',
            }}
            className={`absolute z-30 cursor-pointer group flex items-center gap-2 p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 ${
              isSelected
                ? 'bg-yorik-surface-elevated text-white border-yorik-purple shadow-glow scale-110'
                : 'glass-panel text-yorik-muted border-yorik-border hover:border-yorik-purple/50 hover:text-white'
            }`}
          >
            <div 
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
            >
              <Icon className="w-4 h-4" />
            </div>
            
            <div className="hidden sm:block text-left pr-1">
              <span className="block font-bold text-xs text-white leading-none">{cat.name}</span>
              <span className="text-[10px] font-mono text-yorik-subtle">{cat.apps.length} Concept Tools</span>
            </div>
          </div>
        );
      })}

      {/* Active Node Detail Card Overlay (Bottom Drawer) */}
      {activeNode && (
        <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-md p-3.5 rounded-2xl glass-panel border border-yorik-purple/30 shadow-2xl flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shrink-0"
              style={{ backgroundColor: `${activeNode.color}25`, border: `1px solid ${activeNode.color}50` }}
            >
              <activeNode.icon className="w-4 h-4" style={{ color: activeNode.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs text-white">{activeNode.name} Category</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-yorik-surface text-yorik-cyan border border-yorik-border">
                  Future Ecosystem
                </span>
              </div>
              <p className="text-[11px] text-yorik-muted truncate max-w-[210px] sm:max-w-[260px]">
                {activeNode.apps.join(' • ')}
              </p>
            </div>
          </div>
          
          <a 
            href={`/categories/${activeNode.id}`}
            className="p-2 rounded-lg bg-yorik-purple/10 text-yorik-purple-glow hover:bg-yorik-purple hover:text-white transition-colors"
            title="Explore category"
          >
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}
