import {
    FolderGit2,
    FileText,
    Eye,
    MessageSquareMore,
    PersonStanding,
    FolderKanban,
    ImageIcon,
    Brain,
    BarChart,
} from "lucide-react";

export const DASHBOARD_ELEMENTS = [
    {
        label: 'Total Projects',
        count: 12,
        icon: FolderGit2,
        increaseByThisMonth: 2,
        bgClass: 'text-primary bg-primary/10'
    },
    {
        label: 'Blog Posts',
        count: 18,
        icon: FileText,
        increaseByThisMonth: 3,
        bgClass: 'text-dash-sec bg-dash-sec/10'
    },
    {
        label: 'Profile Views',
        count: 2450,
        icon: Eye,
        increaseByThisMonth: '18.5%',
        bgClass: 'text-dash-ter bg-dash-ter/20'
    },
    {
        label: 'Messages',
        count: 24,
        icon: MessageSquareMore,
        increaseByThisMonth: 4,
        bgClass: 'text-dash-ter bg-dash-ter/20'
    },
    {
        label: 'Github Contributions',
        count: 145,
        icon: '',
        increaseByThisMonth: 12,
        bgClass: 'text-primary bg-primary/10'
    },
    {
        label: 'Total Visitors',
        count: 1200,
        icon: PersonStanding,
        increaseByThisMonth: '15.3%',
        bgClass: 'text-dash-ter bg-dash-ter/20'
    },
]

export const QUICK_ACTIONS = [
    {
        label: 'Add New Project',
        icon: FolderKanban,
        bgClass: ' text-dash-sec bg-dash-sec/10'
    },
    {
        label: 'Write New Blog',
        icon: FileText,
        bgClass: 'text-primary bg-primary/10'
    },
    {
        label: 'Upload Media',
        icon: ImageIcon,
        bgClass: 'text-dash-ter bg-dash-ter/20'
    },
    {
        label: 'Update Skills',
        icon: Brain,
        bgClass: 'text-dash-ternary bg-dash-ternary/10'
    },
    {
        label: 'View Analytics',
        icon: BarChart,
        bgClass: 'text-dash-fiv bg-dash-fiv/10'
    },
    // {
    //     label: 'Add Experience',
    //     icon: PersonStanding,
    //     bgClass: 'text-dash-ter bg-dash-ter/20'
    // },
]


type recentProject = {
    projectImg: string;
    projectName: string;
    projectStack: string[];
    state: 'Published' | 'Draft';
    publishedDate: string;
}

export const RECENT_PROJECTS_DATA : recentProject[] = [
    {
        projectImg: '/projects/blog-app.png',
        projectName: 'Portfolio Website v2',
        projectStack: [
            'Next.js',
            'Tailwind CSS',
            'Framer Motion'
        ],
        state : 'Published',
        publishedDate : 'May 20, 2026'
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
        state : 'Published',
        publishedDate : 'May 10, 2026'
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
        state : 'Published',
        publishedDate : 'May 20, 2026'
    },
    {
        projectImg: '/projects/recipe-finder.png',
        projectName: 'Weather Dashboard',
        projectStack: [
            'React',
            'OpenWeather API',
            'Recharts'
        ],
        state : 'Draft',
        publishedDate : 'May 24, 2026'
    },
    {
        projectImg: '/projects/expense-tracker.webp',
        projectName: 'AI Content Generator',
        projectStack: [
            'Next.js',
            'OpenAI API',
            'tailwind CSS'
        ],
        state : 'Draft',
        publishedDate : 'May 15, 2026'
    },
]