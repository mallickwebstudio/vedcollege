
<footer>Footer</footer>
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    {
        title: "BSW",
        href: "/course/bsw",
    },
    {
        title: "MSW",
        href: "/course/msw",
    },
];

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto container p-4 py-8 sm:px-8 md:px-12 lg:px-14">
                <div className="pb-4 flex justify-center items-center">
                    <div>
                        {/* Logo */}
                        <Link className="relative flex flex-col items-center" href="/">
                            <Image
                                className="size-20"
                                src="/images/logo/logo.png"
                                width={100}
                                height={100}
                                alt="Ved College Logo"
                            />
                            <span className="md:ml-2 font-bold font-serif">VED COLLEGE</span>
                        </Link>

                        <ul className="mt-6 flex items-center justify-center gap-4 flex-wrap">
                            {footerLinks.map(({ title, href }) => (
                                <li key={title}>
                                    <Link
                                        href={href}
                                        className="text-primary/80 hover:text-primary hover:underline"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* <Separator /> */}


                <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0 border-t">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link className="hover:underline hover:text-foreground" href="/vedcollege.in" target="_blank">
                            vedcollege.in
                        </Link>
                        . All rights reserved.
                    </span>

                    <div className="flex items-center gap-5 text-muted-foreground">
                        <Link href="https://www.instagram.com/ved_msw_bsw_college/" target="_blank">
                            <InstagramIcon className="size-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};