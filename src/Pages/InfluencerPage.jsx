import { Suspense, lazy } from "react";
import SubLoader from "../components/SubLoader";


function InfluencerPage() {
  const Hero = lazy(() => import("../components/InfluencerHero"));
  const BentoGrid = lazy(() => import("../components/InfluencerBentoGrid"));
  const InfluencerCollaboration = lazy(() => import("../components/InfluencerColabration"));
  return (
    <Suspense fallback={<SubLoader />}>
      <Hero />
      <BentoGrid/>
      <InfluencerCollaboration/>
      
    </Suspense>
  );
}

export default InfluencerPage;
