import { DocsIcon } from "../../icons/DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { VideoIcon } from "../../icons/VideoIcon";
import { XIcon } from "../../icons/XIcon";
import { AudioIcon } from "../../icons/AudioIcon";
import { ImageIcon } from "../../icons/ImageIcon";
import type React from "react";
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { ShareIcon } from "../../icons/ShareIcon";
import { Deleteicon } from "../../icons/DeleteIcon";

interface CardProps {
    userType: "sharedUser" | "owner",
    _id: number,
    type: 'X' | "Youtube" | "Text" | "Audio" | "Image" | "Video" | "Article",
    title: string,
    link?: string,
    content: any,
    tags: string[],
    date: string,
    openDeleteModal?: () => void,
    setDeleteContentId?: Dispatch<SetStateAction<number>>
}

const iconType: Record<string, ReactElement> = {
    "X": <XIcon size="md"/>,
    "Youtube": <VideoIcon size="md"/>,
    "Text": <DocsIcon size="md"/>,
    "Audio": <AudioIcon size="md"/>,
    "Image": <ImageIcon size="md"/>
}

interface LinkProps {
    link: string,
    type: string
}

const LinkType = (props: LinkProps) => {
    if(props.type === 'X') return (<blockquote className="twitter-tweet"><a href={props.link.replace('x.com', 'twitter.com')}></a></blockquote>)
    if(props.type === 'Youtube') return (<><iframe className='w-full' src={props.link.replace('watch', 'embed').replace('?v=', '/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></>)
    else return (<div className="text-lg text-wrap break-words">Link: {props.link}</div>)
}

export const Card = (props: CardProps) => {
    function funcSet() {
        if(props.setDeleteContentId) props.setDeleteContentId(props._id);
        console.log("set");
    }

    function deleteFunc() {
        if(props.openDeleteModal) props.openDeleteModal();
        funcSet();
    }

    return (
        <div className="rounded-xl bg-white border-1 border-gray-300 min-h-72 max-w-72 p-4 my-4">
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <div className="text-gray-600">{iconType[props.type]}</div>
                    <div className="font-medium text-xl">{props.title}</div>
                </div>
                {props.userType === 'owner' && <div className="flex gap-4 items-center text-slate-500">
                    <div><button className="cursor-pointer"><ShareIcon size="md"/></button></div>
                    <div><button className="cursor-pointer" onClick={deleteFunc}><Deleteicon size="md"/></button></div>
                </div>}
            </div>
            <div className="py-4 font-normal text-2xl">
                <div className="text-wrap break-words py-2">{props.content}</div>
                {props.link ? <div><LinkType link={props.link} type={props.type}/></div> : null}
            </div>
            <div className=" flex flex-wrap gap-2 py-4">
                {props.tags.map((tag) => (
                    <div className="rounded-2xl bg-purple-300 text-purple-500 px-2 py-1 text-sm">#{tag}</div>
                ))}
            </div>
            <div className="py-4 text-slate-500">
                Added on {props.date}
            </div>
        </div>
    )
}
