"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <p className="section-label mb-4 text-center">
        <span className="text-lime/70">//</span> selected work
      </p>
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-gradient">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] block"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#0b0b14" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, i) => (
                    <div
                      key={icon + i}
                      className="border border-white/[0.06] bg-white/[0.04] rounded-full w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * i + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-1.5" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <p className="flex lg:text-lg md:text-xs font-medium text-sm text-lime font-mono">
                    open
                  </p>
                  <FaLocationArrow className="text-lime" />
                </div>
              </div>
            </PinContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
