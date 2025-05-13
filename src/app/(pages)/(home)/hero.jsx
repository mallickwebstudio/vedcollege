import Section from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
    return (
        <Section wrapperClassName="grid md:grid-cols-2 gap-8">
            <div className="my-auto">
                <div className="flex gap-2">
                    <Badge className="font-bold rounded-full">BSW</Badge>
                    <Badge className="font-bold rounded-full">MSW</Badge>
                </div>
                <h1>
                    Empowering Tomorrow’s <span className="highlight py-1 rounded-md">Social Change Leaders</span> Starts Here
                </h1>
                <p className="mt-6 max-w-[60ch] text-lg">
                     Join VED BSW–MSW College and begin a journey of personal and professional transformation.
                </p>
                <div className="mt-12 flex items-center gap-4">
                    <Link className={buttonVariants({ size: "lg" })} href="#inquiry">
                        <Mail className="size-4" />
                        Inquire Now
                    </Link>
                </div>
            </div>

            <div className="bg-secondary rounded-md aspect-square">
            </div>
        </Section>

    )
}
