import { Github, Linkedin, Rss, Twitch, Twitter } from "lucide-react";

export const socials = [
  {
    icon: <Github key="github" size={15} />,
    link: "https://github.com/mADKiNG-07",
    key: "github",
  },
  {
    icon: <Twitter key="twitter" size={15} />,
    link: "https://x.com/mAD_KvNG",
    key: "twitter",
  },
  {
    icon: <Twitch key="twitch" size={15} />,
    link: "",
    key: "twitch",
  },
  {
    icon: <Linkedin key="linkedin" size={15} />,
    link: "https://www.linkedin.com/in/williams-jordan-55397b211/",
    key: "linkedin",
  },
  {
    icon: <Rss key="rss" size={15} />,
    link: "",
    key: "rss",
  },
];

export const tools = [
  {
    title: "Next.JS",
    description:
      "Next.JS is a...and my go-to for full-stack web development, I currently use it at work and personally for web-based projects",
    logo: "/next_js.svg",
  },
  {
    title: "Typescript",
    description:
      "Even though I am still learning the language, I have come to understand the core functionalities. And it has become one of my favourite tools to use.",
    logo: "/typescript.png",
  },
  {
    title: "MongoDB",
    description: "What's a full-stack application without a database...",
    logo: "/mongodb.svg",
  },
  {
    title: "Flutter",
    description:
      "i feel this gets a lot of hate, don't know why...i have some cool projects with this amazing tool",
    logo: "/flutter.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Suwk Africa",
    description:
      "A full-stack platform that provides young people from low-income communities with valuable trade skills",
    languages: ["Next JS", "Firebase"],

    githubUrl: "",
    link: "https://www.suwkafrica.com/",
  },
];
