import { useNavigate } from "react-router-dom"
import { DocsIcon } from "../../icons/DocsIcon"
import { LinkIcon } from "../../icons/LinkIcon"
import { TagIcon } from "../../icons/TagIcon"
import { VideoIcon } from "../../icons/VideoIcon"
import { XIcon } from "../../icons/XIcon"
import { Button } from "./Button"
import { SecondBrain } from "./SecondBrain"
import { SidebarComps } from "./SidebarComps"
import { LogoutIcon } from "../../icons/Logout"

export const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/signin')
    }
    return (
        <div className="h-screen w-72 shadow bg-white p-2 border-r border-gray-300 fixed z-30 top-0 left-0 flex flex-col">
            <div><SecondBrain/></div>
            <div>
                <SidebarComps icon={<XIcon size="md"/>} title='Tweets'/>
                <SidebarComps icon={<VideoIcon size="md"/>} title='Videos'/>
                <SidebarComps icon={<DocsIcon size="md"/>} title='Documents'/>
                <SidebarComps icon={<LinkIcon size="md"/>} title='Links'/>
                <SidebarComps icon={<TagIcon size="md"/>} title='Tags'/>
            </div>
            <div className="mt-auto mb-8 self-center"><Button variant="secondary" size="md" text="Logout" onClick={logout} startIcon={<LogoutIcon/>}></Button></div>
        </div>
        
    )
}