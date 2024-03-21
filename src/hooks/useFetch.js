import { axiosInstance } from "@/lib";
import { useEffect, useState } from "react";

export const useFetch = ({ baseUrl }) => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(baseUrl)
                setData(response.data.data)
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [baseUrl])


    return { data, isError, isloading }
}