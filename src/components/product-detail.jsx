import { Form } from "./Form"
import './ProductDetail.css';
export function ProductDetail() {
    const categoria = "Electrónica, Audio y video > iPod > Reproductores > iPod touch > 32GB"
    return (
        <>
            <Form />
            <div className='breadcumb'>
                {categoria}
            </div>
            <div className='prodDetail'>
                <img src="https://http2.mlstatic.com/D_Q_NP_2X_855189-MCO72889082680_112023-V.webp" alt="" />
                <div>
                    <span>Nuevo - 234 vendidos</span>
                    <h1>Deco Reverse Sombrero Oxford</h1>
                    <h3>$ 1.980 <span>00</span></h3>
                    <button>Comprar</button>
                </div>
            </div>
            <div className='prodDesc'>
                <h2>Descripción del producto</h2>
                <p>
                    The Scarpe di Blanco Italian footwear collection was founded by Bill White in 2009. Di Bianco offers classic handmade men's shoes with a  modern twist. The combination of timeless models and details with contemporary colors and styling, results in decidely current, yet. elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience through a multitude of models, lasts, soles, leathers, and color options.
                </p>
            </div>
        </>
    )
}