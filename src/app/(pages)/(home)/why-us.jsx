import FadeUp from "@/animation/fade-up";
import ZoomIn from "@/animation/zoom-in";
import Section from "@/components/site/section";
import {
  ShieldCheck,
  GraduationCap,
  BedDouble,
  UtensilsCrossed,
  BookOpenCheck,
  FlaskConical,
  Landmark,
  Presentation,
  Handshake,
  UserCheck,
  LibraryBig,
  ClipboardList,
  Landmark as LandmarkAlt,
  CircleDollarSign,
  BookCheck,
  BusFront,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Safe, secure, family-like",
    description: " campus environment",
    icon: ShieldCheck,
  },
  {
    title: "100% scholarship",
    description: " for SC/ST students (Free-ship card holders)",
    icon: GraduationCap,
  },
  {
    title: "Government hostel",
    description: " facilities with free meals",
    icon: BedDouble,
  },
  {
    title: "NEP-2020",
    description: " aligned education system",
    icon: BookOpenCheck,
  },
  {
    title: "Holistic student development",
    description: " through fieldwork, presentations, debates & research",
    icon: FlaskConical,
  },
  {
    title: "Top academic results",
    description: " with most university Top-10 rankers",
    icon: ClipboardList,
  },
  {
    title: "Regular tests & personalized",
    description: " academic guidance",
    icon: BookCheck,
  },
  {
    title: "Study material",
    description: " provided at admission",
    icon: LibraryBig,
  },
  {
    title: "Placement assistance",
    description: " in social work field",
    icon: Handshake,
  },
  {
    title: "Installment option",
    description: " for General category students",
    icon: CircleDollarSign,
  },
  {
    title: "Qualified and experienced faculty",
    description: "",
    icon: UserCheck,
  },
  {
    title: "Reference library",
    description: " for academic support",
    icon: LibraryBig,
  },
  {
    title: "Competitive exam guidance",
    description: "",
    icon: LandmarkAlt,
  },
  {
    title: "Seminars, camps, study tours",
    description: " and skill-based activities",
    icon: Presentation,
  },
  {
    title: "ST bus & railway pass",
    description: " facility available",
    icon: BusFront,
  },
  {
    title: "Value-based education",
    description: " rooted in service & patriotism",
    icon: Users,
  },
];


export default function WhyUs() {
  return (
    <Section className="bg-primary/15">
      <h2 className="text-primary- text-center">VED College Offers</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map(({ title, description, icon: Icon }, index) => (
          <FadeUp
            delay={index * 0.1}
            key={index}
            className="bg-white w-full rounded-md overflow-hidden flex items-center"
          >
            <ZoomIn className="size-28 lg:size-40 bg-gradient-to-br from-amber-400 to-amber-600 shrink-0 flex justify-center items-center">
              <Icon className="text-white size-12" />
            </ZoomIn>
            <div className="my-auto p-4 sm:text-lg">
              <b className="highlight rounded-sm">{title}</b>
              {description}
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}
