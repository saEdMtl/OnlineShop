import React from 'react';

//Css
import './categorySection.css'

//React Router Dom
import { Link } from 'react-router-dom'

const CategorySection = () => {
    return (
        <div className='categorySection'>
            <div className='container'>
                <div className='row'>
                    <div className='menClothing col-lg-4 col-md-4 col-sm-6 col-6'>
                        <h4>انواع لباس مردانه</h4>
                        <Link to='product/mensClothing'>مشاهده و خرید</Link>
                    </div>
                    <div className='womenClothing col-lg-4 col-md-4 col-sm-6 col-6'>
                        <h4>انواع لباس زنانه</h4>
                        <Link to='product/womensClothing'>مشاهده و خرید</Link>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12 second'>
                        <div className='row'>
                            <div className='electronic col-lg-12 col-md-12 col-sm-6 col-6'>
                                <h4>انواع لوازم جانبی</h4>
                                <Link to='product/electronics'>مشاهده و خرید</Link>
                            </div>
                            <div className='jewelry col-lg-12 col-md-12 col-sm-6 col-6'>
                                <h4>انواع جواهرات</h4>
                                <Link to='product/jewelery'>مشاهده و خرید</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;