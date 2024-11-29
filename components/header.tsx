'use client'

import Link from "next/link"
import { Award, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

export function Header() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const offers = [
    {
      description: "50% off AWS Associate Exams",
      link: "https://pages.awscloud.com/GLOBAL-ln-GC-Traincert-Associate-Certification-Challenge-Registration-2024.html"
    },
    {
      description: "Free GitHub Foundation Exams for all GitHub Education Students",
      link: "https://education.github.com/experiences/foundations_certificate"
    },
    {
      description: "Free Retake on AWS Foundation Exams with code `AWSRETAKE25`",
      link: "https://pages.awscloud.com/GLOBAL-ln-GC-Traincert-Associate-Certification-Challenge-Registration-2024.html"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 text-black">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Award className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Certification Hub
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/badges"
              className="transition-colors hover:text-black/80 text-black/60"
            >
              AWS Badges
            </Link>
          </nav>
        </div>

        {/* Offer Slider Section */}
        <div className="flex items-center justify-center bg-transparent text-sm font-medium text-black ml-4 px-4">
          <div className="flex items-center space-x-4">
            <p className="text-center">{offers[currentSlide].description}</p>
            <Link
              href={offers[currentSlide].link}
              className="ml-2 text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">

              <DropdownMenuItem asChild>
                <Link href="/badges">Badges</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
