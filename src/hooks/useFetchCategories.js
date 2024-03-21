import { axiosInstance } from "@/lib/axiosInstance";
import { useEffect, useState } from "react";

export const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    const getCategories = async () => {
        try {
            setIsLoading(true)
            const response = await axiosInstance.get('/categories')
            setCategories(response.data.data);
        } catch (error) {
            setError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCategories();
    }, [])


    return { categories, errorInCategories: error, loadingInCategories: isloading }
}