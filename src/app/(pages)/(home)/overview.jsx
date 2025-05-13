import Section from "@/components/site/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCheck } from "lucide-react";
import Link from "next/link";

export default function Overview() {
  return (
    <Section>

      <h2 className="text-center mb-8">Course Overview</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-4 bg-green-100 border border-green-600 rounded-md overflow-hidden">
          <h3>BSW <span className="text-base"> - Bachelor of Social Work</span></h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCheck className="size-5 shrink-0 text-green-600"/> Course of 3 Years
              </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="size-5 shrink-0 text-green-600"/> 12th pass
              </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="size-5 shrink-0 text-green-600"/> Civil service-oriented curriculum
              </li>
          </ul>
          <Link className={cn(buttonVariants({ variant: "outline" }), "mt-4 group")} href="/bsw">
            Explore BSW
            <ArrowRight className="size-4 group-hover:ml-2 transition-all" />
          </Link>
        </div>

        <div className="p-4 bg-green-100 border border-green-600 rounded-md overflow-hidden">
          <h3>MSW <span className="text-base"> - Master  of Social Work</span></h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCheck className="size-5 shrink-0 text-green-600"/> Course of 2 Years
              </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="size-5 shrink-0 text-green-600"/> Graduate
              </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="size-5 shrink-0 text-green-600"/> Advanced specialization with fieldwork
              </li>
          </ul>
          <Link className={cn(buttonVariants({ variant: "outline" }), "mt-4 group")} href="/msw">
            Explore MSW
            <ArrowRight className="size-4 group-hover:ml-2 transition-all" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
