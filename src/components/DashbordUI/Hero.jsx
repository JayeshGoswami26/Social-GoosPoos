import { useRef, Suspense } from "react";
import Section from "../Section";
import Model from "../Model";
import SubLoader from "../SubLoader";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { LOGO } from "../../assets";
import { Vortex } from "../ui/vortex";

function Hero() {
  const parallaxRef = useRef(null);
  const adjustModelForScreenSize = () => {
    let screenScale = [0.5, 0.5, 0.5];
    let screenPosition = [0, -0.8, 3];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -1, 1.5]; // bring closer on smaller screens
    } else if (window.innerWidth < 1024) {
      screenScale = [1.4, 1.4, 1.4];
      screenPosition = [0, 0, 2];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [screenSize, screenPosition, screenRotation] =
    adjustModelForScreenSize();

  return (
    <Section
      className="pt-[0rem] py-0 -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="dashboardHero"
    >
      <div className="container relative p-0 " ref={parallaxRef}>
        <div className="min-h-screen ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="left-0 -translate-x-1/2 -top-[0rem] absolute w-full z-[14]"
          >
            <Canvas
              className="w-full bg-transparent"
              style={{ height: "100vh" }}
              camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense fallback={SubLoader}>
                <directionalLight position={[1, 1, 1]} intensity={3} />
                <ambientLight intensity={1.5} />
                <pointLight intensity={1} />
                <spotLight intensity={1} />
                <hemisphereLight
                  skyColor="#000"
                  groundColor={"#000"}
                  intensity={1}
                />
                <Model
                  position={screenPosition}
                  scale={screenSize}
                  rotation={screenRotation}
                />
              </Suspense>
            </Canvas>
          </motion.div>
          <div className="w-full mx-auto rounded-md  h-[105vh] overflow-hidden bg-gradient-to-b from-n-8/0 to-n-8/90 ">
            <Vortex
              backgroundColor="transparent"
              rangeY={800}
              particleCount={500}
              baseHue={240}
              className=" px-2 md:px-10  py-4 pt-[12rem] md:pt-[8rem] w-full h-full"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="text-white text-5xl md:text-8xl font-bold text-center"
              >
                SOCIAL GOOSPOOS
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.4,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="text-white text-xl md:text-2xl mt-6 text-center"
              >
                Your All-in-One Dashboard for Tracking, Managing, and Scaling Your Influence
              </motion.p>
              {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Order now
                </button>
                <button className="px-4 py-2  text-white ">
                  Watch trailer
                </button>
              </div> */}
            </Vortex>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
