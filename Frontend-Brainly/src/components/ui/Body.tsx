import { useContent } from "../../hooks/useContent"
import { PlusIcon } from "../../icons/PlusIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { Button } from "./Button"
import { Card } from "./Card"

interface Content {
    type: 'X' | "Youtube" | "Text" | "Audio" | "Image" | "Video" | "Article",
    title: string,
    content: string,
    tags: string[],
    date: string,
    link: string
}

export const Body = ({open}: {open: () => void}) => {
    const {contents}: {contents: Content[]} = useContent();

    return (
        <div className="bg-gray-200 h-screen w-screen ml-72">
            <div className="flex p-8 justify-between items-center">
                <div className="text-2xl font-bold">All Notes</div>
                <div className="flex gap-4">
                    <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon size="md"/>} onClick={open}/>
                    <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon size="md"/>} onClick={() => {}}/>
                </div>
            </div>

            <div className="flex p-8 flex-wrap gap-12">
                {contents ? contents.map((content: Content) => (
                    <Card type={content.type} title={content.title} content={content.content} tags={content.tags} date={content.date} link={content.link} />
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