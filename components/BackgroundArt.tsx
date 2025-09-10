export default function BackgroundArt() {
  return (
    <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 2048 1152" aria-hidden>
      <g opacity="0.05" transform="translate(300,360) scale(5)" fill="none" stroke="#1a1a1a" strokeWidth={0.8}>
        <path d="M10 10 L15 5 L30 8 L40 20 L35 32 L20 29 L12 22 Z" />
      </g>
      <g transform="translate(1770,980) scale(0.7)">
        <ellipse cx="60" cy="60" rx="60" ry="40" fill="#A67B5B"/>
        <circle cx="40" cy="50" r="14" fill="#8B5E3C"/>
        <circle cx="80" cy="50" r="14" fill="#8B5E3C"/>
        <circle cx="40" cy="50" r="5" fill="#000"/>
        <circle cx="80" cy="50" r="5" fill="#000"/>
        <rect x="55" y="65" width="10" height="8" fill="#fff"/>
        <rect x="65" y="65" width="10" height="8" fill="#fff"/>
      </g>
    </svg>
  );
}