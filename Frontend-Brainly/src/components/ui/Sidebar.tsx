import { DocsIcon } from "../../icons/DocsIcon"
import { LinkIcon } from "../../icons/LinkIcon"
import { TagIcon } from "../../icons/TagIcon"
import { VideoIcon } from "../../icons/VideoIcon"
import { XIcon } from "../../icons/XIcon"
import { SecondBrain } from "./SecondBrain"
import { SidebarComps } from "./SidebarComps"

export const Sidebar = () => {
    return (
        <div className="h-screen w-72 shadow bg-white p-2 border-r border-gray-300 fixed z-30 top-0 left-0">
            <div><SecondBrain/></div>
            <div>
                <SidebarComps icon={<XIcon size="md"/>} title='Tweets'/>
                <SidebarComps icon={<VideoIcon size="md"/>} title='Videos'/>
                <SidebarComps icon={<DocsIcon size="md"/>} title='Documents'/>
                <SidebarComps icon={<LinkIcon size="md"/>} title='Links'/>
                <SidebarComps icon={<TagIcon size="md"/>} title='Tags'/>
            </div>
        </div>
        
    )
}