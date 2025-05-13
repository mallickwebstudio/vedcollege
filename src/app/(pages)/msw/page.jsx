import Hero from "./hero";
import Overview from "./overview";
import Eligibility from "./eligibility";
import Curriculum from "./curriculum";
import FAQ from "./faq";
import Scope from "./scope";
import Admission from "./admission";

export default function Page() {
  return (
    <>
      <Hero />
      <Overview />
      <Curriculum />
      <Scope />
      <Admission />
      {/* <Eligibility /> */}
      {/* <FAQ /> */}
    </>
  )
}
