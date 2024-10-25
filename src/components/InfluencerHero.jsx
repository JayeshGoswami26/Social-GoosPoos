// import Button from "./Button";
import Section from "./Section";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { heroButturfly } from "../assets";
import CompanyLogos from "./CompanyLogos";
import { motion } from "framer-motion";
function InfluencerHero() {
  return (
    <Section
      className="pt-[0rem] -mt-[5.25rem] overflow-hidden relative"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <BackgroundGradientAnimation className={``}>
        <div className=" pt-[10rem] z-1 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl ">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-yellow-100 to-purple-700">
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="h1 mb-6"
            >
              SOCIAL GOOSPOOS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="body-1 font-code max-w-3xl mx-auto my-6 text-n-2 lg:my-8"
            >
              Achieve Steady Growth in Google Ads with Our Proven 90-Day Success
              System – Results You Can Count On.
            </motion.p>
          </p>
        </div>
      </BackgroundGradientAnimation>
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-1 ">
        <ContainerScroll>
          <img
            src={heroButturfly}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-contain h-full object-center"
            alt="Hero Image"
          />
        </ContainerScroll>
      </div>
      <CompanyLogos
        Title={`Elevate your account visibility on: `}
        className=" relative z-10 mt-20 lg:block"
      />
    </Section>
  );
}

export default InfluencerHero;
