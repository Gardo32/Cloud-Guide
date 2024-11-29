import { AnimatedCard } from "@/components/animated-card"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, RotateCcw } from 'lucide-react'

export default function SAAC03Guide() {
  return (
    <div className="flex justify-center items-center py-6 md:py-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">AWS Certified Solutions Architect - Associate (SAA-C03) Guide</h1>

        <div className="space-y-8">
          <AnimatedCard title="Special Offer" description="50% off any associate exam">
            <Link href="https://pages.awscloud.com/GLOBAL-ln-GC-Traincert-Associate-Certification-Challenge-Registration-2024.html" className="text-blue-600 hover:underline flex items-center">
              🎟️ Register for the offer <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedCard>

          <AnimatedCard title="Exam Overview" description="Download the official exam guide">
            <Link href="https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf" className="text-blue-600 hover:underline flex items-center">
              📄 Download AWS Certified Solutions Architect Associate Exam Guide (PDF) <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedCard>

          <AnimatedCard title="Video Courses" description="Free and paid options available">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">FreeCodeCamp AWS Solutions Architect Course (Free)</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.youtube.com/embed/c3Cn4xYfxJY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="https://img-c.udemycdn.com/course/750x422/2196488_8fc7_10.jpg" alt="Stephane Maarek" width={100} height={100} className="rounded-full" />
                <Link href="https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/" className="text-blue-600 hover:underline flex items-center">
                  💰 Ultimate AWS Certified Solutions Architect Associate SAA-C03 by Stephane Maarek (Paid) <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="https://td-mainsite-cdn.tutorialsdojo.com/wp-content/themes/avada-child/assets/img/icon_tutorialsdojoMainBlack.png" alt="Tutorials Dojo" width={100} height={100} className="rounded-full" />
                <Link href="https://portal.tutorialsdojo.com/video-course-practice-test/" className="text-blue-600 hover:underline flex items-center">
                  💰 Tutorials Dojo SAA-C03 Video Course + Exam Combo (Paid) <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard title="Studying Finalization" description="AWS SkillBuilder resources">
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/1044/solutions-architect-learning-plan" className="text-blue-600 hover:underline flex items-center">AWS Architecting Essentials (Mandatory) <ArrowDown className="ml-2 h-4 w-4" /></Link></li>
              <li><Link href="https://aws.amazon.com/training/digital/aws-card-clash/" className="text-blue-600 hover:underline flex items-center">AWS Card Clash - Solutions Architect (Optional) <ArrowDown className="ml-2 h-4 w-4" /></Link></li>
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

          <AnimatedCard title="Exam Preparation" description="Practice exams and sample questions">
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="https://portal.tutorialsdojo.com/product-category/free-practice-exams/" className="text-blue-600 hover:underline flex items-center">🆓 Tutorial Dojo Sample Exams <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
              <li><Link href="https://portal.tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-practice-exams/" className="text-blue-600 hover:underline flex items-center">💰 Tutorial Dojo SAA-C03 Practice Exams (Paid, Recommended) <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
              <li><Link href="https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf" className="text-blue-600 hover:underline flex items-center">🆓 AWS Certified Solutions Architect Associate Sample Questions (PDF) <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
              <li><Link href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/14051/aws-certified-solutions-architect-associate-official-practice-question-set" className="text-blue-600 hover:underline flex items-center">🆓 Official Practice Exams <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
              <li><Link href="https://education.ditectrev.com/" className="text-blue-600 hover:underline flex items-center">🆓 ditectrev Practice Exams <RotateCcw className="ml-2 h-4 w-4" /></Link></li>
            </ul>
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
    </div>
  )
}
