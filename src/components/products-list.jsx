import { ProductItem } from './product-item'

export function ProductsList({ products }) {

    return (
        <>
            <ul>
                {
                    products.map((element) => {
                        return (
                            <ProductItem key={element.id} productData={element} />
                        )
                    })
                }
            </ul>
        </>
    )
}

