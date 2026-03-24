import {
    useQuery,
} from '@tanstack/react-query'

export const useGetApi = () => {
    return useQuery({
        queryKey: ["get product api"],
        queryFn: async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            return data;
        }
    })
};

export const useApiCategory = () => {
    return useQuery({
        queryKey: ["get category api"],
        queryFn: async () => {
            const res = await fetch("https://dummyjson.com/products/categories");
            const data = await res.json();
            return data;
        }
    })
}