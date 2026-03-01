export interface Project {
    title: string;
    description: string;
    image: string;
    category: string;
    tags: string[];
    accent: string;
    shadow: string;
    link: string;
    repo: string;
    isUnderDevelopment?: boolean;
}

export const projects: Project[] = [
    {
        title: "project-overlord",
        description: "My own personal CMS that I built for myself to rant about my life and politics.",
        image: "/project-overlord.png",
        category: "Fullstack",
        tags: ["Astro", "Tailwind", "Supabase"],
        accent: "bg-[#135bec]",
        shadow: "bg-[#FF0099]",
        link: "#",
        repo: "#"
    },
    {
        title: "Alvetrix",
        description: "A comprehensive sports management & data platform that digitizes matches in Indonesia.",
        image: "/alvetrix2.png",
        category: "Fullstack",
        tags: ["PHP", "CSS", "MySQL"],
        accent: "bg-[#EBFF00]",
        shadow: "bg-black dark:bg-white",
        link: "#",
        repo: "#",
        isUnderDevelopment: true
    },
    {
        title: "Neon Nexus",
        description: "A cyberpunk-themed landing page template with heavy emphasis on animations.",
        image: "",
        category: "Frontend",
        tags: ["React", "Framer Motion", "Tailwind"],
        accent: "bg-[#00FFCC]",
        shadow: "bg-[#9D00FF]",
        link: "#",
        repo: "#"
    },
    {
        title: "DataDash",
        description: "A real-time analytics dashboard with complex data visualization components.",
        image: "",
        category: "Fullstack",
        tags: ["Next.js", "Prisma", "Chart.js"],
        accent: "bg-[#FF3366]",
        shadow: "bg-[#00E5FF]",
        link: "#",
        repo: "#"
    },
    {
        title: "Minimalist Folio",
        description: "A hyper-minimalist portfolio template focused on typography and spacing.",
        image: "",
        category: "Frontend",
        tags: ["HTML", "Vanilla CSS", "JS"],
        accent: "bg-black dark:bg-white",
        shadow: "bg-[#FF9900]",
        link: "#",
        repo: "#"
    }
];

export const categories = ["All", "Frontend", "Fullstack"];
