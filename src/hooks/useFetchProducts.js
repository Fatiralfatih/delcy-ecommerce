import { axiosInstance } from "@/lib/axiosInstance";
import { useEffect, useState } from "react";

export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axiosInstance.get('/products');
            setProducts(response.data.data)
        } catch (error) {
            setError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProducts();
    },[])

    return { products, loadingInProduct: isLoading, errorInProduct: error }
}
