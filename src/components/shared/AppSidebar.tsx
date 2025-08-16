import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { navItems, sidebarData } from "@/data/sidebarData"
import TeamSwitcher from "./TeamSwitcher"
import NavUser from "./NavUser"

const AppSidebar = () => {
  return (
    <Sidebar className="bg-white dark:bg-sidebar text-black dark:text-white">
      {/* company name with logo */}
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>

      <SidebarContent className="bg-white dark:bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 dark:text-gray-400">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2 text-black dark:text-white hover:text-blue-500 transition">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar