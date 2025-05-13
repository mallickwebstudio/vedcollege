import Section from "@/components/site/section";
import { buttonVariants } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function hero() {
  return (
    <Section className="relative bg-foreground/90 text-background/90" wrapperClassName="grid md:grid-cols-2 gap-8">
      <div className="md:hidden absolute top-0 right-0 h-full aspect-square z-0 overflow-hidden">
        <Image
          className="rounded-md  object-cover"
          src="/images/common/11.png"
          width={400}
          height={400}
          alt="image"
          priority
        />
      </div>

      <div className="relative">
        <h1>
          BSW - <br />
          Bachelor of Social Work
        </h1>
        <p>
          A 3-year degree that prepares you for a purposeful career in social service, civil exams, and community development.
        </p>
        <div className="mt-12 flex items-center gap-4">
          <Link className={buttonVariants({ size: "lg" })} href="#enquiry">
            <Mail className="size-4" />
            Inquire Now
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="#enquiry">
            <Download className="size-4" />
            Download Syllabus
          </Link>
        </div>
      </div>

      <div className="hidden md:block relative -my-4 sm:-my-8 md:-my-12 lg:-my-14">
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <Image
            className="h-fit rounded-md object-cover"
            src="/images/common/11.png"
            width={400}
            height={400}
            alt="image"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
