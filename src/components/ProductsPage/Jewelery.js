import React, { useEffect, useState, useContext } from 'react';

//Css
import './jewelery.css'

//context
import { ProductsContext } from '../../context/ProductsContextProvider';

//Reract-router-dom
import { Link } from 'react-router-dom'

const Jewelery = () => {

    const products = useContext(ProductsContext);
    const [jewelery, setJewelery] = useState([]);

    useEffect(() => {

        setJewelery(products.filter(product => product.category.includes("jewelery")))

    }, [])

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]}`
        return newTitle;

    }

    return (
        <div className='jewelery'>
            <div className='row' >
                {
                    jewelery.map(jeweleryProduct =>
                        <div className='jeweleryProduct col-lg-3 col-md-3 col-sm-6 col-6' key={jeweleryProduct.id}>
                            <Link to={`/products/${jeweleryProduct.id}`}>
                                <img src={jeweleryProduct.image} />
                                <h4>{shorten(jeweleryProduct.title)}</h4>
                                <p>{jeweleryProduct.price} $</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Jewelery;