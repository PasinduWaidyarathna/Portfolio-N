export const projectData = {
  "project-one": {
    title: "Serverless Contact Form Backend",
  description:
    "A backend solution for contact forms using AWS serverless architecture with automated provisioning and CI/CD.",
  fullDescription:
    "This project provides a secure, scalable backend for contact forms using a fully serverless architecture. It features an API Gateway endpoint connected to a Lambda function that processes form submissions and sends emails using Amazon SES. The system supports CORS for easy frontend integration and uses Terraform for automated infrastructure provisioning. GitHub Actions handle deployment and cleanup workflows for seamless DevOps practices.",
  image: "/p01.png?height=600&width=1200",
  tags: ["AWS", "Serverless", "Terraform", "SES", "Lambda", "CI/CD"],
  liveUrl: "https://example.com", // replace with actual if available
  githubUrl: "https://github.com/PasinduWaidyarathna/nextjs-contact-form-terraform-cicd", // replace with actual if available
  features: [
    "Serverless API endpoint via Amazon API Gateway",
    "AWS Lambda function for processing submissions",
    "Email notifications via Amazon SES",
    "CORS support for frontend integration",
    "Terraform modules for automated infrastructure",
    "CI/CD using GitHub Actions"
  ],
  technologies: [
    "Terraform for Infrastructure as Code and remote state",
    "AWS API Gateway, Lambda (Node.js 20.x), IAM, SES, S3",
    "Next.js for the frontend",
    "GitHub Actions for CI/CD"
  ],
  challenges:
    "Configuring email delivery with Amazon SES and verifying domains. Managing CORS policies for frontend-backend communication.",
  solutions:
    "Set up verified identities and policies in SES for secure email delivery. Implemented CORS headers in API Gateway to allow cross-origin requests from the frontend."
  },
  // Add more projects as needed
};

export const projectList = [
  {
    title: "Serverless Contact Form Backend",
    description:
      "A backend solution for contact forms using AWS serverless architecture with automated provisioning and CI/CD.",
    image: "/p01.png?height=400&width=600",
    tags: ["AWS", "Serverless", "Terraform", "SES", "Lambda", "CI/CD"],
    slug: "project-one",
  },
  {
    title: "Project Two",
    description:
      "A web application built with React and Node.js that allows users to create and share their own recipes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    slug: "project-two",
  },
  {
    title: "Project Two",
    description:
      "A web application built with React and Node.js that allows users to create and share their own recipes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    slug: "project-two",
  },
  {
    title: "Project Two",
    description:
      "A web application built with React and Node.js that allows users to create and share their own recipes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    slug: "project-two",
  },
  {
    title: "Project Two",
    description:
      "A web application built with React and Node.js that allows users to create and share their own recipes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    slug: "project-two",
  },
  // Add more projects as needed
];
