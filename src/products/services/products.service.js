import http from "../../libs/http/http"

export const getProducts = (endpoint, id) => {
    const uri = id !== 0 ? `products/${id}` : endpoint;

    return http.get(uri);
}
