import { useEffect, useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { BackendURL } from "../../config";
import axios from "axios";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const ShareLinkModal = ({open, close}: {open: boolean, close: () => void}) => {
    const [link, setLink] = useState('');
    const navigate = useNavigate();
    const linkRef = useRef('');

    async function createLink() {
        try {
            const link = await axios.post(`${BackendURL}/api/v1/brain/share`, {
                share: true,
            }, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            if(link.data.hash) setLink(link.data.hash);
            else alert(link.data.msg);
        } catch(e) {
            if(axios.isAxiosError(e)) {
                if(e.response) alert(e.response.data.msg);
            }
        }
    }

    useEffect(() => {
        // createLink();
        console.log('hi')
    },[])

    return (
        <div>
            {open && <div>
                {/* backdrop */}
                <div className="h-screen w-screen fixed inset-0 z-40 bg-slate-500 opacity-60"></div>

                {/* ModalWrapper */}
                <div className="flex justify-center items-center fixed inset-0 z-50">
                    <div className="bg-white h-fit w-fit rounded-xl z-50 p-4">
                        <div className="justify-self-end hover:bg-gray-300 p-2 rounded-xl cursor-pointer" onClick={close}><CrossIcon size="md"/></div>
                        <div className="p-2">
                            {link === '' && <div>
                                <Button variant="primary" text="Create Link" size="md" onClick={createLink}/>
                            </div>}
                            {link !== '' && <div className="">
                                <div className="text-purple-600 justify-self-center mb-4 text-xl font-medium">Share Link: </div>
                                <div className="flex items-center gap-4">
                                    <div className="border rounded-4xl border-black px-3 py-2 max-w-164 flex wrap-anywhere">
                                        localhost:5173/sharedUserDashboard/{link}
                                    </div>
                                    <div className="rounded-5xl"><Button variant="primary" text="Copy" size="md" onClick={async () => {await navigator.clipboard.writeText(`localhost:5173/sharedUserDashboard/${link}`)}}/></div>
                                    <div className="rounded-5xl"><Button variant="primary" text="Visit" size="md" onClick={() => navigate(`/sharedUserDashboard/${link}`)}/></div>
                                </div>
                                
                            </div>}
                        </div>

                    </div>

                </div>
            </div>}
        </div>
    )
}