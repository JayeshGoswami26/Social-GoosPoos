import { Suspense, lazy } from "react";
import SubLoader from "../components/SubLoader";

function DashboardPage() {
  const Hero = lazy(() => import("../components/DashbordUI/Hero"));
  return (
    <Suspense fallback={<SubLoader/>}>
    <Hero />
  </Suspense>
  )
}

export default DashboardPage