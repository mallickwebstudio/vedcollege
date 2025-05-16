import AdmissionCountdown from "@/components/site/admission-countdown";
import EnquiryForm from "@/components/site/enquiry-form";
import Section from "@/components/site/section";
import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function hero({ data }) {
  return (
    <Section className="relative bg-foreground/90 overflow-hidden md:overflow-clip" wrapperClassName="grid md:grid-cols-2 gap-8" id="hero-header">
      <div className="relative text-background/90">
        <div className="absolute inset-0 z-0 -m-8 sm:-my-8 md:-my-12 lg:-my-14 overflow-hidden">
          <Image
            className="rounded-md h-full object-cover w-full overflow-hidden"
            src="/images/common/11.png"
            width={400}
            height={400}
            alt="image"
            priority
          />
        </div>
        <div className="sticky top-4 h-fit z-10">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <AdmissionCountdown className="mt-8" />

          {/* <div className="mt-12 flex items-center gap-4">
            <Link className={buttonVariants({ size: "lg" })} href="#enquiry">
              <Mail className="size-4" />
              Enquire Now
            </Link>
          </div> */}
        </div>
      </div>

      <div className="p-4 bg-background rounded-md aspect-square z-10">
        <div className="">
          <span className="text-sm capitalize tracking-wider font-bold text-primary">ENQUIRY FORM</span>
          <h2>Have a Questions? Get Personalized Admission Support</h2>
          <p>Fill the quick form below. Our admissions counselor will reach out to guide you step-by-step.</p>
          <EnquiryForm />
        </div>
      </div>
    </Section>
  )
}
