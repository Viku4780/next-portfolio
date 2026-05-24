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
    MessageSquare,
    Users,
    Mail,
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
];


export const activities = [
    {
        id: 1,
        icon: Mail,
        title: "New message from John Doe",
        description: "Project inquiry about your work",
        time: "10m ago",
        color: " bg-primary/10",
        iconColor: "text-primary",
    },
    {
        id: 2,
        icon: FileText,
        title: 'Blog post "Building Scalable APIs" published',
        description: "Your article is now live",
        time: "1h ago",
        color: " bg-dash-ter/20",
        iconColor: "text-dash-ter",
    },
    {
        id: 3,
        icon: Users,
        title: "New visitor from United States",
        description: "Viewed your portfolio",
        time: "2h ago",
        color: "from-cyan-500/20 to-cyan-500/5",
        iconColor: "text-cyan-400",
    },
    {
        id: 4,
        icon: FolderKanban,
        title: 'Project "E-Commerce Dashboard" updated',
        description: "You made changes to the project",
        time: "5h ago",
        color: " bg-dash-ternary/10",
        iconColor: "text-dash-ternary",
    },
    {
        id: 5,
        icon: MessageSquare,
        title: "New testimonial from Sarah Johnson",
        description: `"Great experience working with you!"`,
        time: "1d ago",
        color: "bg-dash-fiv/10",
        iconColor: "text-dash-fiv",
    },
      {
        id: 6,
        icon: '',
        title: "New GitHub contribution",
        description: "You pushed 3 commits",
        time: "1d ago",
        color: "from-emerald-500/20 to-emerald-500/5",
        iconColor: "text-emerald-400",
      },
];



export const learningData = [
  {
    title: "System Design",
    progress: 75,
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    title: "Advanced JavaScript",
    progress: 60,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Docker & Kubernetes",
    progress: 40,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AWS Cloud",
    progress: 30,
    gradient: "from-cyan-400 to-teal-400",
  },
];