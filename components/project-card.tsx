"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/projects/${slug}`}>
        <Card className="overflow-hidden h-full flex flex-col">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="flex-1 p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {description}
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
