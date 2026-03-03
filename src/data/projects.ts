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
        link: "https://project-overlord.pages.dev/",
        repo: "https://github.com/richardmarove/project-overlord"
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
        title: "Weather App",
        description: "A weather app that tells you the weather in your location.",
        image: "/weather.png",
        category: "Frontend",
        tags: ["React Vite", "TailwindCSS", "OpenWeatherMap API"],
        accent: "bg-[#00FFCC]",
        shadow: "bg-[#9D00FF]",
        link: "https://rickysweather.pages.dev/",
        repo: "https://github.com/richardmarove/weather-app"
    },
    {
        title: "Ricky's AI Wrapper",
        description: "An attempt in making my own AI wrapper using AI Studio & OpenRouter API.",
        image: "/geminiw.png",
        category: "Fullstack",
        tags: ["Next.js", "Tailwind", "AI Studio", "OpenRouter"],
        accent: "bg-[#FF3366]",
        shadow: "bg-[#00E5FF]",
        link: "https://geminiw.pages.dev/",
        repo: "https://github.com/richardmarove/geminiwrapper"
    },
    {
        title: "Astro98",
        description: "An uncomplete attempt to make a personal portfolio site with the vibe of Windows 98.",
        image: "/astro98.png",
        category: "Frontend",
        tags: ["Astro", "Tailwind", "React"],
        accent: "bg-black dark:bg-white",
        shadow: "bg-[#FF9900]",
        link: "https://astro98.pages.dev/",
        repo: "https://github.com/richardmarove/astro98"
    }
];

export const categories = ["All", "Frontend", "Fullstack"];
