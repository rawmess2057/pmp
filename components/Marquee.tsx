import { marqueeItems } from "@/data";

const Marquee = () => {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative py-8 w-full overflow-hidden border-y border-white/[0.06] bg-white/[0.02]">
      <div className="flex w-max animate-marquee gap-10 px-5">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm md:text-base text-white/40 whitespace-nowrap flex items-center gap-10"
          >
            {item}
            <span className="text-lime/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;