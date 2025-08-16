import { useState, useEffect } from "react"
import { Bell, Search, User2, ChevronDown, Menu, Sun, Moon, Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="w-full h-16 bg-white dark:bg-sidebar flex items-center justify-between px-4 md:px-6 shadow-md sticky top-0 z-50">

      {/* Left: Sidebar trigger + logo */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="p-2 rounded-md text-black dark:text-white">
          <Menu className="w-6 h-6" />
        </SidebarTrigger>
        <span className="text-xl md:text-2xl font-bold text-black dark:text-white">MyApp</span>
      </div>

      {/* Center: Search */}
      <div className="flex-1 mx-4 md:mx-6 relative">
        {/* Desktop search */}
        <div className="hidden md:block">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 dark:text-gray-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-1/2 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white dark:bg-background"
            />
          </div>
        </div>

        {/* Mobile search toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile search input overlay */}
        {mobileSearchOpen && (
          <div className="absolute top-12 left-0 w-full bg-white dark:bg-background p-2 rounded-lg shadow-md md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-3 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        )}
      </div>

      {/* icons */}
      <div className="flex items-center space-x-2 md:space-x-4">

        <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500 transition" />

        {/* mode theme toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />}
        </button>

        {/* user profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-sidebar flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card transition">
              <User2 className="w-5 h-5 text-black dark:text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            className="w-48 bg-white dark:bg-sidebar text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow-md"
          >
            <DropdownMenuItem className="flex items-center gap-2">
              <User2 className="w-4 h-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Settings className="w-4 h-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <ChevronDown className="w-4 h-4 rotate-180" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}

export default Navbar