import { axiosInstance } from "@/lib";
import { useQuery } from "@tanstack/react-query";

const useFetchProducts = ({ token = null }) => {

    return useQuery({
        queryKey: ["products-data"],
        queryFn: async () => {
            try {
                const response = await axiosInstance.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                return response.data
            } catch (error) {
                throw new Error(error.message)
            }
        },
    })
}

export { useFetchProducts };
