import {
    FolderGit2,
    FileText,
    Eye,
    MessageSquareMore,
    PersonStanding,
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