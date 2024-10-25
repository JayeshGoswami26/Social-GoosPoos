// import Benefits from "../components/Benefits";
// import Collaboration from "../components/Collaboration";
// import Hero from "../components/Hero"
// import Roadmap from "../components/Roadmap";
// import Services from "../components/Services";
import { Suspense, lazy } from "react";
import SubLoader from "../components/SubLoader";

function HomePage() {
  const Hero = lazy(() => import("../components/Hero"));
  const Benefits = lazy(() => import("../components/Benefits"))
  const Collaboration = lazy(() => import("../components/Collaboration"))
  const Roadmap = lazy(() => import("../components/Roadmap"))
  const Services = lazy(() => import("../components/Services"))
  return (
    <>
      <Suspense fallback={<SubLoader/>}>
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
      </Suspense>
    </>
  );
}

export default HomePage;
