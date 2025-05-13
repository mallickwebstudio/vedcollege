import Hero from "./hero";
import Overview from "./overview";
import Curriculum from "./curriculum";
import Scope from "./scope";
import Admission from "./admission";
import FAQ from "./faq";

export default function Page() {
  return (
    <>
      <Hero />
      <Overview />
      <Curriculum />
      <Scope />
      <Admission />
      {/* <FAQ /> */}
    </>
  )
}
