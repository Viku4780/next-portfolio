import { Eye, FileTextIcon, FolderGit2 } from "lucide-react";
import { GiOpenBook } from "react-icons/gi";

export type ProjectType = {
    projectImg: string;
    projectName: string;
    projectStack: string[];
    state: 'Published' | 'Draft',
    views: string;
    publishedDate: string;
}

export const projects: ProjectType = [
    {
        projectImg: '/projects/blog-app.png',
        projectName: 'Portfolio Website v2',
        projectStack: [
            'Next.js',
            'Tailwind CSS',
            'Framer Motion'
        ],
        state: 'Published',
        views: '2.4K',
        publishedDate: 'May 20, 2026'
    },
    {
        projectImg: '/projects/chat-application.png',
        projectName: 'Chat App',
        projectStack: [
            'ReactJS',
            'Node.js',
            'MongoDB',
            'Cloudinary'
        ],
        state: 'Published',
        views: "2K",
        publishedDate: 'May 10, 2026'
    },
    {
        projectImg: '/projects/e-commerce.png',
        projectName: 'E-Commerce',
        projectStack: [
            'Next.js',
            'Tailwind CSS',
            'NextAuth',
            'Stripe'
        ],
        state: 'Published',
        views: "800",
        publishedDate: 'May 20, 2026'
    },
    {
        projectImg: '/projects/recipe-finder.png',
        projectName: 'Weather Dashboard',
        projectStack: [
            'React',
            'OpenWeather API',
            'Recharts'
        ],
        state: 'Draft',
        views: '10K',
        publishedDate: 'May 24, 2026'
    },
    {
        projectImg: '/projects/expense-tracker.webp',
        projectName: 'AI Content Generator',
        projectStack: [
            'Next.js',
            'OpenAI API',
            'tailwind CSS'
        ],
        state: 'Draft',
        views: '100',
        publishedDate: 'May 15, 2026'
    },
];



export const PROJECT_ELEMENT_DATA = [
    {
        label: 'Total Projects',
        count: 12,
        increaseBy: '2',
        icon: FolderGit2,
        bgClass: 'text-primary bg-primary/10'
    },
    {
        label: 'Published',
        count: 9,
        increaseBy: '3',
        icon: FileTextIcon,
        bgClass: 'text-dash-sec bg-dash-sec/10'
    },
    {
        label: 'Drafts',
        count: 3,
        increaseBy: 0,
        icon: GiOpenBook,
        bgClass: 'text-dash-ter bg-dash-ter/20'
    },
    {
        label: 'Total Views',
        count: 24500,
        increaseBy: '18.5%',
        icon: Eye,
        bgClass: 'text-dash-fiv bg-dash-fiv/20'
    }

];