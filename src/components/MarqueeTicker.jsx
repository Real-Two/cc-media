const brands = [
  'Head & Shoulders',
  'Himalaya',
  'WishCare',
  'BlaBliBlü',
]

export default function MarqueeTicker() {
  const items = [...brands, ...brands, ...brands, ...brands]

  return (
    <div className="w-full overflow-hidden border-t border-b border-border py-5 bg-bg-light/50 backdrop-blur-sm">
      <div className="marquee-track">
        {items.map((brand, i) => (
          <span
            key={i}
            className="font-heading text-[13px] md:text-[15px] tracking-[0.15em] text-text-muted whitespace-nowrap mx-8 md:mx-14 uppercase font-medium"
          >
            {brand}
            <span className="mx-8 md:mx-14 text-accent opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
