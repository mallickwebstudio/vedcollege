import Section from "@/components/site/section";

export default function About() {
    return (
        <Section className="relative bg-secondary" wrapperClassName="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-md aspect-square">
            </div>

            <div className="sticky top-0 h-fit">
                <h2>Your One-Stop Solution for a Career in Social Work</h2>
                <p className="mt-4">Whether you're a recent 12th pass student or a graduate seeking to specialize — VED BSW–MSW College offers structured, value-based education aligned with NEP-2020 and designed to build careers in social service, government, and community leadership.</p>
                <p className="mt-4 italic"> 📚 A College Where 360° Growth Happens – Academically, Personally & Professionally.</p>
            </div>
        </Section>
    )
}
