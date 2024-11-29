import { AnimatedCard } from "@/components/animated-card"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, RotateCcw } from 'lucide-react'

export default function CLFC02Guide() {
  return (
    <div className="container py-6 md:py-12 mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">AWS Certified Cloud Practitioner (CLF-C02) Guide</h1>
      <div className="space-y-8">
        <AnimatedCard title="Exam Overview" description="Download the official exam guide">
          <Link href="https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf" className="text-blue-600 hover:underline flex items-center">
            📄 Download AWS Certified Cloud Practitioner Exam Guide (PDF) <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>

        <AnimatedCard title="Video Courses" description="Free and paid options available">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">FreeCodeCamp Cloud Practitioner Course (Free)</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/NhDYbskXRgc" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="https://img-c.udemycdn.com/course/750x422/3142166_a637_3.jpg" alt="Stephane Maarek" width={100} height={100} className="rounded-full" />
              <Link href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/?kw=clf&src=sac" className="text-blue-600 hover:underline flex items-center">
                💰 NEW Ultimate AWS Certified Cloud Practitioner CLF-C02 by Stephane Maarek (Udemy) <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="https://td-mainsite-cdn.tutorialsdojo.com/wp-content/themes/avada-child/assets/img/icon_tutorialsdojoMainBlack.png" alt="Tutorials Dojo" width={100} height={100} className="rounded-full" />
              <Link href="https://portal.tutorialsdojo.com/courses/aws-certified-cloud-practitioner-clf-c02-video-course/" className="text-blue-600 hover:underline flex items-center">
                💰 AWS Certified Cloud Practitioner CLF-C02 Video Course (Tutorials Dojo) <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard title="Reading Resources" description="Essential study materials">
        <ul className="list-disc pl-6 space-y-2">
            <li><Link href="https://nasservocational-my.sharepoint.com/:b:/g/personal/nv22084_nvtc_edu_bh/EfSDlrj4emtEoDnDwWfJbY0BmcDGHsz44zqsQiQl5OS9mg?e=gJlzTs" className="text-blue-600 hover:underline flex items-center">📚 Stephane's Course Slides (Optional) <ArrowDown className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://nasservocational-my.sharepoint.com/:b:/g/personal/nv22084_nvtc_edu_bh/ETQhZNySjYxFrTrvOu2IEfoBtARZVz1kb61g98Bz9F1vKw?e=z784xA" className="text-blue-600 hover:underline flex items-center">🃏 WhizCards (Mandatory) <ArrowDown className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://nasservocational-my.sharepoint.com/:b:/g/personal/nv22084_nvtc_edu_bh/EaIpAju_Q2hMt9fzAQyqztMBiV8XiBhRwGp-FUT5tVT97A?e=Xrjbrg" className="text-blue-600 hover:underline flex items-center">📖 Tutorials Dojo Study Guide (Mandatory for Review) <ArrowDown className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://nasservocational-my.sharepoint.com/:b:/g/personal/nv22084_nvtc_edu_bh/Ef9Wmdy0Vh5JlPMhK93pTZQBJ1QfnZ73e9w43Pfs_YVepA?e=kN7P3X" className="text-blue-600 hover:underline flex items-center">📝 AWS Practitioner Notes (Recommended) <ArrowDown className="ml-2 h-4 w-4" /></Link></li>
          </ul>
        </AnimatedCard>

        <AnimatedCard title="Practice and Review" description="Iterate through practice exams and review materials">
          <p className="mb-4">Continuously practice with the following resources and review your weak areas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="https://portal.tutorialsdojo.com/product-category/free-practice-exams/" className="text-blue-600 hover:underline flex items-center">🆓 Tutorial Dojo Sample Exams <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://portal.tutorialsdojo.com/courses/aws-certified-cloud-practitioner-practice-exams/" className="text-blue-600 hover:underline flex items-center">💰 Tutorial Dojo 19-Exam Pack (Recommended) <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://www.w3schools.com/aws/aws_quiz.php" className="text-blue-600 hover:underline flex items-center">🆓 W3Schools Practice Exam <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Sample-Questions.pdf" className="text-blue-600 hover:underline flex items-center">🆓 AWS Sample Questions (PDF) <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://forms.gle/XJkVnV5AfrDi4cVn9" className="text-blue-600 hover:underline flex items-center">🆓 Mock Exam by Elyas <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set-clf-c02-english" className="text-blue-600 hover:underline flex items-center">🆓 Official Practice Exams <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            <li><Link href="https://education.ditectrev.com/" className="text-blue-600 hover:underline flex items-center">🆓 ditectrev Practice Exams <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
          </ul>
        </AnimatedCard>
        
        {/* NotebookLM Section */}
          <AnimatedCard title="NotebookLM for AWS Exam Preparation" description="Boost your study with NotebookLM from Google">
          <p>NotebookLM is a powerful tool that helps you organize your study materials, notes, and exam-related content in one place. It's especially useful for exam preparation as it allows you to create, edit, and analyze your study materials with an AI-driven approach to learning. Here's how to make the most of NotebookLM:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Upload Your <Link className="text-blue-600" href='https://nasservocational-my.sharepoint.com/:f:/g/personal/nv22084_nvtc_edu_bh/Eko3HjU0c7VCnrV0jyiIpOgBJ8UJtWtNm-oyhhr5fWAqhg?e=jLPwgp'> Study Materials:</Link></strong> Upload your notes, PDFs, and other documents related to the AWS SAA-C03 exam.</li>
              <li><strong>Organize Your Notes:</strong> Categorize and tag different study topics for easier access and reference during your preparation.</li>
              <li><strong>AI Assistance:</strong> Use the AI-driven insights to improve your understanding of complex topics and get personalized recommendations based on your study patterns.</li>
              <li><strong>AI Podcasts:</strong>Create tailored podcast using NotebookLM's AI to understand diffcult topic in a more fun way</li>
            </ul>
            <p className="mt-4">To start using NotebookLM, click the link below to upload your files:</p>
            <Link href="https://notebooklm.google.com" className="text-blue-600 hover:underline flex items-center mt-4">
              📝 Upload your study materials to NotebookLM <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedCard>

        <AnimatedCard title="Final Preparation" description="Last steps before the exam">
          <p className="mb-4">Before taking the exam:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Review your notes and weak areas</li>
            <li>Take a final practice exam</li>
            <li>Get a good night's sleep</li>
            <li>Prepare your exam environment</li>
          </ul>
          <Link href="https://aws.amazon.com/certification/certification-prep/" className="text-blue-600 hover:underline flex items-center mt-4">
            🚀 AWS Certification Prep Overview <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedCard>
      </div>
    </div>
  )
}
