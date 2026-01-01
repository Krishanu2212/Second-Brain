import axios from "axios";
import { useEffect, useState } from "react";
import { BackendURL } from "../config";

export const useContent = () => {
    const [contents, setContents] = useState([]);

    function refresh() {
        axios.get(`${BackendURL}/api/v1/content`, {
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