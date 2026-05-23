import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata: Metadata = {
    title: "Portfolio | Vikrant",
    description: "General user views",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            <Navbar />
            <main className="min-h-screen pt-24">{children}</main>
            <Footer />
        </div>
    );
}
