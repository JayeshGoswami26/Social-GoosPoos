import { avatar3, avatar4, avatar5, check } from "../assets";
import {  InfluencerCollabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import Testimonials from "./Testimonials";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const InfluencerCollaboration = () => {
  return (
   <>
    <BackgroundBeamsWithCollision className="">
      <Section className={`p-0 m-0 w-full`} crosses id="advertisements">
        <div className="container lg:flex relative">
          <div className="max-w-[40rem] relative z-1">
            <h2 className="h2 mb-4 md:mb-8">
                How It Works ?
            </h2>

            <ul className="max-w-[22rem] mb-10 md:mb-14 ">
              {InfluencerCollabContent.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img src={check} width={24} height={24} alt="check" />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>

            <Button>Try it now</Button>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-10 ">
            <div className="relative left-1/2 flex w-[22rem] aspect-square -translate-x-1/2 scale:75 md:scale-100">
              <div className="">
                <img className="absolute animate-float -right-[7rem] -top-[5rem] md:-right-[10rem] md:-top-10 w-[100%] " draggable="false" src={avatar3} alt="" />
                <img className="absolute animate-float-reverse  right-0 md:right-0 " src={avatar5} draggable="false" alt="" />
                <img className="absolute animate-float -left-[7rem] top-[5rem] md:-left-[10rem] md:top-14 " src={avatar4} draggable="false" alt="" />
              </div>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </BackgroundBeamsWithCollision>
    <Testimonials/>
   </>
  );
};

export default InfluencerCollaboration;
