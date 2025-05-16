import FadeUp from "@/animation/fade-up";
import Section from "@/components/site/section";
import { CheckCheckIcon } from "lucide-react";
import Image from "next/image";

export default function Curriculum({data}) {
  return (
    <Section className="bg-secondary">
      <h2 className="text-center">{data.h2}</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {data.lists.map((item, index) => (
            <FadeUp delay={index * 0.1} key={index + item}>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCheckIcon className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p>{item}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            className="w-full rounded-md object-cover"
            src="/images/common/4.jpg"
            width={200}
            height={200}
            alt="image"
          />
          <Image
            className="w-full rounded-md object-cover"
            src="/images/common/2.jpg"
            width={200}
            height={200}
            alt="image"
          />
          <Image
            className="w-full rounded-md object-cover"
            src="/images/common/3.jpg"
            width={200}
            height={200}
            alt="image"
          />
          <Image
            className="w-full rounded-md object-cover"
            src="/images/common/4.jpg"
            width={200}
            height={200}
            alt="image"
          />
        </div>
      </div>
    </Section>
  )
}
