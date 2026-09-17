export interface EventItem {
  src: string;
  subtitle: string;
  title: string;
}

export const events: EventItem[] = [
  {
    src: "/home/events/our-events-1.png",
    subtitle: "Our Scope",
    title: "GDSC SCOPE GAME",
  },
  {
    src: "/home/events/our-events-2.png",
    subtitle: "Skilled Team",
    title: "Our Heroes",
  },
  {
    src: "/home/events/our-events-3.png",
    subtitle: "Community Build",
    title: "Build Networking",
  },
];

export interface Track {
  title: string;
  description: string;
  image: string;
}

export const tracks: Track[] = [
  {
    title: "UI/UX DESIGN",
    description:
      "Learn how to design intuitive, user-friendly digital experiences. Explore user research, wireframing, prototyping, and visual interface design.",
    image: "/tracks/uiux.jpg",
  },
  {
    title: "FRONT-END DEVELOPMENT",
    description:
      "Learn how to turn designs into interactive and responsive websites. Explore HTML, CSS, JavaScript, and modern front-end tools.",
    image: "/tracks/frontend.jpg",
  },
  {
    title: "BACK-END DEVELOPMENT",
    description:
      "Learn how to build the logic and infrastructure behind web applications. Explore databases, APIs, server-side programming, and application security.",
    image: "/tracks/backend.jpg",
  },
];
