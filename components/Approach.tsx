import React from "react";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <p className="section-label mb-4 text-center">
        <span className="text-lime/70">//</span> how I build
      </p>
      <h1 className="heading">
        My <span className="text-gradient">approach</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title=""
          icon={<AceternityIcon order="Design" />}
          des="Every great dApp starts with a clear design. I sketch the data model, map out on-chain vs. off-chain logic, and define the program architecture — accounts, PDAs and instructions — before a single line of Rust is written. This is where security is planned in, not bolted on."
          bgColor="bg-emerald-900"
        />
        <Card
          title=""
          icon={<AceternityIcon order="Build" />}
          des="I write Solana programs with Rust and Anchor, structuring smart contracts around clear instruction logic and robust account validation. Off-chain, I build the frontends and clients that let users actually interact with the chain — dApps are nothing without a great UX."
          bgColor="bg-pink-900"
        />
        <Card
          title=" "
          icon={<AceternityIcon order="Test & Audit" />}
          des="DeFi means the stakes are real. I write comprehensive tests for every program — happy paths, edge cases, and the attacks I know are coming. I run through security checklists, review access control and reentrancy risks, and iterate until the code is battle-tested."
          bgColor="bg-sky-600"
        />
        <Card
          title=""
          icon={<AceternityIcon order="Deploy" />}
          des="From devnet to mainnet — I handle program deployment, keypair management and initialization. Then I verify on-chain with explorer tools and make sure everything runs as expected after the first real transactions hit the network."
          bgColor="bg-pink-900"
        />
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  // add this one for the desc
  des,
  icon,
  bgColor,
}: {
  title: string;
  des: string;
  icon: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <div
      className="glass border border-white/[0.08] group/canvas-card flex items-center justify-center
       max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 ${bgColor}`} />
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#C6F24E_0%,#3a3a44_50%,#C6F24E_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-[#0a0a12] px-5 py-2 text-lime font-mono backdrop-blur-3xl font-bold text-xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
