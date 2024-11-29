import { AnimatedCard } from "@/components/animated-card"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, RotateCcw } from 'lucide-react'

export default function AI102Guide() {
  return (
    <div className="container py-6 md:py-12 mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Microsoft Certified: Azure AI Engineer Associate (AI-102) Guide</h1>
      
      <div className="space-y-8 w-full max-w-3xl"> {/* Added max width to ensure it doesn't stretch too far on large screens */}
        <AnimatedCard title="Certification Overview" description="Get started with your certification journey">
          <Link href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/?practice-assessment-type=certification#certification-resources" className="text-blue-600 hover:underline flex items-center">
            🚀 Explore Microsoft Certified: Azure AI Engineer Associate <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>

        <AnimatedCard title="Step 1: Complete the Learning Path" description="Begin with the AI-102 Microsoft Learn Course">
          <Image src="https://github.com/user-attachments/assets/d64ce8f0-ba6f-498d-a5cf-44e42531dfaf" alt="AI-102 Course" width={600} height={300} className="mb-4 rounded-lg" />
          <Link href="https://learn.microsoft.com/en-us/training/courses/ai-102t00" className="text-blue-600 hover:underline flex items-center">
            📚 Start AI-102 Microsoft Learn Course <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>

        <AnimatedCard title="Step 2: Practice and Learn" description="Take practice assessments and review your mistakes">
          <Image src="https://github.com/user-attachments/assets/a2277497-c659-4fd0-af94-1c6c2aed2c36" alt="Practice Assessment" width={600} height={300} className="mb-4 rounded-lg" />
          <Image src="https://github.com/user-attachments/assets/288bdd99-b0f2-42a2-aa0e-15551f9c61f9" alt="Azure AI Docs" width={600} height={300} className="mb-4 rounded-lg" />
          <Link href="https://learn.microsoft.com/en-us/azure/?product=ai-machine-learning" className="text-blue-600 hover:underline flex items-center">
            🔍 Explore Azure AI Documentation <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>

        <AnimatedCard title="Step 3: Watch Study Cram Sessions" description="Reinforce your knowledge with the AI-102 Study Cram by John Savill">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/I7fdWafTcPY?si=mx-5xey68T8NLRDS" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </AnimatedCard>

        <AnimatedCard title="Step 4: Practice, Review, Repeat" description="Repeat Step 2 several times until you're comfortable with all practice questions">
          <p className="mb-4">Repeat the practice assessments 3-10 times, focusing on areas where you need improvement.</p>
          <Link href="https://learn.microsoft.com/en-us/azure/?product=ai-machine-learning" className="text-blue-600 hover:underline flex items-center">
            🔄 Review Azure AI Documentation <RotateCcw className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>

        <AnimatedCard title="Final Preparation" description="Familiarize yourself with the Azure AI Docs">
          <p className="mb-4">Focus on the locations of APIs/SDKs as the exam is OPEN BOOK with MS Learn.</p>
          <Link href="https://learn.microsoft.com/en-us/azure/?product=ai-machine-learning" className="text-blue-600 hover:underline flex items-center">
            📚 Final Review of Azure AI Documentation <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>
      </div>
    </div>
  )
}
