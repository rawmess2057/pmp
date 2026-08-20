import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none group ${className}`}
      onClick={handleClick}
    >
      <span className="absolute inset-0 bg-lime/40 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      <span className="absolute inset-0 rounded-lg border border-lime/30 group-hover:border-lime/60 transition-colors duration-300" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-[#0a0a12] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:text-lime transition-colors duration-300 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
