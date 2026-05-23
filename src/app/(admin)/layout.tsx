import type { Metadata } from "next";
import AdminSidebar from "./_shared/components/AdminSidebar";
import MobileSidebar from "./_shared/components/MobileSidebar";
import { SidebarCollapseProvider } from "../(users)/context/SidebarCollapseContext";



export const metadata: Metadata = {
    title: "Portfolio-Control-Room",
    description: "From here admin manages the portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarCollapseProvider>
            <div className="w-full h-screen flex items-center">
                <AdminSidebar />
                <MobileSidebar />

                <main className='flex-1 h-screen'>
                    {children}
                </main>
            </div>
        </SidebarCollapseProvider>
    );
}
