const BASE_URL = 'http://127.0.0.1:8000/api';

const api = (() => {
    const fetchAllProducts = async () => {
        const response = await fetch(`${BASE_URL}/products`);
        const responseJson = await response.json();

        return responseJson.data;
    }

    return {
        fetchAllProducts,
    }
})();

export default api
