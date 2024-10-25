// import { motion } from "framer-motion";
import Section from "./Section";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { motion } from "framer-motion";
import { Cover } from "./ui/cover";
import {
  avatar,
  avatar2,
  bg1,
  bg2,
  bg4,
  bg5,
  bg7,
  facebookColab,
  googleColab,
  instagramColab,
  linkedinColab,
  LOGO,
  twitterColab,
  YoutubeAdsColab,
} from "../assets";

const people = [
  {
    id: 1,
    name: "Instagram",
    designation: "Social Media",
    image: instagramColab,
  },
  {
    id: 2,
    name: "Facebook",
    designation: " social Media",
    image: facebookColab,
  },
  {
    id: 3,
    name: "Google",
    designation: "Search Engines",
    image: googleColab,
  },
  {
    id: 4,
    name: "Twitter",
    designation: "Social Media",
    image: twitterColab,
  },
  {
    id: 5,
    name: "LinkedIn",
    designation: "Job Finder",
    image: linkedinColab,
  },
  {
    id: 6,
    name: "YouTube",
    designation: "Videos media",
    image: YoutubeAdsColab,
  },
];

const variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 10,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};

const variantsSecond = {
  initial: {
    x: 0,
  },
  animate: {
    x: -10,
    rotate: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const gridHeader1 = (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.9994 153.877C141.147 153.877 176.851 127.54 194.627 111.673C201.789 105.28 201.789 94.597 194.627 88.204C176.851 72.3371 141.147 46 99.9994 46C58.8516 46 23.1479 72.3371 5.37163 88.2041C-1.79055 94.597 -1.79054 105.28 5.37164 111.673C23.1479 127.54 58.8516 153.877 99.9994 153.877ZM99.9994 137.57C120.783 137.57 137.631 120.722 137.631 99.9383C137.631 79.1551 120.783 62.3069 99.9994 62.3069C79.2161 62.3069 62.368 79.1551 62.368 99.9383C62.368 120.722 79.2161 137.57 99.9994 137.57Z"
      fill="url(#paint0_linear_105_535)"
    />{" "}
    <defs>
      {" "}
      <linearGradient
        id="paint0_linear_105_535"
        x1="157.499"
        y1="63.2603"
        x2="106.827"
        y2="158.86"
        gradientUnits="userSpaceOnUse"
      >
        {" "}
        <stop offset="0.0509862" stopColor="#FFB6E1" />{" "}
        <stop offset="1" stopColor="#FBE3EA" />{" "}
      </linearGradient>{" "}
    </defs>{" "}
  </svg>
);

const gridHeader2 = (
  <div className="flex flex-row items-center justify-center mb-10 w-full">
    <AnimatedTooltip items={people} />
  </div>
);

const gridHeader3 = (
  <>
    <img className="w-[40rem]" src={LOGO} />
  </>
);

const gridHeader4 = (
  <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <motion.div
      variants={variants}
      className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
    >
      <img
        src={avatar}
        alt="avatar"
        height="140"
        width="140"
        className="rounded-full h-14 w-14"
      />
      <p className="text-xs text-white">
        I want to boost my instagram account with more followers and latest
        trends and advertise my channel . . . . .
      </p>
    </motion.div>
    <motion.div
      variants={variantsSecond}
      className="text-white flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
    >
      <p className="text-xs text-white "> Hold my beer . </p>
      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0  " />
    </motion.div>
  </motion.div>
);

const gridHeader5 = (
  <>
    <img src={avatar2} alt="" />
  </>
);

const gridHeader6 = (
  <>
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-red-400 via-red-200 to-white ">
        Level Up Your Socials <br /> Media and give it 
        <Cover className="cursor-pointer ">Lighting boost</Cover>
      </h1>
    </div>
  </>
);

const items = [
  {
    title: "Where Creativity Meets Data",
    description:
      "Imagine the boldness of creativity fuelled by the precision of analytics",
    header: gridHeader1,
    icon: "Ideas",
    bgImage: bg1,
    iconClassName: "text-[#666666]",
    titleClassName: "text-[#093848] font-bold",
    descriptionClassName: "text-[#666666] text-base lg:text-sm ",
    headerClassName: "hover:rotate-[20deg] duration-500",
    delay : 0.2
  },
  {
    title: "",
    description: " Unleash Your Social Media Potential With US",
    header: "",
    icon: "",
    bgImage: bg2,
    iconClassName: "text-[#ffffff]",
    titleClassName: "text-[#F8F8FF] font-bold",
    descriptionClassName: "text-[#d8f7fc] text-5xl  ",
    headerClassName: " duration-500 mt-5",
    delay : 0.5
  },
  {
    title: "Boost Your Social Media",
    description: "Transform Your Influence into Unstoppable Growth",
    header: gridHeader2,
    icon: "",
    bgImage: "",
    iconClassName: "text-[#ffffff]",
    titleClassName: "text-[#F8F8FF] font-bold",
    descriptionClassName: "text-[#d8f7fc] text-xl",
    headerClassName: " duration-500 z-2 mt-10",
    delay: 0.8
  },
  {
    title: "",
    description: "",
    header: gridHeader3,
    icon: "",
    bgImage: bg4,
    iconClassName: "",
    titleClassName: "hidden",
    descriptionClassName: "hidden",
    headerClassName: " duration-500 mt-5 ",
    delay : 0.2
  },
  {
    title: "Got You Covered !",
    description:
      "At Social Goospoos, we prioritize transparency and reliability",
    header: gridHeader4,
    icon: "",
    bgImage: bg5,
    iconClassName: "",
    titleClassName: "text-2xl",
    descriptionClassName: "text-white/80",
    headerClassName: " duration-500 mt-10 ",
    delay : 0.5
  },
  {
    title: "Skydive Into Social Media ",
    description: "Take the leap and watch your socials soar!",
    header: gridHeader5,
    icon: "",
    bgImage: "",
    iconClassName: "",
    titleClassName: "text-2xl",
    descriptionClassName: "text-white/80",
    headerClassName: " duration-500 mt-0 ",
    delay : 0.2
  },
  {
    title: "",
    description: "",
    header: gridHeader6,
    icon: "",
    bgImage: bg7,
    iconClassName: "",
    titleClassName: "hidden",
    descriptionClassName: "hidden",
    headerClassName: " duration-500 ",
    delay : 0.5
  },
];

function InfluencerBentoGrid() {
  return (
    <Section
      className="py-[2.5rem] "
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="Grid"
    >
      <div className="container relative z-2 ">
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              bgImage={item.bgImage}
              iconClassName={item.iconClassName}
              titleClassName={item.titleClassName}
              descriptionClassName={item.descriptionClassName}
              headerClassName={item.headerClassName}
              delay={item.delay}
              className={` ${i === 3 || i === 6 ? "md:col-span-2  " : ""}`}
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
}

export default InfluencerBentoGrid;
