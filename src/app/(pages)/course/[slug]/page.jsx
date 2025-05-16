import { notFound } from "next/navigation"
import Hero from "./hero"
import { database } from "@/lib/database"
import Overview from "./overview"
import Curriculum from "./curriculum"
import Scope from "./scope"
import Admission from "./admission"

export default function Page({ params }) {
    const slug = params.slug.toLowerCase()

    const course = database[slug]
    if (!course) return notFound()

    return (
        <main>
            <Hero data={course.hero} />
            <Overview data={course.overview} />
            <Curriculum data={course.curriculum} />
            <Scope data={course.scope} />
            <Admission data={course.admission} />
        </main>
    )
}
