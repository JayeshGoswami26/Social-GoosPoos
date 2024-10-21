// import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
// import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading
        tag="THE SOLUTION"
        title="Integrated Digital Marketing for Brands Looking to Grow"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          // const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4">{item.text}</p>

                <div className="absolute top-28 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-center max-w-[27rem] mt-8 md:mb-8">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[25rem] md:w-[25rem] md:h-[25rem]">
                      <div className="flex flex-col items-center justify-center gap-5 bg-blue-500/10 shadow-xl shadow-neutral-950 text-white rounded-2xl">
                        <div className="">
                          <img className="w-[4rem] h-[4rem]" src={item.svgUrl1} alt="" />
                        </div>
                        <div className="text-center px-5 font-code"> {item.svgText1} </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-5 bg-blue-500/10 shadow-xl shadow-neutral-950 text-white rounded-2xl">
                        <div className="">
                        <img className="w-[4rem] h-[4rem]" src={item.svgUrl2} alt="" />
                        </div>
                        <div className="text-center px-5 font-code">{item.svgText2}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-5 bg-blue-500/10 shadow-xl shadow-neutral-950 text-white rounded-2xl">
                        <div className="">
                        <img className="w-[4rem] h-[4rem]" src={item.svgUrl3} alt="" />

                        </div>
                        <div className="text-center px-5 font-code">{item.svgText3}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-5 bg-blue-500/10 shadow-xl shadow-neutral-950 text-white rounded-2xl">
                        <div className="">
                        <img className="w-[4rem] h-[4rem]" src={item.svgUrl4} alt="" />

                        </div>
                        <div className="text-center px-5 font-code">{item.svgText4}</div>
                      </div>
                    </div>

                    {/* <Tagline>{item.date}</Tagline> */}

                    {/* <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div> */}
                  </div>

                  {/* <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div> */}
    </div>
  </Section>
);

export default Roadmap;