import { useEffect, useState } from "react";
import { Body } from "../components/ui/Body"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { Sidebar } from "../components/ui/Sidebar"
import { useContent } from "../hooks/useContent";

export const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const {refresh}: {refresh: () => void} = useContent();

    useEffect(() => {
      refresh()
    }, [modalOpen]);

    return (
        <div>
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
        <div className='flex h-100vh'>
        
          <Sidebar/>
          <Body open={() => setModalOpen(true)}/>
        </div> 
      </div>
    )
}