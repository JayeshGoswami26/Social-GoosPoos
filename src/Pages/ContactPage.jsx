import { Suspense, lazy } from "react";
import SubLoader from "../components/SubLoader";

function ContactPage() {
  const ContactUs = lazy(() => import("../components/ContactUs"));
  return (
    <Suspense fallback={<SubLoader />}>
      <ContactUs/>
    </Suspense>
  );
}

export default ContactPage;
