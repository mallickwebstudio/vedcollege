'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { Mail } from 'lucide-react'

export default function OverscreenEnquiryButton() {
    const [isAnyVisible, setIsAnyVisible] = useState(false)

    useEffect(() => {
        const enquiryElement = document.getElementById('enquiry')
        const heroSection = document.getElementById('hero-header')

        if (!enquiryElement && !heroSection) {
            setIsAnyVisible(false)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const isVisible = entries.some(entry => entry.isIntersecting)
                setIsAnyVisible(isVisible)
            },
            { threshold: 0.1 }
        )

        if (enquiryElement) observer.observe(enquiryElement)
        if (heroSection) observer.observe(heroSection)

        return () => {
            if (enquiryElement) observer.unobserve(enquiryElement)
            if (heroSection) observer.unobserve(heroSection)
        }
    }, [])

    return (
        <Link
            className={cn(
                buttonVariants(),
                'fixed right-4 bottom-4 z-50 animate-bounce',
                isAnyVisible ? 'hidden' : 'flex'
            )}
            href="#enquiry"
        >
            <Mail className="size-4" />
            Enquire Now
        </Link>
    )
}
