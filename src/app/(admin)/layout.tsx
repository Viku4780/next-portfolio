import type { Metadata } from "next";



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

        <div className="w-full min-h-screen flex justify-center items-center">
            {children}
        </div>
    );
}
