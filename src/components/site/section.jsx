import { cn } from "@/lib/utils";

export default function Section({ children, className, id, wrapperClassName }) {
    return (
        <section className={className} id={id}>
            <div className={cn("mx-auto container p-4 py-8 sm:p-8 md:p-12 lg:p-14", wrapperClassName)}>
                {children}
            </div>
        </section>
    )
}
