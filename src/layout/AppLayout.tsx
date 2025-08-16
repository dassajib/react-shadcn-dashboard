import { Outlet } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import Navbar from "@/components/shared/Navbar"
import AppSidebar from "@/components/shared/AppSidebar"

const AppLayout = () => {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden">
                <AppSidebar />

                <div className="flex-1 flex flex-col overflow-hidden">
                    <Navbar />
                    {/* main content */}
                    <main className="flex-1 overflow-auto p-6 w-full">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default AppLayout