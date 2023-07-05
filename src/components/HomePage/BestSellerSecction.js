import React, { useContext, useEffect, useState } from 'react';

//Css
import './bestSellerSection.css'

//Context
import { ProductsContext } from '../../context/ProductsContextProvider';

//React router dom
import { Link } from 'react-router-dom'

const BestSeller = () => {

    const products = useContext(ProductsContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [special, setSpecial] = useState([]);

    useEffect(() => {

        setBestSeller(products.filter(product => product.id > 14))
        setSpecial(products.filter(product => product.id === 13))

    }, [products])

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]}`
        return newTitle;

    }

    return (
        <div className='bestSellerSection'>
            <div className='container'>
                <h1>پرفروش ترین محصولات</h1>
                <div className='row'>
                    <div className='left col-lg-4 col-md-12 col-sm-12 col-12'>
                        {
                            special.map(product => <Link key={product.id} to={`/products/${product.id}`}>
                                <div className='special'>
                                    <img src={product.image} alt='bestSeller' />
                                    <div className='caption'>
                                        <h5>{shorten(product.title)}</h5>
                                        <span>{product.category}</span>
                                        <p>{product.price} $</p>
                                    </div>
                                </div>
                            </Link>
                            )
                        }
                    </div>
                    <div className=' col-lg-8 col-md-12 col-sm-12 col-12'>
                        <div className='row sections'>
                            {
                                bestSeller.map(product => <div className='section col-lg-4 col-md-6 col-sm-6 col-6' key={product.id}>
                                    <Link key={product.id} to={`/products/${product.id}`}>
                                        <div className='image'>
                                            <img src={product.image} alt='bestSeller' />
                                        </div>
                                        <div className='caption'>
                                            <h4>{shorten(product.title)}</h4>
                                            <span>{product.category}</span>
                                            <p>{product.price} $</p>
                                        </div>
                                    </Link>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;