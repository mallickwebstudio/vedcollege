import { Calendar, GraduationCap, Building, Phone, CheckSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Section from "@/components/site/section"
import ZoomIn from "@/animation/zoom-in"
import FadeUp from "@/animation/fade-up"

export default function Overview({ data }) {
  return (
    <Section>
      <div className="mx-auto md:w-2/3 md:text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-2">
          {data.h2}
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {data.lists.map(item => (
          <FadeUp key={item.label}>
            <Card className="relative overflow-hidden">
              <CardContent className="p-4">
                <div className="space-y-1 relative z-10">
                  <h3 className="font-semibold text-lg">{item.label}</h3>
                  <p className="text-muted-foreground backdrop-blur-lg rounded-sm w-fit">{item.description}</p>
                </div>
                <div className="absolute -top-10 -right-10 md:-top-5 md:-right-20 h-40 md:h-60 aspect-square flex justify-center items-center p-2 bg-primary text-primary-foreground rounded-full z-0">
                  <ZoomIn className="size-10 shrink-0">
                    {item.icon}
                  </ZoomIn>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        ))}

      </div>
    </Section>
  )
}
