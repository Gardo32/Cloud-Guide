import { AnimatedCard } from "@/components/animated-card";
import Image from "next/image";
import Link from "next/link";

const badgeSections = [
  {
    title: "AWS Partner Central Badges",
    description: "Free badges available through AWS Partner Central",
    image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F63zwtdjfh34g2vgb355k.jpg",
    link: "https://partnercentral.awspartner.com/"
  },
  {
    title: "AWS Academy Badges",
    description: "Badges available through AWS Academy",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--jAaelPNG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n26wd51qdw9pubq24lhy.jpg",
    link: "https://awsacademy.instructure.com/"
  },
  {
    title: "AWS SkillBuilder Badges",
    description: "Free badges available through AWS SkillBuilder",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--vU3EvCho--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dkkwf7a40rojw0q5udzn.jpg",
    link: "https://explore.skillbuilder.aws"
  },
  {
    title: "AWS Builders Quest Badges",
    description: "Free badges available through AWS Builders Quest",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--PsRDETPb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v0fymyym0j5wybxj05wp.jpg",
    link: "https://aws.amazon.com/events/sfid-2024/"
  },
  {
    title: "AWS Educate Badges",
    description: "Free badges available through AWS Educate",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--ifWmZ1DF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ty805dxfo6dcze4gpi77.jpg",
    link: "https://www.awseducate.com/student/s/content"
  }
];

export default function BadgesPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center text-black">
      <main className="container py-6 md:py-12 text-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Free Certification Badges</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {badgeSections.map((section, index) => (
            <AnimatedCard key={index} title={section.title} description={section.description}>
              <Image src={section.image} alt={section.title} width={300} height={200} className="mb-4 rounded-lg mx-auto" />
              <Link href={section.link} className="text-blue-600 hover:underline text-black">
                Learn More
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </main>
    </div>
  );
}
