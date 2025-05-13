import { Calendar, GraduationCap, Building, Phone, CheckSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Section from "@/components/site/section"
import ZoomIn from "@/animation/zoom-in"
import FadeUp from "@/animation/fade-up"

export default function Overview() {
  return (
    <Section>
      <div className="mx-auto md:w-2/3 md:text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-2">
          <span>What is BSW?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          The BSW program at VED College is designed for students who want to serve society with professionalism.
          Along with academic knowledge, the curriculum includes hands-on fieldwork, civil services preparation, and
          real-world exposure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <FadeUp>
          <Card className="relative overflow-hidden">
            <CardContent className="p-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Duration</h3>
                <p className="text-gray-600">3 Years (6 Semesters)</p>
              </div>
              <div className="absolute -top-5 -right-20 h-60 aspect-square flex justify-center items-center p-2 bg-primary text-primary-foreground rounded-full">
                <ZoomIn>
                  <Calendar className="size-10 shrnk-0" />
                </ZoomIn>
              </div>
            </CardContent>
          </Card>
        </FadeUp>

        <FadeUp>
          <Card className="relative overflow-hidden">
            <CardContent className="p-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Eligibility</h3>
                <p className="text-gray-600">12th pass (Arts, Commerce, Science)</p>
              </div>
              <div className="absolute -top-5 -right-20 h-60 aspect-square flex justify-center items-center p-2 bg-primary text-primary-foreground rounded-full">
                <ZoomIn>
                  <CheckSquare className="size-10 shrink-0" />
                </ZoomIn>
              </div>
            </CardContent>
          </Card>
        </FadeUp>

        <FadeUp>
          <Card className="relative overflow-hidden">
            <CardContent className="p-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Admission Through</h3>
                <p className="text-gray-600">GCAS Portal</p>
              </div>
              <div className="absolute -top-5 -right-20 h-60 aspect-square flex justify-center items-center p-2 bg-primary text-primary-foreground rounded-full">
                <ZoomIn>
                  <Building className="size-10 shrnk-0" />
                </ZoomIn>
              </div>
            </CardContent>
          </Card>
        </FadeUp>

        <FadeUp>
          <Card className="relative overflow-hidden">
            <CardContent className="p-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Scholarships</h3>
                <p className="text-gray-600">100% available for eligible SC/ST students</p>
              </div>
              <div className="absolute -top-5 -right-20 h-60 aspect-square flex justify-center items-center p-2 bg-primary text-primary-foreground rounded-full">
                <ZoomIn>
                  <GraduationCap className="size-10 shrink-0" />
                </ZoomIn>
              </div>
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </Section>
  )
}
