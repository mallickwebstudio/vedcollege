import FadeUp from "@/animation/fade-up";
import Section from "@/components/site/section";
import { Card, CardContent } from "@/components/ui/card";

export default function Scope({data}) {
  return (
    <Section>
      <h2 className="text-center">
        <span>{data.h2}</span>
      </h2>

      <div className="mx-auto mt-8 grid gap-6 md:w-1/2">
        {data.lists.map((career, index) => (
          <FadeUp key={index + career.title}>
            <div className="flex gap-4">
              <div className="h-8 aspect-square bg-secondary font-bold flex justify-center items-center rounded-full border shrink-0">
                <span className="block">
                  {index + 1}
                </span>
              </div>

              <Card className="w-full">
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2 text-primary">{career.title}</h3>
                  <p className="text-muted-foreground">{career.description}</p>
                </CardContent>
              </Card>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}
