"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { stats } from "@/data";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-16 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-white/[0.06] md:divide-x">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1 p-6 md:p-8"
            >
              <span className="font-mono text-4xl md:text-5xl text-lime text-glow">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs md:text-sm text-white/50 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;