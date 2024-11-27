import { useEffect } from "react";
import { Link } from "react-router-dom";

export function ProductItem({ productData }) {

    useEffect(() => {
        JSON.stringify(productData)
    }, [])

    return (
        <li>

            <Link to={`/items/${productData.id}`}>
                <div>
                    <img src={productData.picture} alt={productData.title} />
                </div>
                <div className="content">
                    <p>$ {productData.price.amount}</p>
                    <h3>
                        {productData.title}
                    </h3>
                </div>
                <div className="content">
                    <p>
                        {productData.condition}
                    </p>
                </div>

            </Link>
        </li>
    )
}