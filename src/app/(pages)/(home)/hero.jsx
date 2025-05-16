import AdmissionCountdown from "@/components/site/admission-countdown";
import EnquiryForm from "@/components/site/enquiry-form";
import Section from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <Section className="relative" wrapperClassName="grid md:grid-cols-2 gap-8" id="hero-header">
            <div className="absolute inset-0">
                <Image
                    className="h-full object-cover w-1/2 overflow-hidden"
                    src="/images/common/15.jpg"
                    width={900}
                    height={1600}
                    alt="hero image"
                    priority
                />
            </div>
            <div className="sticky top-4 h-fit z-0">
                <div className="flex gap-2">
                    <Badge className="font-bold rounded-full">BSW</Badge>
                    <Badge className="font-bold rounded-full">MSW</Badge>
                </div>
                <h1 className="backdrop-blur-lg rounded-sm">
                    Empowering Tomorrow’s <span className="highlight py-1 rounded-md">Social Change Leaders</span> Starts Here
                </h1>
                <p className="mt-6 max-w-[60ch] text-lg backdrop-blur-lg rounded-sm">
                    Join VED BSW–MSW College and begin a journey of personal and professional transformation.
                </p>
                <AdmissionCountdown className="mt-8 border" />
            </div>

            <div className="p-4 bg-secondary rounded-md aspect-square z-10">
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
