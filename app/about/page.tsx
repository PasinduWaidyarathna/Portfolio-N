"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {`About`} <span className="text-blue-600">Me</span>
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Get to know more about my journey, skills, and passion for
                    creating exceptional digital experiences.
                  </motion.p>
                </div>
              </div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/me.jpg"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  My Story
                </h2>
                <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                  My journey in tech began with a deep interest in electronics and programming, 
                  which naturally led me to the world of DevOps and Cloud Engineering. I enjoy
                   solving complex problems and building efficient, scalable systems that 
                   power real world applications.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                  {`As I continue my degree in Electronics and Computer Science at the
                   University of Kelaniya, I’m gaining hands on experience with tools 
                   like Linux, AWS, Docker, Terraform, and GitHub Actions focusing on 
                   automation, infrastructure as code, and cloud deployments.`}
                </p>
                <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                  {`I’m driven by curiosity, continuous learning, and the desire to 
                  make systems run smoother and smarter.`}
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  {`Education & Experience`}
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Junior Tech Lead - IT
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2023 - 2025
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Developed an E-Waste Inventory and Management System 
                      for the university and tech club, focusing on 
                      efficient tracking and reporting of electronic waste.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Bachelor of Science Honours in Electronics and Computer Science
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2022 - Present
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      University of Kelaniya, specializing in DevOps tools, 
                      cloud technologies, and modern system design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  My Skills
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the technologies and tools I work with on a
                  regular basis.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
              {[
                { name: "Java", url: "/logos/java.png"},
                { name: "SpringBoot", url: "/logos/spring.png"},
                { name: "React", url: "/logos/react.png" },
                { name: "TypeScript", url: "/logos/ts.png" },
                { name: "Next.js", url: "/logos/nextjs.png" },
                { name: "Tailwind CSS", url: "/logos/tailwind.png" },
                { name: "MySQL", url: "/logos/mysql.png" },
                { name: "Firebase", url: "/logos/firebase.png" },
                { name: "Git", url: "/logos/git.png" },
                { name: "GitHub", url: "/logos/github.png" },
                { name: "AWS", url: "/logos/aws.png" },
                { name: "Docker", url: "/logos/docker.png" },
                { name: "Kubenetes", url: "/logos/k8.png" },
                { name: "Terrafrom", url: "/logos/terraform.png"},
                { name: "Jenkins", url: "/logos/jenkins.png"},
                { name: "Nginx", url: "/logos/nginx.png"},
              
                // "TypeScript",
                // "React",
                // "Next.js",
                // "Node.js",
                // "Express",
                // "MongoDB",
                // "PostgreSQL",
                // "HTML5",
                // "CSS3",
                // "Tailwind CSS",
                // "Framer Motion",
                // "Git",
                // "Docker",
                // "AWS",
                // "Firebase",
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/20">
                    <div className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <Image
                      src={skill.url}
                      alt="Profile"
                      width={600}
                      height={600}
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>
                  <div className="text-center font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {`Let's Connect`}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {`I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.`}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
