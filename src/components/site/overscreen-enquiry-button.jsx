import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { Mail } from 'lucide-react'

export default function OverscreenEnquiryButton() {
    return (
        <Link className={cn(buttonVariants(), "fixed right-4 bottom-4 z-50 animate-bounce")} href="#enquiry">
            <Mail className="size-4" />
            Inquire Now
        </Link>
    )
}
