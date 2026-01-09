import { useEffect, useState } from "react";
import { Body } from "../components/ui/Body"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { Sidebar } from "../components/ui/Sidebar"
import { useContent } from "../hooks/useContent";
import { DeleteConfirmModal } from "../components/ui/DeleteConfirmModal";
import { ShareLinkModal } from "../components/ui/ShareLinkModal";

export const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [shareLinkModalOpen, setShareLinkModalOpen] = useState(false);

    const {refresh}: {refresh: () => void} = useContent();
    const [deleteContentId, setDeleteContentId] = useState(0);

    useEffect(() => {
      refresh()
    }, [modalOpen]);

    return (
      <div>
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
        <DeleteConfirmModal open={deleteModalOpen} close={() => setDeleteModalOpen(false)} deleteContentId={deleteContentId}/>
        <ShareLinkModal open={shareLinkModalOpen} close={() => setShareLinkModalOpen(false)}/>
        <div className='flex h-100vh'>
        
          <Sidebar/>
          <Body openCreateContentModal={() => setModalOpen(true)} openDeleteModal={() => setDeleteModalOpen(true)} setDeleteContentId={setDeleteContentId} openShareLinkModal={() => setShareLinkModalOpen(true)}/>
        </div> 
      </div>
    )
}