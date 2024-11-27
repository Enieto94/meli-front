import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { useState } from 'react'
import { fetchProductDetail } from '../services/products-service'

const categoria = "Electrónica, Audio y video > iPod > Reproductores > iPod touch > 32GB"

function ProductDetailsPage() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (productId) {
            getProductDetails()
        }
    }, [])

    const getProductDetails = async () => {
        try {
            const productDetail = await fetchProductDetail(productId)
            setProduct(productDetail)

        } catch (error) {
            console.error(error)
        }
    }

    if (!product) return <h3>No product details found!.</h3>

    return (
        <>
            <Header />

            {/* <div className='breadcumb'>
                {product.}
            </div> */}

            <div className='prodDetail'>
                <img src={product.picture} alt="" />
                <div>
                    <span>{productId}</span>
                    <h1>{product.title}</h1>
                    <h3>$ {product.price.amount} <span>00</span></h3>
                    <button>Comprar</button>
                </div>
            </div>
            <div className='prodDesc'>
                <h2>Descripción del producto</h2>
                <p>
                    {product.description}
                </p>
            </div>
        </>
    )
}

export default ProductDetailsPage