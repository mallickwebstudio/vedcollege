import FadeUp from "@/animation/fade-up";
import Section from "@/components/site/section";
import { Card, CardContent } from "@/components/ui/card";

export default function Admission({data}) {
  return (
    <Section>
      <h2 className="text-center">{data.h2}</h2>


      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.lists.map((step, index) => (
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
