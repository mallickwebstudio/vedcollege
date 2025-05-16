import {
    Calendar,
    CheckSquare,
    Building,
    GraduationCap,
} from "lucide-react"
import Link from "next/link"

export const database = {
    bsw: {
        hero: {
            title: <> BSW - <br /> Bachelor of Social Work</>,
            description: <>A 3-year degree that prepares you for a purposeful career in social service, civil exams, and community development.</>
        },
        overview: {
            h2: <>What is BSW?</>,
            description: "The BSW program at VED College is designed for students who want to serve society with professionalism. Along with academic knowledge, the curriculum includes hands-on fieldwork, civil services preparation, and real-world exposure.",
            lists: [
                {
                    label: "Duration",
                    description: "3 Years (6 Semesters)",
                    icon: <Calendar className="size-full" />,
                },
                {
                    label: "Eligibility",
                    description: "12th pass (Arts, Commerce, Science)",
                    icon: <CheckSquare className="size-full" />,
                },
                {
                    label: "Admission Through",
                    description: "GCAS Portal",
                    icon: <Building className="size-full" />,
                },
                {
                    label: "Scholarships",
                    description: "100% available for eligible SC/ST students",
                    icon: <GraduationCap className="size-full" />,
                },
            ]
        },
        curriculum: {
            h2: <>Why Choose BSW at VED?</>,
            lists: [
                "Integrated preparation for Class 1/2/3 competitive exams",
                "Expert faculty & guest lectures by government officers",
                "Field training, social service projects, and internships",
                "Free hostel & meal facility for eligible students",
                "Best-in-class academic results with top university ranks",
                "One-on-one guidance & personal development activities",
            ]
        },
        scope: {
            h2: <>What Can You Do After BSW?</>,
            lists: [
                {
                    title: "Social Worker",
                    description: "Work in government & NGOs to implement social welfare programs",
                },
                {
                    title: "Civil Services",
                    description: "Pursue civil services with solid preparation and social understanding",
                },
                {
                    title: "Higher Education",
                    description: "Eligible for MSW & other postgraduate degrees",
                },
                {
                    title: "Program Coordinator",
                    description: "Field Coordinator / Program Executive roles in social organizations",
                },
                {
                    title: "Corporate Roles",
                    description: "Jobs in CSR, Welfare Departments, Rural Development",
                },
            ]
        },
        admission: {
            h2: <>Simple 3-Step Admission</>,
            lists: [
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
            ]
        },
    },




    msw: {
        hero: {
            title: <> MSW - <br /> Master of Social Work</>,
            description: <>A 2-year post-graduate program designed to shape leaders in welfare, development, and social policy.</>
        },
        overview: {
            h2: <>What is MSW?</>,
            description: "The MSW program is ideal for graduates who want to make a lasting impact. With advanced theory, research training, and field practice, this degree is a gateway to leadership in NGOs, government, CSR, and academia.",
            lists: [
                {
                    label: "Duration",
                    description: "2 Years (4 Semesters)",
                    icon: <Calendar />,
                },
                {
                    label: "Eligibility",
                    description: "Graduation in any discipline",
                    icon: <CheckSquare />,
                },
                {
                    label: "Admission Through",
                    description: "GCAS Portal",
                    icon: <Building />,
                },
                {
                    label: "Scholarships",
                    description: "100% available for eligible SC/ST students",
                    icon: <GraduationCap />,
                },
            ]
        },
        curriculum: {
            h2: <>Why Choose MSW at VED?</>,
            lists: [
                "Special focus on Class 1/2/3 exam readiness",
                "Field research, real case studies, and community service",
                "Regular unit tests, seminars & workshops",
                "High-ranking results in MSW university exams",
                "Placement support in reputed social orgs",
                "Advanced study material provided by faculty",
            ]
        },
        scope: {
            h2: <>What Can You Do After MSW?</>,
            lists: [
                {
                    title: "Government Officer",
                    description: "Welfare Dept., Tribal Affairs, etc.",
                },
                {
                    title: "NGO",
                    description: "Program Head / Project Coordinator",
                },
                {
                    title: "HR",
                    description: "Roles in corporate CSR",
                },
                {
                    title: "Social Policy",
                    description: "Consultant",
                },
                {
                    title: "UGC NET / PhD in Social Work",
                    description: "In Social Work",
                },
            ]
        },
        admission: {
            h2: <>Simple 3-Step Admission</>,
            lists: [
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
            ]
        },
    }
}