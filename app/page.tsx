// app/page.tsx (or Home.tsx depending on your setup)
import { CertificationCard } from "@/components/certification-card";

const guides = [
  {
    title: "AWS Cloud Practitioner",
    description: "Start your AWS journey with the foundational CLF-C02 certification",
    tags: ["Beginner", "CLF-C02", "Cloud"],
    link: "/guides/clf-c02",
    image: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    title: "AWS Solutions Architect Associate",
    description: "Master cloud architecture with SAA-C03 certification",
    tags: ["Associate", "SAA-C03", "Architecture"],
    link: "/guides/saa-c03",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    title: "Azure AI Engineer Associate",
    description: "Become certified in Azure AI with AI-102",
    tags: ["Associate", "AI-102", "Artificial Intelligence"],
    link: "/guides/ai-102",
    image: "https://miro.medium.com/v2/resize:fit:600/0*jqOYRjODRYnsIiEK.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 md:py-12 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-black">
            Cloud Certification Guide
          </h1>
          <p className="max-w-[750px] text-lg text-black sm:text-xl">
            Comprehensive resources for AWS & Azure certifications. Free study guides, practice exams, and badges.
          </p>
        </div>

        {/* Certification Guides */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {guides.map((guide, index) => (
            <CertificationCard
              key={index}
              title={guide.title}
              description={guide.description}
              tags={guide.tags}
              link={guide.link}
              image={guide.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
