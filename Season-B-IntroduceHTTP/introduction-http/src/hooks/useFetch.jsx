import { useState, useEffect } from "react";

// 4 - Custom Hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (e) {
                console.error("Error: ", e)
            }
        }

        fetchData();

    }, [url])

    return { data };
}