import Section from "./Section";
import Heading from "./Heading";
import {
  service1,
  service2,
  service3,
  check,
  service7,
  service8,
  service9,
  service10,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { PinContainer } from "./ui/3d-pin";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentServiceText, setCurrentServiceText] = useState(
    "Small to Mid-Sized Businesses"
  );
  const [currentServiceImage, setCurrentServiceImage] = useState(service3);

  useEffect(() => {
    if (currentService == 0) {
      setCurrentServiceText("Small to Mid-Sized Businesses");
      setCurrentServiceImage(service3);
    } else if (currentService == 1) {
      setCurrentServiceText("E-Commerce Brands");
      setCurrentServiceImage(service7);
    } else if (currentService == 2) {
      setCurrentServiceText("Professional Services");
      setCurrentServiceImage(service8);
    } else if (currentService == 3) {
      setCurrentServiceText("Tech Companies");
      setCurrentServiceImage(service9);
    } else {
      setCurrentServiceText("Local Businesses");
      setCurrentServiceImage(service10);
    }
  }, [currentService]);

  return (
    <Section id="how-to-use">
      <div className="container">
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
            title="Innovative Digital Solutions Built for Business Growth."
            text="SOCIAL GOOSPOOS Unlocks the Power of Digital Marketing Solutions"
          />
        </motion.div>

        <div className="relative">
          <div className="relative z-1 flex flex-col md:flex-row lg:flex-row  items-center h-[100%] md:h-[39rem] lg:h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" h-[25rem] mb-24 w-full flex items-center justify-center "
            >
              <PinContainer
                title="www.SocialGoospoos.com"
                href="http://localhost:5173/"
              >
                <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] md:w-[25rem] h-[18rem] md:h-[25rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Social Goospoos
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Your Complete Partner for Business Growth
                    </span>
                  </div>
                </div>
                <div className="absolute top-10 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                  <img
                    className="w-full h-full object-cover md:object-right"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={service1}
                  />
                </div>
              </PinContainer>
            </motion.div>

            <div className="relative z-1 max-w-[17rem] ml-auto mb-[5rem]">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="h4 mb-4"
              >
                Intelligent Solutions
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="body-2 mb-[3rem] text-n-3"
              >
                SOCIAL GUSSPUSS unlocks the potential of digital marketing
                solutions
              </motion.p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 * index,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-20 lg:top-[10%] lg:left-[50%]  inset-0">
                <img
                  src={service2}
                  className="h-[100%] w-full object-cover"
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="h4 mb-4"
                >
                  Proven Success Across All Services
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="body-2 mb-[3rem] text-n-3"
                >
                  Our integrated approach delivers real, measurable results for
                  businesses like yours.
                </motion.p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="h4 mb-4"
                >
                  Who We Help!
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="body-2 mb-[2rem] text-n-3"
                >
                  Our services are tailored for businesses ready to take their
                  digital strategy to the next level.
                </motion.p>

                <ul className="flex items-center justify-between h-[3rem]">
                  {brainwaveServicesIcons.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 * index,
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      key={index}
                      className={`rounded-2xl flex items-center justify-center duration-500 ease-out cursor-pointer  ${
                        index === currentService
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem] "
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15 "
                      }`}
                      onClick={() => {
                        setCurrentService(index);
                      }}
                    >
                      <div
                        className={
                          index === currentService
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem] "
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]"
              >
                <motion.img
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  src={currentServiceImage}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage title={currentServiceText} />
                {/* <VideoBar /> */}
              </motion.div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
