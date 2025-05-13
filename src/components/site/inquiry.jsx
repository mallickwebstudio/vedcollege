import Section from "@/components/site/section";
import Image from "next/image";
import InquiryForm from "./inquiry-form";

export default function Inquiry() {
  return (
    <Section className="relative bg-secondary" wrapperClassName="grid gap-8 md:grid-cols-2" id="inquiry">
      {/* <div className="absolute top-0 right-0 h-full w-full aspect-square -z-10">
        <Image
          className="h-full w-fit object-cover opacity-5"
          src="/images/icon/graduation.svg"
          width={100}
          height={100}
          alt="Logo"
        />  
      </div> */}

      <div className="">
        <h2>Have Questions? Get Personalized Admission Support</h2>
        <p>Fill the quick form below. Our admissions counselor will reach out to guide you step-by-step.</p>
        <InquiryForm />
      </div>

      <div className="size-full aspect-square rounded-md overflow-hidden border">
        <iframe className="size-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.101034258179!2d72.892056!3d21.028643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be057ca14ef9443%3A0x392225f85c2145e8!2sNahar%20Ayurvedic%20Pharmacy!5e0!3m2!1sen!2sin!4v1713750915966!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nahar Ayurvedic Pharmacy Shop Map" />
      </div>
    </Section>
  )
}
