import { useParams, useSearchParams } from 'react-router-dom';
import { ProductsList } from '../components/products-list'
import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { fetchProducts } from '../services/products-service';

function ItemsPage() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('search')

    useEffect(() => {
        getProducts()
    }, [query])

    useEffect(() => {
        if (query) {
            filterByQuery()
        }
    }, [query])

    const getProducts = async () => {
        try {
            const productsFound = await fetchProducts({ query, limit: 4 })
            setProducts(productsFound)

        } catch (error) {
            console.log('Error getting products')
        }
    }

    const filterByQuery = () => {
        const foundedProducts = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredProducts(foundedProducts);
    }

    //if ((products.length === 0) || (filteredProducts.length === 0)) return (<h3>No hay productos con el titulo: {query}</h3>)

    return (
        <>
            <Header />

            <main>

                {/* {filteredProducts.length > 0 && (<ProductsList products={filteredProducts} />)} */}

                {products.length > 0 && (<ProductsList products={products} />)}

            </main>
        </>
    )
}

export default ItemsPage