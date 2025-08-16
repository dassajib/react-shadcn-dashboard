
import { Home, VectorSquare, ChartColumnStacked, ShoppingBasket, UserRoundPlus, UserRoundSearch, Command, GalleryVerticalEnd, AudioWaveform } from "lucide-react"
import { navItemsInterface, SidebarDataInterface } from "@/interface/sidebarInterface"

export const navItems: navItemsInterface[] = [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "UOM", url: "/uom", icon: VectorSquare },
    { title: "Category", url: "/categories", icon: ChartColumnStacked },
    { title: "Item", url: "/items", icon: ShoppingBasket },
    { title: "Customer", url: "/customers", icon: UserRoundPlus },
    { title: "Vendor", url: "/vendors", icon: UserRoundSearch },
]

export const sidebarData: SidebarDataInterface = {
    user: {
        name: 'Sajib Das',
        email: 'sajibdas.sd@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Shadcn Admin',
            logo: Command,
            plan: 'Vite + ShadcnUI',
        },
        {
            name: 'Acme Inc',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
    ],
}