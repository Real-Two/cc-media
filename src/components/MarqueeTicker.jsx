const brands = [
  'Head & Shoulders',
  'Himalaya',
  'WishCare',
  'BlaBliBlü',
]

export default function MarqueeTicker() {
  const items = [...brands, ...brands, ...brands, ...brands]

  return (
    <div className="w-full overflow-hidden border-t border-b border-[rgba(255,255,255,0.05)] py-5 bg-[#111111]">
      <div className="marquee-track">
        {items.map((brand, i) => (
          <span
            key={i}
            className="font-heading text-[14px] md:text-[16px] tracking-[0.15em] text-white whitespace-nowrap mx-8 md:mx-14 uppercase"
          >
            {brand}
            <span className="mx-8 md:mx-14 text-teal opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
