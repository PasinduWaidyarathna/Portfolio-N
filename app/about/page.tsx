"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
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
                  I started my journey in web development over 5 years ago. What
                  began as a curiosity quickly evolved into a passion for
                  creating digital experiences that are not only visually
                  appealing but also functional and user-friendly.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                  {`Throughout my career, I've had the opportunity to work with a
                  diverse range of clients, from startups to established
                  enterprises, helping them bring their ideas to life through
                  code.`}
                </p>
                <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                  {`My approach to development is centered around understanding
                  the unique needs of each project and finding the most
                  efficient and effective solutions to meet those needs.`}
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
                      Developed responsive websites and web applications for
                      various clients across different industries.
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
                      University of Kelaniya, with a focus on web development
                      and user experience design.
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
                {
                  name: "JavaScript",
                  url: "/me.jpg",
                },
                { name: "TypeScript", url: "reactjs.svg" },
                // { name: "React", url: "https://reactjs.org" },
                // { name: "Next.js", url: "https://nextjs.org" },
                // { name: "Node.js", url: "https://nodejs.org" },
                // { name: "Express", url: "https://expressjs.com" },
                // { name: "MongoDB", url: "https://www.mongodb.com" },
                // { name: "PostgreSQL", url: "https://www.postgresql.org" },
                // {
                //   name: "HTML5",
                //   url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                // },
                // {
                //   name: "CSS3",
                //   url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                // },
                // { name: "Tailwind CSS", url: "https://tailwindcss.com" },
                // { name: "Framer Motion", url: "https://www.framer.com/motion" },
                // { name: "Git", url: "https://git-scm.com" },
                // { name: "Docker", url: "https://www.docker.com" },
                // { name: "AWS", url: "https://aws.amazon.com" },
                // { name: "Firebase", url: "https://firebase.google.com" },

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
