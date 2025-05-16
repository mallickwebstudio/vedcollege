"use client"

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlignRight, Mail, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const path = usePathname();
    console.log(path)

    return (
        <header className="py-2 md:py-0 bg-background md:h-16 border-b">
            <nav className="h-full mx-auto container px-4 md:px-8 lg:px-12">
                <div className="h-full flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="w-full flex items-center justify-between">
                        <Link className="relative flex items-center" href="/">
                            <Image
                                className="size-14"
                                src="/images/logo/logo.png"
                                width={100}
                                height={100}
                                alt="Ved College Logo"
                            />
                            <span className="md:ml-2 font-bold md:text-lg font-serif">VED COLLEGE</span>
                        </Link>

                        <button
                            className="size-8 md:hidden flex-center justify-self-end cursor-pointer"
                            aria-expanded={isNavbarOpen}
                            aria-controls="main-navigation"
                            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        >
                            {isNavbarOpen ? <X /> : <AlignRight />}
                        </button>
                    </div>

                    <div className={cn(isNavbarOpen ? "flex" : "hidden md:flex", "items-center gap-3")}>
                        <Link className={buttonVariants({ variant: path.includes("bsw") ? "secondary" : "ghost" })} href="/course/bsw" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                            BSW
                        </Link>
                        <Link className={buttonVariants({ variant: path.includes("msw") ? "secondary" : "ghost" })} href="/course/msw" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                            MSW
                        </Link>
                        <Link className={buttonVariants()} href="#enquiry">
                            <Mail className="size-4" />
                            Enquire
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};