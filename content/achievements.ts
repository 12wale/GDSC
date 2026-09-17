import {
  Camera,
  Code2,
  Layers3,
  MessagesSquare,
  Signpost,
  UsersRound,
  Video,
  type LucideIcon,
} from "lucide-react";

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  background: string;
}

export const achievements: Achievement[] = [
  {
    title: "5,000+ Students Reached",
    description: "Engaged thousands of students through our events and activities.",
    icon: Layers3,
    color: "text-[#FF5D5D]",
    background: "bg-[#FFF0F0]",
  },
  {
    title: "Content & Media",
    description:
      "Created podcasts and educational content to extend our impact beyond physical events.",
    icon: Video,
    color: "text-[#FF5D5D]",
    background: "bg-[#FFF0F0]",
  },
  {
    title: "Multiple Technical Workshops",
    description:
      "Delivered hands-on learning experiences across a variety of technology topics.",
    icon: Code2,
    color: "text-[#F4C343]",
    background: "bg-[#FFFAE8]",
  },
  {
    title: "Industry & Speaker Connections",
    description:
      "Connected students with professionals, founders, and experts from different fields.",
    icon: Camera,
    color: "text-[#7176E8]",
    background: "bg-[#F0F1FF]",
  },
  {
    title: "3,000+ Students",
    description:
      "Built a growing student community passionate about technology and innovation.",
    icon: UsersRound,
    color: "text-[#F4C343]",
    background: "bg-[#FFFAE8]",
  },
  {
    title: "Leadership & Community Building",
    description:
      "Developed student leaders and created opportunities for members to take active roles within the community.",
    icon: Signpost,
    color: "text-[#F4C343]",
    background: "bg-[#FFFAE8]",
  },
  {
    title: "Tech Entrepreneurship",
    description:
      "Expanded our community’s focus to include entrepreneurship, startups, AI, and turning ideas into real projects.",
    icon: MessagesSquare,
    color: "text-[#7176E8]",
    background: "bg-[#F0F1FF]",
  },
  {
    title: "4 Years of Community Building",
    description:
      "Continuously growing and creating opportunities for students since the beginning of our journey.",
    icon: Signpost,
    color: "text-[#F4C343]",
    background: "bg-[#FFFAE8]",
  },
];
