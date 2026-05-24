import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/client.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "What I really do, on a daily basis, is",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Tech & Finance.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a CMS (Contract Management System) for Municipalities.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Digitl Palika",
    des: "The only ERP system in Nepal that helps local governments in financial, strategic, and overall decision-making for a better tomorrow with the help of Digital Palika..",
    img: "/digitalpalika.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/digitalpalika.org/",
  },
  {
    id: 2,
    title: "Ratopati ",
    des: "Ratopati is Nepal's leading online news portal, delivering up-to-the-minute news coverage, in-depth analysis, and engaging multimedia content to keep readers informed and connected.",
    img: "/ratopati.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://english.ratopati.com/",
  },
  {
    id: 3,
    title: "Recruit Nepal",
    des: "Transforming job searches into successful careers.",
    img: "/recruitnepal.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://recruitnepal.com/",
  },
  {
    id: 4,
    title: "DoNIDCR",
    des: "Vital event registration including birth,death,marriage, divorce and migration.",
    img: "/donidcr.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://play.google.com/store/apps/details?id=com.donidcr.panjikaran",
  },
  {
    id: 6,
    title: "PopUp",
    des: "AI news summarized in 60 words.",
    img: "/pop up.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://play.google.com/store/apps/details?id=com.donidcr.panjikaran",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Raw was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ramesh is the ideal partner.",
    name: "Saurav adhikari",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Jira",
    img: "/jira-3.svg",
    //nameImg: "",
  },
  {
    id: 2,
    name: "Slack",
    img: "/slack.svg",
    nameImg: "",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/git.svg",
    nameImg: "/githubt.svg",
  },
  {
    id: 4,
    name: "figma",
    img: "/figma.svg",
    nameImg: "/figmatext.svg",
  },
  {
    id: 5,
    name: "clickup.",
    img: "/clicku.svg",
    
  },
  {
    id: 6,
    name: "odoo.",
    img: "/odoo.svg",
    
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Project Manager - Mindrisers Tech",
    desc: "Managed mobile app, Webapp and complex ERP systems. Led cross-functional teams through the full SDLC for multiple B2B, B2G SaaS applications.",
    date: "2025 - present",
    thumbnail: "/logo.webp",
    link: "https://mindriserstech.com/",
  },
  {
    id: 2,
    title: "Project Manager - SB GLOBAL",
    desc: "Led Webapp and complex ERP systems. Delivered 4 websites within 6 months using Scrum/Agile methodologies.",
    date: "2025 - 2026",
    thumbnail: "/sb.png",
    link: "https://sbglobalventure.com/",
  },
  {
    id: 3,
    title: "Project Manager - kumari Bank",
    desc: "Successfully led the end-to-end Document Digitization project, converting over 3.2 million physical records into a secure, accessible digital archive.",
    date: "2023 - 2025",
    thumbnail: "/Kumari.webp",
    link: "https://www.kumaribank.com/en/personal-banking",
  },
  {
    id: 4,
    title: "Junior Developer - Tivra institute",
    desc: "Contributed to full-stack development of internal tools and client-facing dashboards using modern JavaScript frameworks.",
    date: "2020 - 2021",
    thumbnail: "/exp2.svg",
    link: "#",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/rawmess2057"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/r-a-w-manages/"
  },
];
