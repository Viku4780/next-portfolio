import type { Metadata } from "next";
import AdminSidebar from "../../shared/components/AdminSidebar";
import MobileSidebar from "../../shared/components/MobileSidebar";
import { SidebarCollapseProvider } from "../(users)/context/SidebarCollapseContext";
import DashboardFooter from "@/shared/components/AdminFooter";



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
            <div className="w-full h-screen flex items-center relative">
                <AdminSidebar />
                <MobileSidebar />

                <main className='flex-1 h-screen overflow-y-auto'>
                    {children}
                    <DashboardFooter />
                </main>
            </div>
        </SidebarCollapseProvider>
    );
}
