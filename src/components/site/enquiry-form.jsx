"use client"

import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import { useState } from "react"
import { LoaderIcon, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().optional(),
    phone: z.string(),
    city: z.string().min(1),
    course: z.string(),
    message: z.string().optional()
});

export default function EnquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const form = useForm({
        resolver: zodResolver(formSchema),
    })


    function onSubmit(values) {
        setIsSubmitting(true)
        try {
            const formData = new FormData();
            formData.append("entry.1997591346", values.name);
            formData.append("entry.1499984417", values.email || "");
            formData.append("entry.1515886819", values.phone);
            formData.append("entry.2131401185", values.city);
            formData.append("entry.31005583", values.course);
            formData.append("entry.1018202584", values.message || "");

            fetch("https://docs.google.com/forms/d/e/1FAIpQLSdQlkXL0xc3ByDSu2vmW8sXD9IAxnjhEirdAol2nlPDBzm3ow/formResponse", {
                method: "POST",
                mode: "no-cors",
                body: formData,
            })
                .then((res) => {
                    console.log("Res~", res)
                    toast.success("Form submitted successfully!");
                    setIsSubmitted(true)
                })
                .catch((error) => {
                    console.error("Form submission error", error);
                    toast.error("Failed to submit the form. Please try again.");
                })
                .finally(() => {
                    setIsSubmitting(false)
                })
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
            setIsSubmitting(false)
        }
    }


    return (
        <div className="">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">


                    <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"

                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="mailid@mail.com"

                                            type="email"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone No.</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="+91 00000 00000"

                                            type="number"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="City Name"

                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Course</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a course" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="BSW">BSW</SelectItem>
                                        <SelectItem value="MSW">MSW</SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Leave a message..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="relative"
                    >
                        <LoaderIcon className={cn("animate-spin", isSubmitting ? "block" : "hidden")} />
                        {isSubmitting ? "Submitting..." : isSubmitted ? "Submitted" : "Submit"}
                    </Button>
                </form>
            </Form>
            <div className="p-2 border rounded-md">
                <div className="text-sm capitalize tracking-wider font-bold text-primary">CALL SUPPORT</div>
                <div className="mt-2 flex items-center gap-4 flex-wrap">
                    <Link className={buttonVariants({ variant: "secondary" })} href="tel:8238204003">
                        <Phone className="size-4" />
                        8238204003
                    </Link>
                    <Link className={buttonVariants({ variant: "secondary" })} href="tel:8511735333">
                        <Phone className="size-4" />
                        8511735333
                    </Link>
                </div>
            </div>
        </div>
    )
}