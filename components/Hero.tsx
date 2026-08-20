"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Terminal from "./Terminal";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 flex flex-col items-center">
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl px-4">
        <p className="section-label flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          web3.dev — superteam nepal
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
        </p>

        <TextGenerateEffect
          words="Building the Decentralized Future"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="font-mono text-sm md:text-base text-white/60 -mt-2">
          <span className="text-lime">$ whoami</span> — Ramesh, a Blockchain
          &amp; Web3 Developer based in Nepal, building on Solana. Ex-Project
          Manager, now shipping smart contracts.
        </p>

        <p className="text-sm md:text-base text-white/40 max-w-xl leading-relaxed -mt-2">
          From managing ERP rollouts to writing Anchor programs — I turn real
          product thinking into decentralized solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-60">
            <MagicButton
              title="View my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="https://github.com/rawmess2057"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 px-5 rounded-lg border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl flex items-center justify-center gap-2 font-mono text-sm text-white/50 hover:text-lime hover:border-lime/40 transition-colors"
          >
            <FaGithub />
            github.com/rawmess2057
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-16 w-full flex justify-center px-4">
        <Terminal />
      </div>
    </div>
  );
};

export default Hero;