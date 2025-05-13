import FadeUp from "@/animation/fade-up";
import Section from "@/components/site/section";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Admission() {
  return (
    <Section>
      <h2 className="text-center">Simple 3-Step Admission</h2>


      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            step: "Step 1",
            title: "Register on the GCAS Portal",
            description: <span>Visit <Link className="text-primary/80 hover:text-primary hover:underline" href="https://gcasstudent.gujgov.edu.in" target="_blank">https://gcasstudent.gujgov.edu.in</Link> to start your application"</span>
          },
          {
            step: "Step 2",
            title: "Visit our college",
            description: "Come to our campus (Mon–Sat, 9 AM – 2 PM) for guidance",
          },
          {
            step: "Step 3",
            title: "Complete documentation",
            description: "Let our team assist you with documentation & registration",
          },
        ].map((step, index) => (
          <FadeUp delay={index * 0.2} key={index + step.title}>
            <Card className="relative">
              <CardContent>
                <div className="text-sm font-bold text-primary">{step.step}</div>
                <h3 className="my-2 font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          </FadeUp>
        ))}
      </div>

    </Section>
  )
}
