'use client';

import { createContext, useContext, useState } from "react";

// type Theme = "light" | "dark";

interface SidebarCollapseContextType {
    sidebarCollapse: boolean;
    toggleSidebar: () => void;
    setSidebarCollapse: (sidebarCollapse: boolean) => void;
}

const SidebarCollapseContext = createContext<SidebarCollapseContextType | undefined>(undefined);

export const SidebarCollapseProvider = ({children}: {children: React.ReactNode}) => {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);

    const toggleSidebar = () => {
       setSidebarCollapse(!sidebarCollapse);
    };


    return (
        <SidebarCollapseContext.Provider value={{sidebarCollapse, setSidebarCollapse, toggleSidebar}}>
            {children}
        </SidebarCollapseContext.Provider>
    )
}


// use custom hook to use the themecontext
export function useSidebar(){
    const context = useContext(SidebarCollapseContext);

    if(context === undefined){
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}