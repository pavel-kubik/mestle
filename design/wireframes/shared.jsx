// Shared primitives for all Mestle wireframe variants.
// Mid-fi: some color, chunky shapes, sketchy hand-feel.

const M = {
  // Subtle Czech flag-inspired palette (desaturated so it doesn't feel patriotic)
  ink: '#1a1814',
  paper: '#faf7f1',
  paperDim: '#f0ece2',
  line: '#2a251f',
  muted: '#857a6a',
  // Signals
  hot: '#d64545',    // red = wrong / far
  warm: '#e8a33d',   // amber = neighbor / getting close
  cold: '#5b8bb0',   // blue = cold (for heat gradient option)
  correct: '#4a9d5f',// green = right
  // Czech accent (muted blue-red)
  cz1: '#b83a3a',
  cz2: '#4a6b8f',
  // Fonts
  sketch: '"Kalam", "Caveat", "Comic Sans MS", cursive',
  mono: '"JetBrains Mono", "Courier New", monospace',
  sans: '"Inter", system-ui, sans-serif',
  display: '"Fraunces", Georgia, serif',
};

// Hand-drawn border via svg. Reusable.
function SketchBox({ children, style, fill = 'transparent', stroke = M.line, strokeWidth = 2, radius = 6 }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx={radius} ry={radius}
          fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round"
          style={{ filter: 'url(#rough)' }} />
      </svg>
      {children}
    </div>
  );
}

// A rough-SVG filter to add a sketchy wobble to shapes. Inject once.
function RoughDefs() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.4" />
        </filter>
        <filter id="roughMore">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="2.2" />
        </filter>
      </defs>
    </svg>
  );
}

// Simple Czech country outline placeholder — a soft blob, not real geo.
// Gives that "pinned to a map" feel without recreating a real asset.
function CzechBlob({ width = 300, height = 160, stroke = M.line, fill = M.paperDim, style }) {
  return (
    <svg viewBox="0 0 300 160" width={width} height={height} style={style}>
      <path
        d="M28,70 Q20,48 46,38 Q72,22 110,30 Q144,18 186,28 Q220,20 252,38 Q286,48 278,80 Q282,108 248,126 Q212,142 168,134 Q132,146 96,132 Q58,138 38,118 Q20,100 28,70 Z"
        fill={fill} stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"
        style={{ filter: 'url(#rough)' }} />
      {/* faint district seams */}
      <g stroke={stroke} strokeOpacity="0.25" strokeWidth="0.8" fill="none" style={{ filter: 'url(#rough)' }}>
        <path d="M80,40 Q90,80 78,120" />
        <path d="M130,32 Q120,80 140,130" />
        <path d="M180,30 Q190,80 175,132" />
        <path d="M228,36 Q220,80 235,126" />
        <path d="M30,80 L278,80" />
      </g>
    </svg>
  );
}

// A simple labelled pin (numbered).
function MapPin({ x, y, n, tone = 'hot', size = 26, label }) {
  const color = tone === 'correct' ? M.correct : tone === 'warm' ? M.warm : tone === 'cold' ? M.cold : M.hot;
  return (
    <div style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-100%)' }}>
      <div style={{
        width: size, height: size, borderRadius: '50% 50% 50% 0', background: color,
        transform: 'rotate(-45deg)', border: `2px solid ${M.line}`, position: 'relative',
        boxShadow: '2px 2px 0 rgba(0,0,0,0.15)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: 'rotate(45deg)', color: '#fff', fontFamily: M.sans, fontWeight: 800, fontSize: size * 0.5,
        }}>{n}</div>
      </div>
      {label && (
        <div style={{
          position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)',
          fontFamily: M.sketch, fontSize: 13, color: M.ink, whiteSpace: 'nowrap',
          background: M.paper, padding: '1px 5px', border: `1.2px solid ${M.line}`, borderRadius: 3,
          marginTop: 2,
        }}>{label}</div>
      )}
    </div>
  );
}

// A compass pointing to a given bearing (0 = N). Sketchy.
function Compass({ bearing = 0, size = 40, tone = 'hot' }) {
  const color = tone === 'correct' ? M.correct : tone === 'warm' ? M.warm : tone === 'cold' ? M.cold : M.hot;
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <svg viewBox="0 0 40 40" width={size} height={size}>
        <circle cx="20" cy="20" r="17" fill="none" stroke={M.line} strokeWidth="1.5" style={{ filter: 'url(#rough)' }} />
        <g transform={`rotate(${bearing} 20 20)`} style={{ filter: 'url(#rough)' }}>
          <path d="M20 6 L24 20 L20 16 L16 20 Z" fill={color} stroke={M.line} strokeWidth="1" strokeLinejoin="round" />
        </g>
        <text x="20" y="5" textAnchor="middle" fontSize="5" fontFamily={M.mono} fill={M.muted}>N</text>
      </svg>
    </div>
  );
}

// The header used across all screens.
function MestleHeader({ lang = 'EN', onLang, showHelp = true, onHelp }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 14px 10px', borderBottom: `1.5px solid ${M.line}`,
      background: M.paper, position: 'relative',
    }}>
      <button onClick={onHelp} title={lang === 'CZ' ? 'Jak hrát' : 'How to play'} aria-label={lang === 'CZ' ? 'Jak hrát' : 'How to play'} style={{
        border: `1.5px solid ${M.line}`, background: M.paper, width: 32, height: 32,
        borderRadius: 8, fontFamily: M.sketch, fontSize: 18, cursor: 'pointer', padding: 0,
      }}>?</button>
      <div style={{ textAlign: 'center', lineHeight: 1 }}>
        <div style={{ fontFamily: M.display, fontSize: 24, fontWeight: 700, color: M.ink, letterSpacing: -0.5 }}>
          M<span style={{ color: M.cz1 }}>ě</span>stle
        </div>
        <div style={{ fontFamily: M.mono, fontSize: 9, color: M.muted, marginTop: 2 }}>
          #1437 · 21/04/2026
        </div>
      </div>
      <button onClick={onLang} style={{
        border: `1.5px solid ${M.line}`, background: M.paper, padding: '5px 10px',
        borderRadius: 8, fontFamily: M.mono, fontSize: 11, cursor: 'pointer', fontWeight: 600,
      }}>{lang}</button>
    </div>
  );
}

// Target city prompt — "today's city has this coat of arms"
function TargetPrompt({ lang = 'EN' }) {
  const copy = lang === 'CZ'
    ? 'Dnešní město má tento znak'
    : "Today's city has this badge";
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: M.paperDim }}>
      <div style={{
        width: 44, height: 52, border: `1.5px solid ${M.line}`, background: M.paper,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)',
        flexShrink: 0,
      }}>
        <div style={{ fontFamily: M.sketch, fontSize: 10, color: M.muted, textAlign: 'center', lineHeight: 1 }}>
          coat<br/>of arms
        </div>
      </div>
      <div style={{ fontFamily: M.sketch, fontSize: 15, color: M.ink, lineHeight: 1.25 }}>{copy}</div>
    </div>
  );
}

// Input + guess button
function GuessInput({ lang = 'EN', placeholder, disabled }) {
  const p = placeholder ?? (lang === 'CZ' ? 'Hádej dnešní město' : 'Guess today\'s city');
  const btn = lang === 'CZ' ? 'Hádat' : 'Guess';
  return (
    <div style={{ padding: '10px 14px 12px', display: 'flex', flexDirection: 'column', gap: 8, background: M.paper, borderTop: `1.5px solid ${M.line}` }}>
      <SketchBox style={{ height: 40 }} radius={8}>
        <div style={{ padding: '10px 12px', fontFamily: M.sketch, fontSize: 14, color: M.muted }}>
          {p}
        </div>
      </SketchBox>
      <button disabled={disabled} style={{
        border: `1.5px solid ${M.line}`, background: disabled ? M.paperDim : M.ink,
        color: disabled ? M.muted : M.paper, padding: '10px 14px', borderRadius: 8,
        fontFamily: M.display, fontWeight: 700, fontSize: 16, cursor: 'pointer',
        boxShadow: disabled ? 'none' : '2px 2px 0 ' + M.line,
      }}>{btn}</button>
    </div>
  );
}

Object.assign(window, {
  M, SketchBox, RoughDefs, CzechBlob, MapPin, Compass,
  MestleHeader, TargetPrompt, GuessInput,
});
