import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { motion } from "framer-motion";

const Benefits = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current) {
      cardRefs.current.forEach((el) => {
        if (el) {
          VanillaTilt.init(el, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0,
          });
        }
      });
    }

    return () => {
      cardRefs.current.forEach((el) => {
        if (el && el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=""
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="Elevate Your Business With SOCIAL GOOSPOOS "
          />
        </motion.div>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2*index,
                duration: 0.8,
                ease: "easeInOut",
              }}
              ref={(el) => (cardRefs.current[index] = el)} // Attach the ref to each card
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transform transition-transform cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto justify-between">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p> */}
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Explore more
                    </span>
                  </button>
                  {/* <Arrow /> */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 z-0"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 z-0">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover  "
                      draggable="false"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
