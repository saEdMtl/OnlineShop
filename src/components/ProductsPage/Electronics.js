import React, { useContext, useEffect, useState } from 'react';

//Css
import './electronics.css'

//context
import { ProductsContext } from '../../context/ProductsContextProvider';

//Reract-router-dom
import { Link } from 'react-router-dom'

const Electronics = () => {

    const products = useContext(ProductsContext);
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {

        setElectronics(products.filter(product => product.category.includes("electronics")))

    }, [])

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]}`
        return newTitle;

    }

    return (
        <div className='electronics'>
            <div className='row' >
                {
                    electronics.map(electronicProduct =>
                        <div className='electronicProduct col-lg-3 col-md-3 col-sm-6 col-6' key={electronicProduct.id}>
                            <Link to={`/products/${electronicProduct.id}`}>
                                <img src={electronicProduct.image} />
                                <h4>{shorten(electronicProduct.title)}</h4>
                                <p>{electronicProduct.price} $</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Electronics;