export interface UserInterface {
    name: string
    email: string
    avatar: string
}

export interface TeamInterface {
    name: string
    logo: React.ElementType
    plan: string
}

export interface SidebarDataInterface {
    user: UserInterface
    teams: TeamInterface[]
}

export interface navItemsInterface {
    title: string
    url: string
    icon: React.ElementType
}