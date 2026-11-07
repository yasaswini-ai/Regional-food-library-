import React from 'react';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface RoadmapModalProps {
  onClose: () => void;
  onSelectPhaseFilter?: (phase: string) => void;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({ onClose, onSelectPhaseFilter }) => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Telugu, North Indian and South Indian Collections',
      status: 'Live & Operational',
      isCurrent: true,
      description: 'Carefully verified, authentic foundational collections covering Andhra/Rayalaseema/Telangana Telugu traditions, Punjabi and Awadhi North Indian styles, and coastal South Indian heritage with multi-version lineage.',
      deliverables: [
        'Multiple versions per dish (MLA Upma vs Guntur vs Kadapa Pesarattu)',
        'Temple Tamarind vs Family Lemon vs Raw Mustard Ava Pulihora',
        'Hyderabadi Kacchi Dum vs Military Pulao vs Awadhi Pakki Biryani',
        'Amritsari Dhaba Dal Makhani vs Andhra Tomato Pappu vs Udupi Sambar',
      ],
      filterKey: 'Phase 1',
    },
    {
      phase: 'Phase 2',
      title: 'All Indian States and Regional Cuisines',
      status: 'Live & Operational',
      isCurrent: true,
      description: 'Deep district coverage across all Indian states: Bengal (Shorshe Maach), Kashmir (Pandit & Wazwan Rogan Josh), Gujarat (Surati Khaman Dhokla & Undhiyu), Rajasthan (Marwari Dal Baati & Ker Sangri), Bihar (Patna Litti Chokha), and Goa.',
      deliverables: [
        'District-level terroir and spice crop mapping (Kolkata, Srinagar, Surat, Jodhpur, Patna)',
        'Micro-regional heirloom grain integration (Gobindobhog, Sona Masoori, Coarse Atta)',
        'Indigenous cold-pressed oil pairing guides (Kachi Ghani Mustard, Desi Ghee, Groundnut)',
      ],
      filterKey: 'Phase 2',
    },
    {
      phase: 'Phase 3',
      title: 'International Diaspora & Global Adaptations',
      status: 'Live & Operational',
      isCurrent: true,
      description: 'Cross-cultural diasporic adaptations: Kolkata Tangra Hakka Chinese (Chilli Chicken & Manchurian), British-Indian Curry House lineage (Glasgow Chicken Tikka Masala & Birmingham Balti), South African Durban Bunny Chow, and Caribbean Indo-Trinidadian Doubles & Roti.',
      deliverables: [
        'Wok-tossed Hakka Indian spices & high-heat wok hei techniques',
        'Diaspora ingredient substitutions across global grocery markets (US, UK, Europe, Africa, Caribbean)',
        'Authentic historical context on 19th-century indenture and 20th-century restaurant migrations',
      ],
      filterKey: 'Phase 3',
    },
    {
      phase: 'Phase 4',
      title: 'Recipe Translation and Voice Assistant',
      status: 'Live & Operational',
      isCurrent: true,
      description: 'Full Multilingual support in Telugu (తెలుగు), Hindi (हिन्दी), Tamil (தமிழ்), and English. Interactive hands-free Cook Mode with Web Speech API audio narration and real-time AI cooking chemistry assistance.',
      deliverables: [
        'Text-to-Speech step read-aloud for hands-free cooking in the kitchen',
        'Integrated timers with temple bell chime alerts',
        'Real-time culinary physics & problem-solver Q&A',
      ],
    },
    {
      phase: 'Phase 5',
      title: 'AI Ingredient Scanning & Recommendations',
      status: 'Live & Operational',
      isCurrent: true,
      description: 'Zero-waste intelligent pantry scanner. Home cooks pick available ingredients or upload lists to find matching regional dishes and district versions powered by server-side Gemini 3.8 Flash.',
      deliverables: [
        'Instant staple matching & missing ingredient calculation',
        'Custom dietary & allergy-safe substitution engine',
      ],
    },
    {
      phase: 'Phase 6',
      title: 'Community Recipes & Offline Cookbook',
      status: 'Live & Operational',
      isCurrent: true,
      description: 'Preserving family grandmother lineages, printing kitchen binder cards, and saving private offline cookbooks in browser storage.',
      deliverables: [
        'Offline recipe bookmarking & memory storage',
        'Print-optimized high-contrast kitchen binder cards',
        'Weekly Monday–Sunday Meal Planner with aggregated grocery list',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                Architecture & Product Vision
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-emerald-400 font-mono font-medium">
                Phases 1, 2, 3, 4, 5 & 6 All Live
              </span>
            </div>
            <h2 className="text-2xl font-display text-white">
              Flavora Development Roadmap
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              "Honoring verified district traditions across India and the global diaspora with multiple authentic variations for every dish."
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-amber-900/30">
            {phases.map((p, idx) => (
              <div key={idx} className="relative flex items-start gap-5">
                {/* Node icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border bg-amber-600 border-amber-400 text-white shadow-lg shadow-amber-600/20">
                  <CheckCircle className="w-5 h-5" />
                </div>

                {/* Card Content */}
                <div className="flex-1 p-5 rounded-xl bg-[#191712] border border-neutral-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-amber-500 uppercase">
                        {p.phase}
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-emerald-950/60 text-emerald-400 border-emerald-800/80">
                      {p.status}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="pt-2 border-t border-neutral-800 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block">
                      Active Features & Lineages:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {p.deliverables.map((d, i) => (
                        <li key={i} className="text-xs text-amber-200/80 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {p.filterKey && onSelectPhaseFilter && (
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            onSelectPhaseFilter(p.filterKey!);
                            onClose();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Explore {p.phase} Collections in Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-between">
          <span className="text-xs text-neutral-400 font-mono">
            Flavora v2.4 · All 6 Phases Fully Operational
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-md transition-colors"
          >
            Explore Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
