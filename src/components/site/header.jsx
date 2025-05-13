import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar02Page = () => {
    return (
        <header className="py-2 md:py-0 bg-background md:h-16 border-b">
            <nav className="h-full mx-auto container px-4 md:px-8 lg:px-12">
                <div className="h-full flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <Link className="relative block gap-8" href="/">
                            <Image
                                className="size-14"
                                src="/images/logo/logo.png"
                                width={100}
                                height={100}
                                alt="Ved College Logo"
                            />
                        </Link>
                        <span className="md:ml-2 font-bold md:text-lg font-serif">VED COLLEGE</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link className={buttonVariants({ variant: "ghost" })} href="/bsw">
                            BSW
                        </Link>
                        <Link className={buttonVariants({ variant: "ghost" })} href="/msw">
                            MSW
                        </Link>
                        <Link className={buttonVariants()} href="#inquiry">
                            <Mail className="size-4" />
                            Inquire
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar02Page;
