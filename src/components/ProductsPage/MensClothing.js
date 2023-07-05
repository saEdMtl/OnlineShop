import React, { useEffect, useState, useContext } from 'react';

//Css
import './mensClothing.css'

//context
import { ProductsContext } from '../../context/ProductsContextProvider';

//Reract-router-dom
import { Link } from 'react-router-dom'

const MensClothing = () => {

    const products = useContext(ProductsContext);
    const [mensClothing, setMensClothing] = useState([]);

    useEffect(() => {

        setMensClothing(products.filter(product => product.id < 5))

    }, [])

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]}`
        return newTitle;

    }

    return (
        <div className='mensClothing'>
            <div className='row' >
                {
                    mensClothing.map(mensClothingProduct =>
                        <div className='mensClothingProduct col-lg-3 col-md-3 col-sm-6 col-6' key={mensClothingProduct.id}>
                            <Link to={`/products/${mensClothingProduct.id}`}>
                                <img src={mensClothingProduct.image} />
                                <h4>{shorten(mensClothingProduct.title)}</h4>
                                <p>{mensClothingProduct.price} $</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MensClothing;