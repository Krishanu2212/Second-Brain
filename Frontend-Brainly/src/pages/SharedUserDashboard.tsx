import { useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Sidebar } from "../components/ui/Sidebar";
import { BackendURL } from "../config";
import { useContent } from "../hooks/useContent"
import type { Content } from "../interfaces/contentInterface";


export const SharedUserDashboard = () => {
    const {hash} = useParams();
    const {contents}: {contents: Content[]} = useContent(`${BackendURL}/api/v1/brain/${hash}`);
    
    console.log(contents);
    // const username = contents[0].content;
    
    return (
        <div className="flex h-100vh">
            <Sidebar/>

            <div className="flex flex-col bg-gray-200 h-screen w-screen ml-72">
                <div className="text-2xl font-bold m-8">All Notes of {"username"} Brain</div>
                <div className="flex p-8 flex-wrap gap-12">
                    {contents ? contents.map((content: Content) => (
                        <Card userType="sharedUser" _id={content._id} type={content.type} title={content.title} content={content.content} tags={content.tags} date={content.date} link={content.link}/>
                    )) : null}
                </div>
                {/* <div>You r looking {contents[0].content}'s Brain</div> */}
            </div>
        </div>
    )
}