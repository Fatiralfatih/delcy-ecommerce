import { axiosInstance } from "@/lib"
import { useEffect, useState } from "react"


export const useGalleries = ({ product }) => {
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        const getGaleri = async () => {
            try {
                if (product && product.id) {
                    const response = await axiosInstance.get(`/galleries/${product.id}`)
                    setGalleries(response.data.data)
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        getGaleri();
    }, [product])

    return { galleries };
}
