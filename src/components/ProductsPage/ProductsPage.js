import React from 'react';

//React Router Dom
import { Route, Routes } from 'react-router-dom';

//Components
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Categories from './Categories';

const ProductsPage = () => {

    return (
        <div className='products'>
            <div className='container'>
                <div className='row'>
                    <Categories />
                    <div className='product col-lg-10 col-md-10 col-sm-9 col-9'>
                        <Routes>
                            <Route path='mensClothing' element={<MensClothing />} />
                            <Route path='womensClothing' element={<WomensClothing />} />
                            <Route path='electronics' element={<Electronics />} />
                            <Route path='jewelery' element={<Jewelery />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;