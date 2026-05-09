"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import parttime from "../assets/parttime.png";
import nasa from "../assets/nasa.png";
import lms from "../assets/lms.png";
import sees from "../assets/sees.png";
import wms from "../assets/wms.png";
import auth from "../assets/auth.png";
import { SparklesCore } from "./ui/sparkles";
import { IconX, IconLink } from "@tabler/icons-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  details: string[];
  image: string | StaticImageData;
  link: string;
}

const projects: Project[] = [
  {
    title: "Part-Time Job Finder Mobile App (Flutter)",
    description:
      "A user-friendly mobile application that connects job seekers with part-time job opportunities based on location, skills, and availability. The app includes custom filtering options, real-time notifications, and a seamless, intuitive user interface.",
    details: [
      "Technologies: Flutter, Firebase, RESTful APIs",
      "Key Features: Job filtering, real-time notifications, intuitive UI",
    ],
    image: parttime,
    link: "",
  },
  {
    title: "NASA API Web Application",
    description:
      "A visually captivating web application using NASA’s API to provide users with access to stunning space imagery, space event information, and the latest updates from NASA.",
    details: [
      "Technologies: Vite, Node.js, Express, MongoDB, Tailwind CSS",
      "Key Features: Real-time NASA data, search functionality, interactive UI",
    ],
    image: nasa,
    link: "https://nasa-app-chi.vercel.app/",
  },
  {
    title: "Learning Management System (Next.js)",
    description:
      "A powerful LMS designed for educational institutions, featuring user roles for instructors and students, course management, progress tracking, and a responsive design for all device types.",
    details: [
      "Technologies: Next.js, MongoDB, Node.js",
      "Key Features: Course management, progress tracking, responsive design",
    ],
    image: lms,
    link: "",
  },
  {
    title: "SEES Translator Web App (MERN Stack)",
    description:
      "A translation platform designed for users to translate phrases in multiple languages with accurate, context-sensitive results.",
    details: [
      "Technologies: MongoDB, Express.js, React, Node.js",
      "Key Features: Real-time translation, audio playback, multi-language support",
    ],
    image: sees,
    link: "",
  },
  {
    title: "Social Media Fitness App (Spring Boot & React)",
    description:
      "A social platform tailored for fitness enthusiasts, allowing users to share workout routines, track progress, and connect with a community.",
    details: [
      "Technologies: Spring Boot, React, MySQL",
      "Key Features: Personalized feed, workout tracking, in-app messaging",
    ],
    image: wms,
    link: "",
  },
  {
    title: "Advanced Authentication System (MERN Stack)",
    description:
      "An authentication system providing secure access with features such as multi-factor authentication (MFA), role-based access control, and JWT-based authentication.",
    details: [
      "Technologies: MongoDB, Express.js, React, Node.js, JWT",
      "Key Features: Multi-factor authentication, role-based access, secure JWT",
    ],
    image: auth,
    link: "",
  },
];

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="Projects" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-20 text-white"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-black border border-white/[0.2] rounded-lg shadow-lg overflow-hidden group"
              onClick={() => openModal(project)}
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm md:text-md">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                particleColor="#FFFFFF"
                className="w-full h-full"
              />
            </div>
            <div className="relative z-10 p-6 space-y-6">
              <div className="flex justify-between items-center">
                <Link
                  href={selectedProject.link}
                  className="text-blue-500 flex font-semibold space-x-4 items-center"
                >
                  Demo
                  <IconLink className="w-5 h-5" />
                </Link>
                <button
                  onClick={closeModal}
                  className="text-white rounded-full p-2 shadow-md bg-slate-700 hover:bg-slate-600 transition duration-300 focus:outline-none"
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full h-48 sm:h-60 md:h-72 lg:h-96 relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm md:text-md text-slate-300 text-justify">
                {selectedProject.description}
              </p>
              <ul className="space-y-2">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <p className="text-sm md:text-md text-slate-400">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;
