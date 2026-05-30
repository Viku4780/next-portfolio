export default function ToolbarButton({
    icon: Icon,
}: {
    icon: any;
}) {
    return (
        <button className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-gray-400 transition hover:bg-pink-500/10 hover:text-pink-400">
            <Icon className="h-4 w-4" />
        </button>
    );
}