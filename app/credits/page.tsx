import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const contributors = [
  {
    name: "Mohammed Aldaqaq",
    description: "Built the website. | Nv22084",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE_ZjXdHjyG3g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696175647330?e=1738195200&v=beta&t=m57q94rQNmVzbH6WPDM6agADfG1sA9i7e7Qj5gAdjg4", // Replace with the actual image path
    link: "https://www.linkedin.com/in/mohammed-aldaqaq-5b6a7528b",
  },
  {
    name: "Mohammed Azan",
    description: "Provided Materials for CLF-C02 | Nv22093",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHIpKxv1IVxkQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729166535868?e=1733500800&v=beta&t=vt1Dz01lfqNqfki3o2hyYY1jC3ZpEFBBWALnB_mlEFM", // Replace with the actual image path
    link: "https://www.linkedin.com/in/mohammed-adel-ahmed-azan-0404302a8/",
  },
  {
    name: "Jane Smith",
    description: "Provided Materials for CLF-C02 | Nv23132",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFnzCeEgLkzHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702537738878?e=1738195200&v=beta&t=idqSzM__trdKQq3bibeukd_737QszEH82WxG00k7Md4", // Replace with the actual image path
    link: "https://www.linkedin.com/in/elyas-rahimi-0601881bb/",
  },
  {
    name: "Salman Ali",
    description: "Provided Materials for SAA-C03 | Nv22064",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGzx2d2CxywtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693554521311?e=1738195200&v=beta&t=ZDNJFbDUOiD4XjBDbnynjGE-9g1wtRw7M-ShjRqZnmM", // Replace with the actual image path
    link: "https://www.linkedin.com/in/salman-abdulrazaq/",
  },
];

export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6">
      <main className="container max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Credits</h1>
        <p className="text-center text-black mb-6">
          This website is made possible thanks to the contributions of the
          following individuals:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {contributors.map((contributor, index) => (
            <Card key={index} className="flex flex-col overflow-hidden mx-auto">
              {contributor.image && (
                <div className="relative w-full aspect-square">
                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center text-black">{contributor.name}</CardTitle>
                <CardDescription className="text-center text-black">
                  {contributor.description}
                </CardDescription>
              </CardHeader>
              {contributor.link && (
                <CardContent>
                  <Link
                    href={contributor.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline font-medium block text-center"
                  >
                    View Profile
                  </Link>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
