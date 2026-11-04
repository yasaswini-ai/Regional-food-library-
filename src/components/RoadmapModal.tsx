import React from 'react';
import { X, CheckCircle, Clock } from 'lucide-react';

interface RoadmapModalProps {
  onClose: () => void;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({ onClose }) => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Telugu, North Indian and South Indian Collections',
      status: 'Active & Verified',
      isCurrent: true,
      description: 'Carefully verified, authentic foundational collections covering Andhra/Rayalaseema/Telangana Telugu traditions, Punjabi and Awadhi North Indian styles, and coastal South Indian heritage with multi-version lineage.',
      deliverables: [
        'Multiple versions per dish (MLA Upma vs Guntur vs Kadapa Pesarattu)',
        'Temple Tamarind vs Family Lemon vs Raw Mustard Ava Pulihora',
        'Hyderabadi Kacchi Dum vs Military Pulao vs Awadhi Pakki Biryani',
        'Amritsari Dhaba Dal Makhani vs Andhra Tomato Pappu vs Udupi Sambar',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'All Indian States and Regional Cuisines',
      status: 'Next Iteration',
      isCurrent: false,
      description: 'Expanding deep district coverage: Malabar Kerala, Chettinad Tamil Nadu, Goan Saraswat, Bengali Macher Jhol, Gujarati Kathiyawadi, Rajasthani Ker Sangri, and Kashmiri Wazwan.',
      deliverables: [
        'District-level terroir and spice crop mapping',
        'Micro-regional heirloom grain integration (Matta, Gobindobhog)',
        'Indigenous cold-pressed oil pairing guides',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'International Diaspora & Adaptations',
      status: 'Upcoming',
      isCurrent: false,
      description: 'Cross-cultural diasporic adaptations: Indo-Chinese Kolkata heritage, British-Indian Curry House lineage (Balti, Chicken Tikka Masala origins), South African Durban Bunny Chow, and Caribbean Indo-Trinidadian rotis.',
      deliverables: [
        'Wok-tossed Hakka Indian spices',
        'Diaspora ingredient substitutions across global grocery markets',
      ],
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
        'Family variation notes submission',
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
              <span className="text-xs text-neutral-400">Roadmap Item #12</span>
            </div>
            <h2 className="text-2xl font-display text-white">
              Rasoi Lineage Development Roadmap
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              "Start with a carefully verified collection of recipes, then expand. Use licensed or original photographs and properly attributed recipe sources."
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
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border ${
                    p.isCurrent
                      ? 'bg-amber-600 border-amber-400 text-white shadow-lg'
                      : 'bg-[#191712] border-neutral-700 text-neutral-400'
                  }`}
                >
                  {p.isCurrent ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Clock className="w-4 h-4" />
                  )}
                </div>

                {/* Card Content */}
                <div className="flex-1 p-5 rounded-xl bg-[#191712] border border-neutral-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-amber-500 uppercase">
                        {p.phase}
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        p.isCurrent
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80'
                          : 'bg-white/5 text-neutral-400 border-white/5'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="pt-2 border-t border-neutral-800">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {p.deliverables.map((d, i) => (
                        <li key={i} className="text-xs text-amber-200/80 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
