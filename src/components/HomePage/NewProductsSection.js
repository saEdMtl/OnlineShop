import React, { useContext, useEffect, useState } from 'react';

//Css
import './newProductsSection.css'

//Context
import { ProductsContext } from '../../context/ProductsContextProvider'

//Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Assets
import discount2 from '../../assets/discount2.png'
import calender from '../../assets/calender.png'

///React router dom
import { Link } from 'react-router-dom'

const NewProductsSection = () => {

    const products = useContext(ProductsContext);
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {

        setNewProducts(products.filter(product => product.id < 9))

    }, [products])

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]}`
        return newTitle;

    }

    return (
        <div className='newProductsSection'>
            <div className='title'>
                <img src={discount2} alt='discount' /><h3>محصولات جدید امروز</h3><img src={discount2} alt='discount' />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 col-md-10 col-sm-9 col-9'>
                        <Swiper
                            breakpoints={{
                                300: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Navigation, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation
                            autoplay

                        >
                            {
                                newProducts.map(discount => <SwiperSlide key={discount.id}>
                                    <Link to={`/products/${discount.id}`}>
                                        <div className='slider'>
                                            <img alt='img' src={discount.image} />
                                            <div className='discription'>
                                                <h4>{shorten(discount.title)}</h4>
                                                <span>{discount.category}</span>
                                                <div className='price'>
                                                    <h6>{discount.price} $</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                    <div className='calender col-lg-2 col-md-2 col-sm-3 col-3'>
                        <strong>امروز {new Date().toLocaleDateString('fa-IR')}</strong>
                        <img alt='calender' src={calender} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductsSection;