import React, { useEffect, useState, useContext } from 'react';

//Css
import './womensClothing.css'

//context
import { ProductsContext } from '../../context/ProductsContextProvider';

//Reract-router-dom
import { Link } from 'react-router-dom'

const WomensClothing = () => {

    const products = useContext(ProductsContext);
    const [womensClothing, setWomensClothing] = useState([]);

    useEffect(() => {

        setWomensClothing(products.filter(product => product.category.includes("women's clothing")))

    }, [])

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]}`
        return newTitle;

    }

    return (
        <div className='womensClothing'>
            <div className='row' >
                {
                    womensClothing.map(womensClothingProduct =>
                        <div className='womensClothingProduct col-lg-3 col-md-3 col-sm-6 col-6' key={womensClothingProduct.id}>
                            <Link to={`/products/${womensClothingProduct.id}`}>
                                <img src={womensClothingProduct.image} />
                                <h4>{shorten(womensClothingProduct.title)}</h4>
                                <p>{womensClothingProduct.price} $</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WomensClothing;