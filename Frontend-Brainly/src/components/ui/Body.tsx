import type { Dispatch, SetStateAction } from "react"
import { useContent } from "../../hooks/useContent"
import { PlusIcon } from "../../icons/PlusIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { Button } from "./Button"
import { Card } from "./Card"
import { BackendURL } from "../../config"
import axios from "axios"
import type { Content } from "../../interfaces/contentInterface"

export const Body = ({openCreateContentModal, openDeleteModal, setDeleteContentId, openShareLinkModal}: {openCreateContentModal: () => void, openDeleteModal: () => void, setDeleteContentId: Dispatch<SetStateAction<number>>, openShareLinkModal: () => void}) => {
    const {contents}: {contents: Content[]} = useContent(`${BackendURL}/api/v1/content`);


    return (
        <div className="bg-gray-200 h-screen w-screen ml-72">
            <div className="flex p-8 justify-between items-center">
                <div className="text-2xl font-bold">All Notes</div>
                <div className="flex gap-4">
                    <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon size="md"/>} onClick={openCreateContentModal}/>
                    <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon size="md"/>} onClick={openShareLinkModal}/>
                </div>
            </div>

            <div className="flex p-8 flex-wrap gap-12">
                {contents ? contents.map((content: Content) => (
                    <Card userType="owner" _id={content._id} type={content.type} title={content.title} content={content.content} tags={content.tags} date={content.date} link={content.link} openDeleteModal={openDeleteModal} setDeleteContentId={setDeleteContentId}/>
                )) : null}
                {/* <Card type='Youtube' title='Project Ideas' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://www.youtube.com/watch?v=2Jh8HNCPuLk'/>
                <Card type='X' title='Project Innovations' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://x.com/manas_muduli/status/1999521040872145012'/>
                <Card type='Text' title='Project Innovations' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://x.com/manas_muduli/status/1999521040872145012'/>  
                <Card type='Youtube' title='Project Ideas' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://www.youtube.com/watch?v=2Jh8HNCPuLk'/>
                <Card type='X' title='Project Innovations' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://x.com/manas_muduli/status/1999521040872145012'/>
                <Card type='Text' title='Project Innovations' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://x.com/manas_muduli/status/1999521040872145012'/>  
                <Card type='Youtube' title='Project Ideas' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://www.youtube.com/watch?v=2Jh8HNCPuLk'/>
                <Card type='X' title='Project Innovations' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://x.com/manas_muduli/status/1999521040872145012'/>
                <Card type='Text' title='Project Innovations' content='its very imp' tags={['productivity', 'ideas', 'productivity', 'ideas', 'ideas']} date='23/12/2025' link='https://x.com/manas_muduli/status/1999521040872145012'/>   */}
            
            </div>
        </div>
    )
}