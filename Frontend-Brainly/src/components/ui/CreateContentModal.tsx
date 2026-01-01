import { useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { BackendURL } from "../../config";
import axios from "axios";

export const CreateContentModal = ({open, onClose} : {open: boolean, onClose: () => void}) => {
    const typeRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);

    async function sendData() {
        const type = typeRef.current?.value;
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const content = contentRef.current?.value;

        const response = await axios.post(`${BackendURL}/api/v1/content`, {
            type: type,
            title: title,
            link: link,
            content: content
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        alert(response.data.msg);
        onClose();
    }

    return (
        <div>
            {/* Backdrop ----- Backdrop and ModalWrapper are siblings */}
            {open && <div>
                <div className="bg-slate-500 fixed inset-0 z-40 opacity-60"></div>
                {/* ModalWrapper */}
                <div className="flex items-center justify-center fixed inset-0 z-50">
                    {/* ModalBox */}
                    <div className="bg-white h-fit w-fit rounded-xl p-4">
                        <div className="p-2 flex justify-self-end hover:bg-gray-300 h-fit w-fit rounded-xl cursor-pointer" onClick={onClose}><CrossIcon size="md"/></div>
                        <div className="flex flex-col items-center">
                            <Input ref={typeRef} type="dropdown" options={['Select', 'X', "Youtube", "Text", "Audio", "Image"]} name="Type*:" placeholder="Select Type..."/>
                            <Input ref={titleRef} type="text" name="Title*:" placeholder="Enter Title..."/>
                            <Input ref={linkRef} type="text" name="Link:" placeholder="Enter Link..."/>
                            <Input ref={contentRef} type="textbox" name="Content*:" placeholder="Enter Content..."/>
                            <div className="pt-4"><Button variant="primary" size="md" text="Submit" onClick={sendData}/></div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}