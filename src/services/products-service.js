import { API_URL } from "../../app-config"

const BASE_API_URL = API_URL

export const fetchProducts = async ({ query = 'query', limit }) => {
    try {
        let queryParams = `?q=${query}`

        if (limit) queryParams += `&limit=${limit}`

        const response = await fetch(`${BASE_API_URL}/items/${queryParams}`)
        const data = await response.json()
        const products = data.items

        return products

    } catch (error) {
        throw new Error(error)
    }
}

export const fetchProductDetail = async (productId) => {
    try {
        const response = await fetch(`${BASE_API_URL}/items/${productId}`)
        const productData = await response.json()

        return productData.item

    } catch (error) {
        throw new Error(error)
    }
}