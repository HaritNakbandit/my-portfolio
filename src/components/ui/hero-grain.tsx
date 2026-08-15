const HeroGrain = () => (
  <svg
    className="hero-grain -z-10"
    width="100%"
    height="100%"
    aria-hidden="true"
  >
    <filter id="hero-grain-filter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={0.9}
        numOctaves={2}
        stitchTiles="stitch"
        result="noise"
      />
      <feColorMatrix
        in="noise"
        type="matrix"
        values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
      />
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 0.08 0.1 0.08 0" />
      </feComponentTransfer>
      <feComposite operator="in" in2="SourceGraphic" />
    </filter>
    <rect width="100%" height="100%" filter="url(#hero-grain-filter)" fill="var(--color-ink)" />
  </svg>
);

export default HeroGrain;
