export type ToolkitItem = {
    name: string;
    note?: string;
};

export type ToolkitCategory = {
    id: string;
    title: string;
    accent: "yellow" | "pink" | "blue" | "black" | "white";
    items: ToolkitItem[];
};

export const toolkitCategories: ToolkitCategory[] = [
    {
        id: "frontend",
        title: "Frontend",
        accent: "yellow",
        items: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" },
            { name: "TailwindCSS" },
            { name: "Astro" },
            { name: "React" },
            { name: "Next.js" },
        ],
    },
    {
        id: "backend",
        title: "Backend",
        accent: "pink",
        items: [{ name: "Node.js" }, { name: "PHP" }],
    },
    {
        id: "database",
        title: "Database",
        accent: "blue",
        items: [
            { name: "Supabase" },
            { name: "PostgreSQL" },
            { name: "MySQL / MariaDB" },
        ],
    },
    {
        id: "operating-systems",
        title: "Operating Systems",
        accent: "black",
        items: [
            { name: "Fedora Linux", note: "Main" },
            { name: "Windows 11", note: "Second" },
        ],
    },
    {
        id: "hardware",
        title: "Hardware",
        accent: "white",
        items: [
            { name: "Lenovo IdeaPad 5" },
            { name: "Razer Cynosa V2" },
            { name: "Fantech RHASTA II G13 Mouse" },
        ],
    },
    {
        id: "tools",
        title: "Tools",
        accent: "yellow",
        items: [
            { name: "VS Code" },
            { name: "Antigravity" },
            { name: "Git" },
            { name: "GitHub" },
        ],
    },
];
