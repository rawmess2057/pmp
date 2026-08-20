"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type Token = { text: string; cls: string };

const codeLines: Token[][] = [
  [
    { text: "$ ", cls: "text-lime" },
    { text: "cat ", cls: "text-white" },
    { text: "src/lib.rs", cls: "text-white/50" },
  ],
  [],
  [
    { text: "use ", cls: "text-lime" },
    { text: "anchor_lang::prelude::*;", cls: "text-white" },
  ],
  [],
  [
    { text: "#[program]", cls: "text-lime" },
  ],
  [
    { text: "pub ", cls: "text-lime" },
    { text: "mod ", cls: "text-lime" },
    { text: "portfolio", cls: "text-white" },
    { text: " {", cls: "text-white" },
  ],
  [
    { text: "    pub ", cls: "text-lime" },
    { text: "fn ", cls: "text-lime" },
    { text: "ship", cls: "text-white" },
    { text: "(", cls: "text-white" },
    { text: "ctx: Context<Ship>", cls: "text-white/80" },
    { text: ") -> Result<()> {", cls: "text-white" },
  ],
  [
    { text: "        msg!(", cls: "text-lime" },
    { text: "\"🚀 launching to mainnet...\"", cls: "text-white/60" },
    { text: ");", cls: "text-lime" },
  ],
  [
    { text: "        ", cls: "text-white" },
    { text: "Ok", cls: "text-lime" },
    { text: "(())", cls: "text-white" },
  ],
  [
    { text: "    }", cls: "text-white" },
  ],
  [
    { text: "}", cls: "text-white" },
  ],
  [],
  [
    { text: "#[derive(Accounts)]", cls: "text-lime" },
  ],
  [
    { text: "pub ", cls: "text-lime" },
    { text: "struct ", cls: "text-lime" },
    { text: "Ship", cls: "text-white" },
    { text: " {", cls: "text-white" },
  ],
  [
    { text: "    #[account(", cls: "text-lime" },
    { text: "init, payer = signer", cls: "text-white/80" },
    { text: ")]", cls: "text-lime" },
  ],
  [
    { text: "    pub ", cls: "text-lime" },
    { text: "sprint: Account<'info, Sprint>,", cls: "text-white" },
  ],
  [
    { text: "    pub ", cls: "text-lime" },
    { text: "signer: Signer<'info>,", cls: "text-white" },
  ],
  [
    { text: "    pub ", cls: "text-lime" },
    { text: "system_program: Program<'info, System>,", cls: "text-white" },
  ],
  [
    { text: "}", cls: "text-white" },
  ],
  [],
  [
    { text: "$ cargo build", cls: "text-white" },
  ],
  [
    { text: "✓ ", cls: "text-lime" },
    { text: "Compiling portfolio...", cls: "text-white/60" },
  ],
  [
    { text: "✓ ", cls: "text-lime" },
    { text: "Deployed to devnet ", cls: "text-white/60" },
    { text: "HvY2sFqEhnwu2DhBsVzZHX9UgqTR1BDSo6RQ1PA6pump", cls: "text-lime/70" },
  ],
];

const Terminal = () => {
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const total = codeLines.reduce(
            (acc, line) => acc + line.reduce((a, t) => a + t.text.length, 0),
            0
          );
          const interval = setInterval(() => {
            setChars((c) => {
              if (c >= total) {
                clearInterval(interval);
                setDone(true);
                return c;
              }
              return c + 1;
            });
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const render = useMemo(() => {
    const visible: { tokens: Token[]; text: string }[] = [];
    let remaining = chars;
    for (const line of codeLines) {
      if (remaining <= 0) break;
      const text = line.reduce((a, t) => a + t.text, "");
      if (remaining >= text.length) {
        visible.push({ tokens: line, text });
        remaining -= text.length;
      } else {
        const tokens: Token[] = [];
        let cut = remaining;
        for (const t of line) {
          if (cut <= 0) break;
          const slice = t.text.slice(0, cut);
          tokens.push({ text: slice, cls: t.cls });
          cut -= t.text.length;
        }
        visible.push({ tokens, text });
        remaining = 0;
      }
    }
    return visible;
  }, [chars]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="glass rounded-xl overflow-hidden w-full max-w-2xl text-left shadow-[0_0_80px_rgba(198,242,78,0.06)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-white/40">
          raw@solana: ~/portfolio
        </span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[13px] md:text-sm leading-relaxed min-h-[22rem]">
        {render.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.tokens.map((t, j) => (
              <span key={j} className={t.cls}>
                {t.text}
              </span>
            ))}
            {i === render.length - 1 && !done && (
              <span className="ml-0.5 inline-block w-[7px] h-[1.1em] align-middle bg-lime animate-blink" />
            )}
          </div>
        ))}
        {done && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-0.5 inline-block w-[7px] h-[1.1em] align-middle bg-lime animate-blink"
          />
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;