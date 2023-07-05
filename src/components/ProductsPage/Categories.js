import React from 'react';

//React-router-dom
import { Link } from 'react-router-dom';

//Css
import './categories.css'

const Categories = () => {
    return (
        <div className='categories col-lg-2 col-md-2 col-sm-3 col-3'>
            <div>
                <ul>
                    <li><Link to='/'> {`<`}</Link></li>
                    <li><Link to='/product/mensClothing'> {`<`}</Link></li>
                    <li><Link to='/product/womensClothing'> {`<`}</Link></li>
                    <li><Link to='/product/electronics'> {`<`} </Link></li>
                    <li><Link to='/product/jewelery'> {`<`}</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>صفحه اصلی</Link></li>
                    <li><Link to='/product/mensClothing'>لباس مردانه</Link></li>
                    <li><Link to='/product/womensClothing'>لباس زنانه</Link></li>
                    <li><Link to='/product/electronics'>لوازم الکترونیکی</Link></li>
                    <li><Link to='/product/jewelery'>جواهرات</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;