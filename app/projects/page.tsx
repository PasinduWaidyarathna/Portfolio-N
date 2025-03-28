"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  My <span className="text-blue-600">Projects</span>
                </motion.h1>
                <motion.p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  A collection of my work showcasing my skills and experience in
                  web development.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <ProjectCard
                title="Project One"
                description="A web application built with React and Node.js that allows users to create and share their own recipes."
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Node.js", "MongoDB"]}
                slug="project-one"
              />
              <ProjectCard
                title="Project Two"
                description="An e-commerce platform with payment integration, product management, and user authentication."
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "Stripe", "Tailwind CSS"]}
                slug="project-two"
              />
              <ProjectCard
                title="Project Three"
                description="A mobile app for tracking fitness goals, with features like workout planning and progress tracking."
                image="/placeholder.svg?height=400&width=600"
                tags={["React Native", "Firebase", "Redux"]}
                slug="project-three"
              />
              <ProjectCard
                title="Project Four"
                description="A dashboard for monitoring system performance, with real-time data visualization and alerts."
                image="/placeholder.svg?height=400&width=600"
                tags={["Vue.js", "D3.js", "Express"]}
                slug="project-four"
              />
              <ProjectCard
                title="Project Five"
                description="A social media platform for connecting professionals in the tech industry."
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "GraphQL", "PostgreSQL"]}
                slug="project-five"
              />
              <ProjectCard
                title="Project Six"
                description="A content management system for small businesses to manage their online presence."
                image="/placeholder.svg?height=400&width=600"
                tags={["WordPress", "PHP", "MySQL"]}
                slug="project-six"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Want to Work Together?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
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
      <footer className="w-full border-t bg-white py-6 dark:bg-gray-950">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
