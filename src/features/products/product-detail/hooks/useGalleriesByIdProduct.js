import { axiosInstance } from "@/lib";
import { useQuery } from "@tanstack/react-query"

export const useGalleriesByIdProduct = ({ id }) => {
    console.log(id);
    return useQuery({
        queryKey: ['galleries-product'],
        queryFn: () => axiosInstance.get(`/galleries/${id}`).catch(error => console.log(error.message))
    });
}