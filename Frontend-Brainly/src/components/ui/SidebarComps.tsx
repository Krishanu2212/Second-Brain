import type { ReactElement } from "react"

interface SidebarCompsProps {
    icon: ReactElement,
    title: string
}

export const SidebarComps = (props: SidebarCompsProps) => {
    return (
        <div className="flex py-4 px-6 items-center text-gray-600 hover:text-purple-500 hover:bg-gray-100 rounded-xl font-normal cursor-pointer">
            <div>{props.icon}</div>
            <div className="px-4 text-lg">{props.title}</div>
        </div>
    )
}