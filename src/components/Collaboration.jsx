import { check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Logo from "../../src/assets/LOGO-2.png";
// import { Meteors } from "./ui/meteors";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

const Collaboration = () => {
  return (
    <Section className={`overflow-hidden relative`} crosses id="advertisements">
      <div className="w-[95%] h-full absolute top-0 left-1/2 -translate-x-1/2">
        {/* Gradients */}
        <div className="absolute inset-x-20 left-1/2 -translate-x-1/2 top-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 left-1/2 -translate-x-1/2 top-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 left-1/2 -translate-x-1/2 top-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 left-1/2 -translate-x-1/2 top-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-[50rem] "
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-[#0e0c15] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="container lg:flex relative">
        <div className="max-w-[40rem] relative z-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h2 mb-4 md:mb-8"
          >
            Your Complete Partner for Business Growth
          </motion.h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * index,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mb-3 py-3"
                key={item.id}
              >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </motion.li>
            ))}
          </ul>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Button>Try it now</Button>
          </motion.span>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
          >
            {collabText}
          </motion.p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-[10rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full"
              >
                <div className=" flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={Logo} width={150} height={150} alt="brainwave" />
                </div>
              </motion.div>
            </div>

            <motion.ul
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative hover:scale-110 duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:shadow-white/20 -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </motion.ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
