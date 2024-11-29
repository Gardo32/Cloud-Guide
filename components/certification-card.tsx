import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export function CertificationCard({
  title,
  description,
  tags,
  link,
  image,
}: CertificationCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      {image && (
        <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
          <Image
            src={image}
            alt={title}
            layout="fill" // Make the image fill the container
            objectFit="contain" // Maintain aspect ratio and avoid stretching
            className="rounded-t-lg" // Optional: rounded corners for the top of the image
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-black">{title}</CardTitle>
        <CardDescription className="text-black">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-black">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild className="w-full text-black">
          <Link href={link}>
            View Guide <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
