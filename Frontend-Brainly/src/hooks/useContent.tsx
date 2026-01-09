import axios from "axios";
import { useEffect, useState } from "react";
import { BackendURL } from "../config";

export const useContent = (link?: string) => {
    const [contents, setContents] = useState([]);

    async function refresh() {
        await axios.get(`${link}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then((response) => {
                setContents(response.data.content);
            })
    }

    useEffect(() => {
        refresh()
    }, [])
    return {contents, refresh};
}