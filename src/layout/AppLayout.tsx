import Navbar from "@/components/shared/Navbar"
import AppSidebar from "@/components/shared/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

const AppLayout = ({ children }) => {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden">
                {/* sidebar */}
                <AppSidebar />

                {/* main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* navbar */}
                    <Navbar />

                    {/* page content */}
                    <main className="flex-1 overflow-auto p-6 w-full">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default AppLayout