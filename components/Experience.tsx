"use client";

import React from "react";
import { motion } from "framer-motion";

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full overflow-hidden">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full max-w-5xl mx-auto mt-12 px-4">
        {/* Mobile timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#F27121] via-[#E94057] to-[#8A2387]" />
          {workExperience.map((exp, index) => (
            <TimelineCard key={exp.id} exp={exp} index={index} isMobile />
          ))}
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#F27121] via-[#E94057] to-[#8A2387]" />
          <div className="grid grid-cols-[1fr_3px_1fr]">
            {workExperience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <React.Fragment key={exp.id}>
                  <div
                    className={`flex items-center ${isLeft ? "pr-8" : "pl-8"}`}
                  >
                    {!isLeft && (
                      <TimelineCard exp={exp} index={index} />
                    )}
                  </div>
                  <div className="flex justify-center relative py-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.15 }}
                      className="w-[15px] h-[15px] rounded-full bg-gradient-to-br from-[#F27121] via-[#E94057] to-[#8A2387] z-10 ring-4 ring-[#1f1f1f]"
                    />
                  </div>
                  <div
                    className={`flex items-center ${isLeft ? "pl-8" : "pr-8"}`}
                  >
                    {isLeft && (
                      <TimelineCard exp={exp} index={index} />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({
  exp,
  index,
  isMobile,
}: {
  exp: (typeof workExperience)[number];
  index: number;
  isMobile?: boolean;
}) => {
  return (
    <motion.a
      href={exp.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: isMobile ? 20 : index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`block group ${isMobile ? "ml-10 mb-8" : "mb-8"}`}
    >
      <div
        className="p-5 md:p-6 rounded-lg border border-white/5 transition-all duration-300 group-hover:border-[#E94057]/40 group-hover:shadow-lg group-hover:shadow-[#E94057]/5"
        style={{
          background:
            "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          boxShadow: "5px 5px 10px #1a1a1a, -5px -5px 10px #242424",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-[#F27121] tracking-wider uppercase">
            {exp.date}
          </span>
          {isMobile && (
            <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-br from-[#F27121] via-[#E94057] to-[#8A2387] ring-4 ring-[#1f1f1f] shrink-0" />
          )}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F27121] group-hover:via-[#E94057] group-hover:to-[#8A2387] transition-all duration-300">
          {exp.title}
        </h3>
        <p className="text-white-100 mt-2 text-sm leading-relaxed">
          {exp.desc}
        </p>
      </div>
    </motion.a>
  );
};

export default Experience;
