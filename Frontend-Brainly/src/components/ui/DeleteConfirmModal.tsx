import axios from "axios"
import { Button } from "./Button"
import { BackendURL } from "../../config"

export const DeleteConfirmModal = ({open, close, deleteContentId}: {open: boolean, close: () => void, deleteContentId: number}) => {

    async function deleteContent() {
        
        try {
            const response = await axios.delete(`${BackendURL}/api/v1/${deleteContentId}`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            alert(response.data.msg)
            
        } catch(e) {
            console.log(e);
            if(axios.isAxiosError(e)) {
                if(e.response) alert(e.response.data.msg);
            }
        }
        close();
    }

    return (
        <div>
            {open && <div>
                <div className="bg-slate-500 fixed inset-0 z-40 opacity-60"></div>

                <div className="flex justify-center items-center fixed inset-0 z-50">
                    <div className="bg-white rounded ">
                        <div className="p-4 justify-self-center">Are U Sure, u want to Delete?</div>
                        <div className="flex p-4 gap-8">
                            <Button variant="secondary" size="md" text="Cancel" onClick={close}></Button>
                            <Button variant="primary" size="md" text="Continue" onClick={deleteContent}></Button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}