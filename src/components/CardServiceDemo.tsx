import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  IconAppWindow,
  IconDeviceMobile,
  IconCloudComputing,
  IconApi,
  IconLayersIntersect,
  IconPhoneCalling,
  IconHeartHandshake,
} from "@tabler/icons-react";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <IconAppWindow className="text-blue-500 w-12 h-12" />,
    title: "Custom Web Development",
    description:
      "Create a powerful online presence with a fully customized website that meets your business goals. I specialize in building responsive, SEO-friendly, and high-performance web applications.",
    link: "1",
    moreDetails: [
      "Frontend & Backend Development",
      "Single-Page Applications (SPA)",
      "Content Management Systems (CMS)",
      "E-commerce Solutions",
    ],
  },
  {
    icon: <IconDeviceMobile className="text-blue-500 w-12 h-12" />,
    title: "Mobile App Development",
    description:
      "Transform your idea into a seamless mobile experience. I develop native and cross-platform mobile apps with intuitive user interfaces and robust functionalities.",
    link: "2",
    moreDetails: [
      "iOS & Android Development",
      "Cross-Platform Solutions (Flutter, React Native)",
      "UI/UX Design for Mobile",
      "App Store & Play Store Publishing",
    ],
  },
  {
    icon: <IconCloudComputing className="text-blue-500 w-12 h-12" />,
    title: "Microservices & Cloud Solutions",
    description:
      "Leverage the power of microservices architecture for scalable, flexible, and efficient solutions. With Docker and cloud services (AWS, Google Cloud, Azure), I create applications that can scale with your business needs.",
    link: "3",
    moreDetails: [
      "Microservices Architecture",
      "Docker & Containerization",
      "Cloud Infrastructure Setup & Management",
      "Serverless Architecture",
    ],
  },
  {
    icon: <IconApi className="text-blue-500 w-12 h-12" />,
    title: "API Development & Integration",
    description:
      "Enhance the functionality of your app with custom-built APIs and seamless third-party integrations. I ensure smooth, secure data flow between systems.",
    link: "4",
    moreDetails: [
      "RESTful & GraphQL APIs",
      "Third-Party Integrations (Payment Gateways, Social Media, etc.)",
      "API Security & Performance Optimization",
    ],
  },
  {
    icon: <IconLayersIntersect className="text-blue-500 w-12 h-12" />,
    title: "UI/UX Design & Prototyping",
    description:
      "A great user experience is at the heart of every successful digital product. I focus on creating intuitive and visually appealing interfaces that engage users.",
    link: "5",
    moreDetails: [
      "Wireframes & Prototypes",
      "User Research & Testing",
      "Responsive Web Design",
      "Mobile-First Design",
    ],
  },
  {
    icon: <IconPhoneCalling className="text-blue-500 w-12 h-12" />,
    title: "Consulting & Strategy",
    description:
      "I provide expert consultation to help you navigate your digital transformation journey. From defining project scope to recommending the best technologies.",
    link: "6",
    moreDetails: [
      "Technology Consulting",
      "Digital Strategy & Planning",
      "Project Scoping & Roadmap",
    ],
  },
  {
    icon: <IconHeartHandshake className="text-blue-500 w-12 h-12" />,
    title: "Ongoing Support & Maintenance",
    description:
      "I offer ongoing maintenance and support services to ensure your applications run smoothly, stay secure, and are always up-to-date with the latest trends and technologies.",
    link: "7",
    moreDetails: [
      "Bug Fixes & Performance Tuning",
      "Security Updates & Patches",
      "Feature Upgrades & Enhancement",
    ],
  },
];
