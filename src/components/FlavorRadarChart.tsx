import React, { useState, useMemo } from 'react';
import * as d3 from 'd3';
import { Sparkles, Flame, Info } from 'lucide-react';
import { RecipeVariation, FlavorProfile } from '../types';

interface FlavorRadarChartProps {
  variation: RecipeVariation;
}

interface DimensionData {
  axis: string;
  key: keyof FlavorProfile;
  value: number;
  descriptor: string;
}

export const FlavorRadarChart: React.FC<FlavorRadarChartProps> = ({ variation }) => {
  const [hoveredPoint, setHoveredPoint] = useState<DimensionData | null>(null);

  // Compute or infer flavor profile dimensions for this variation
  const dimensions: DimensionData[] = useMemo(() => {
    // 1. If variation explicitly provides a flavorProfile, use it
    if (variation.flavorProfile) {
      return [
        { axis: 'Spicy', key: 'spicy', value: variation.flavorProfile.spicy, descriptor: getSpiceDescriptor(variation.flavorProfile.spicy) },
        { axis: 'Sweet', key: 'sweet', value: variation.flavorProfile.sweet, descriptor: getSweetDescriptor(variation.flavorProfile.sweet) },
        { axis: 'Tangy', key: 'tangy', value: variation.flavorProfile.tangy, descriptor: getTangyDescriptor(variation.flavorProfile.tangy) },
        { axis: 'Earthy', key: 'earthy', value: variation.flavorProfile.earthy, descriptor: getEarthyDescriptor(variation.flavorProfile.earthy) },
        { axis: 'Savory', key: 'savory', value: variation.flavorProfile.savory, descriptor: getSavoryDescriptor(variation.flavorProfile.savory) },
        { axis: 'Aromatic', key: 'aromatic', value: variation.flavorProfile.aromatic ?? 70, descriptor: getAromaticDescriptor(variation.flavorProfile.aromatic ?? 70) },
      ];
    }

    // 2. Intelligently derive from ingredients, spice level, and culinary profile
    const ingNames = variation.ingredients.map((i) => i.name.toLowerCase()).join(' ');

    // Spicy (0-100)
    let spicy = variation.spiceLevel * 18;
    if (ingNames.includes('mirchi') || ingNames.includes('chilli') || ingNames.includes('chili')) spicy += 15;
    if (ingNames.includes('pepper') || ingNames.includes('miriyalu')) spicy += 12;
    if (ingNames.includes('mustard oil') || ingNames.includes('kachi ghani')) spicy += 8;
    spicy = Math.min(95, Math.max(15, spicy));

    // Tangy (0-100)
    let tangy = 25;
    if (ingNames.includes('tamarind') || ingNames.includes('chintapandu')) tangy += 50;
    if (ingNames.includes('tomato') || ingNames.includes('tamatar')) tangy += 25;
    if (ingNames.includes('lemon') || ingNames.includes('citric') || ingNames.includes('curd') || ingNames.includes('dahi') || ingNames.includes('vinegar') || ingNames.includes('amchur') || ingNames.includes('anardana')) tangy += 30;
    tangy = Math.min(95, Math.max(10, tangy));

    // Sweet (0-100)
    let sweet = 15;
    if (ingNames.includes('jaggery') || ingNames.includes('bellam') || ingNames.includes('sugar')) sweet += 45;
    if (ingNames.includes('coconut') || ingNames.includes('cashew') || ingNames.includes('cream') || ingNames.includes('malai')) sweet += 25;
    if (ingNames.includes('onion') && (ingNames.includes('sauté') || ingNames.includes('shallot'))) sweet += 10;
    sweet = Math.min(85, Math.max(10, sweet));

    // Earthy (0-100)
    let earthy = 45;
    if (ingNames.includes('dal') || ingNames.includes('pappu') || ingNames.includes('gram') || ingNames.includes('sattu') || ingNames.includes('besan')) earthy += 25;
    if (ingNames.includes('cumin') || ingNames.includes('coriander') || ingNames.includes('fenugreek') || ingNames.includes('methi')) earthy += 15;
    if (ingNames.includes('curry leaf') || ingNames.includes('karivepaku')) earthy += 10;
    earthy = Math.min(95, Math.max(30, earthy));

    // Savory / Umami (0-100)
    let savory = 55;
    if (ingNames.includes('ghee') || ingNames.includes('butter') || ingNames.includes('makkhan')) savory += 20;
    if (ingNames.includes('chicken') || ingNames.includes('mutton') || ingNames.includes('fish') || ingNames.includes('lamb') || ingNames.includes('paneer')) savory += 20;
    if (ingNames.includes('soy') || ingNames.includes('garlic') || ingNames.includes('salt')) savory += 10;
    savory = Math.min(95, Math.max(40, savory));

    // Aromatic (0-100)
    let aromatic = 50;
    if (ingNames.includes('cardamom') || ingNames.includes('clove') || ingNames.includes('cinnamon') || ingNames.includes('star anise') || ingNames.includes('biryani')) aromatic += 35;
    if (ingNames.includes('kalpasi') || ingNames.includes('saffron') || ingNames.includes('kasuri methi') || ingNames.includes('shado beni')) aromatic += 20;
    if (ingNames.includes('ginger') || ingNames.includes('fennel') || ingNames.includes('saunf')) aromatic += 15;
    aromatic = Math.min(95, Math.max(35, aromatic));

    return [
      { axis: 'Spicy', key: 'spicy', value: Math.round(spicy), descriptor: getSpiceDescriptor(spicy) },
      { axis: 'Sweet', key: 'sweet', value: Math.round(sweet), descriptor: getSweetDescriptor(sweet) },
      { axis: 'Tangy', key: 'tangy', value: Math.round(tangy), descriptor: getTangyDescriptor(tangy) },
      { axis: 'Earthy', key: 'earthy', value: Math.round(earthy), descriptor: getEarthyDescriptor(earthy) },
      { axis: 'Savory', key: 'savory', value: Math.round(savory), descriptor: getSavoryDescriptor(savory) },
      { axis: 'Aromatic', key: 'aromatic', value: Math.round(aromatic), descriptor: getAromaticDescriptor(aromatic) },
    ];
  }, [variation]);

  function getSpiceDescriptor(val: number) {
    if (val >= 80) return 'Fiery regional chilli/pepper punch';
    if (val >= 60) return 'Warm, balanced pungent bloom';
    if (val >= 40) return 'Gentle pleasant heat';
    return 'Mild, kid-friendly spice';
  }

  function getSweetDescriptor(val: number) {
    if (val >= 60) return 'Noticeable jaggery/caramelized note';
    if (val >= 40) return 'Subtle cream & coconut softness';
    return 'Dry / savory baseline';
  }

  function getTangyDescriptor(val: number) {
    if (val >= 75) return 'Vibrant aged tamarind / citrus kick';
    if (val >= 50) return 'Pleasant sourness from tomato / curd';
    return 'Mild soothing acidity';
  }

  function getEarthyDescriptor(val: number) {
    if (val >= 75) return 'Rich stone-ground dal & cumin base';
    if (val >= 50) return 'Toasted lentil & curry leaf notes';
    return 'Light grain texture';
  }

  function getSavoryDescriptor(val: number) {
    if (val >= 80) return 'Deep rich umami & ghee satiety';
    if (val >= 60) return 'Hearty spiced richness';
    return 'Balanced savory tone';
  }

  function getAromaticDescriptor(val: number) {
    if (val >= 80) return 'High volatile bouquet (clove/cardamom)';
    if (val >= 60) return 'Fresh ginger & tempered spices';
    return 'Subtle background aroma';
  }

  // D3 Radar Dimensions
  const size = 320;
  const margin = 50;
  const radius = (size - 2 * margin) / 2;
  const center = size / 2;
  const totalAxes = dimensions.length;
  const angleSlice = (Math.PI * 2) / totalAxes;

  // D3 Radius Scale (0 to 100)
  const rScale = d3.scaleLinear().domain([0, 100]).range([0, radius]);

  // Compute Concentric Ring Polygons (20%, 40%, 60%, 80%, 100%)
  const levels = [20, 40, 60, 80, 100];

  // Helper to compute (x, y) given radius and axis index
  const getCoordinates = (val: number, i: number) => {
    const r = rScale(val);
    const angle = i * angleSlice - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Generate radar polygon path using D3 line generator
  const radarLine = d3
    .line<DimensionData>()
    .x((d, i) => getCoordinates(d.value, i).x)
    .y((d, i) => getCoordinates(d.value, i).y)
    .curve(d3.curveLinearClosed);

  const polygonPath = radarLine(dimensions) || '';

  // Dominant profile attribute
  const dominantTrait = useMemo(() => {
    return [...dimensions].sort((a, b) => b.value - a.value)[0];
  }, [dimensions]);

  return (
    <div className="rounded-2xl border border-amber-900/30 bg-[#14120e] p-6 shadow-xl space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sensory Analysis</span>
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-[11px] text-neutral-400 font-mono">D3 Radar Engine</span>
          </div>
          <h3 className="text-lg font-display font-semibold text-white">
            Flavor Profile Matrix
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium">
            Lead Trait: <strong className="text-white font-bold">{dominantTrait.axis} ({dominantTrait.value}%)</strong>
          </span>
        </div>
      </div>

      {/* D3 Radar SVG Canvas & Live Metric Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Radar SVG Visual */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full max-w-[320px] aspect-square overflow-visible"
          >
            <defs>
              {/* Radial gradient for filled area */}
              <radialGradient id="flavorGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#d97706" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#b45309" stopOpacity="0.15" />
              </radialGradient>
              {/* Glow filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Concentric Grid Rings */}
            {levels.map((level) => {
              const points = Array.from({ length: totalAxes }).map((_, i) => {
                const pt = getCoordinates(level, i);
                return `${pt.x},${pt.y}`;
              }).join(' ');

              return (
                <g key={level}>
                  <polygon
                    points={points}
                    fill="none"
                    stroke="#2e271d"
                    strokeWidth={level === 100 ? '1.5' : '1'}
                    strokeDasharray={level === 100 ? 'none' : '3 3'}
                  />
                  {/* Level percentage label on top vertical axis */}
                  <text
                    x={center + 4}
                    y={center - rScale(level) + 3}
                    fill="#736b5e"
                    fontSize="8"
                    fontFamily="monospace"
                    className="select-none"
                  >
                    {level}%
                  </text>
                </g>
              );
            })}

            {/* Radial Spokes / Axes */}
            {dimensions.map((dim, i) => {
              const outer = getCoordinates(100, i);
              const labelPos = getCoordinates(120, i);
              const isHovered = hoveredPoint?.axis === dim.axis;

              return (
                <g key={dim.axis}>
                  <line
                    x1={center}
                    y1={center}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#382e22"
                    strokeWidth="1"
                  />
                  {/* Axis Label */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isHovered ? '#fbbf24' : '#e6ded1'}
                    fontSize="11"
                    fontWeight={isHovered ? '700' : '600'}
                    className="transition-colors cursor-pointer select-none"
                    onMouseEnter={() => setHoveredPoint(dim)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    {dim.axis}
                  </text>
                </g>
              );
            })}

            {/* Data Polygon Fill */}
            <path
              d={polygonPath}
              fill="url(#flavorGradient)"
              stroke="#f59e0b"
              strokeWidth="2.5"
              filter="url(#glow)"
              className="transition-all duration-500 ease-out"
            />

            {/* Data Point Circles on Vertices */}
            {dimensions.map((dim, i) => {
              const pt = getCoordinates(dim.value, i);
              const isHovered = hoveredPoint?.axis === dim.axis;

              return (
                <g key={dim.axis}>
                  {/* Outer glow ring on hover */}
                  {isHovered && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="9"
                      fill="#f59e0b"
                      fillOpacity="0.25"
                      className="animate-pulse"
                    />
                  )}
                  {/* Inner node circle */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? '6' : '4'}
                    fill={isHovered ? '#ffffff' : '#fbbf24'}
                    stroke="#14120e"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredPoint(dim)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive Hover Tooltip Box */}
          <div className="h-10 mt-2 flex items-center justify-center">
            {hoveredPoint ? (
              <div className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-amber-500/40 text-xs shadow-lg flex items-center gap-2 animate-fadeIn">
                <span className="font-bold text-amber-300">{hoveredPoint.axis}:</span>
                <span className="font-mono text-white font-semibold">{hoveredPoint.value}/100</span>
                <span className="text-neutral-400 text-[11px]">— {hoveredPoint.descriptor}</span>
              </div>
            ) : (
              <span className="text-[11px] text-neutral-500 flex items-center gap-1 font-mono">
                <Info className="w-3.5 h-3.5" />
                Hover over data nodes to inspect flavor chemistry
              </span>
            )}
          </div>
        </div>

        {/* Dimension Breakdown Metrics Panel */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-medium">Sensory Balance Breakdown:</span>
            <span className="font-mono text-[10px] text-neutral-500">6 Dimensions</span>
          </div>

          <div className="space-y-2">
            {dimensions.map((dim) => {
              const isLead = dim.axis === dominantTrait.axis;
              const isHovered = hoveredPoint?.axis === dim.axis;

              return (
                <div
                  key={dim.axis}
                  onMouseEnter={() => setHoveredPoint(dim)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isHovered
                      ? 'bg-amber-950/30 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                      : isLead
                      ? 'bg-[#1a1712] border-amber-800/40'
                      : 'bg-[#16140f] border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <span>{dim.axis}</span>
                      {isLead && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider">
                          Dominant
                        </span>
                      )}
                    </span>
                    <span className="font-mono font-bold text-amber-300">
                      {dim.value}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        dim.axis === 'Spicy'
                          ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                          : dim.axis === 'Sweet'
                          ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                          : dim.axis === 'Tangy'
                          ? 'bg-gradient-to-r from-yellow-400 to-amber-500'
                          : dim.axis === 'Earthy'
                          ? 'bg-gradient-to-r from-emerald-600 to-amber-600'
                          : dim.axis === 'Savory'
                          ? 'bg-gradient-to-r from-amber-600 to-amber-400'
                          : 'bg-gradient-to-r from-violet-400 to-amber-400'
                      }`}
                      style={{ width: `${dim.value}%` }}
                    />
                  </div>

                  <p className="text-[10px] text-neutral-400 mt-1 truncate">
                    {dim.descriptor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
