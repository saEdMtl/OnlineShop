import React, { useContext, useState } from 'react';

//Css
import './navbar.css';

//Assets
import basket from '../../assets/basket.png'
import branch from '../../assets/branch.png'
import customers from '../../assets/customers.png'
import discount from '../../assets/discount.png'
import star from '../../assets/star.png'
import aboutus from '../../assets/aboutus.png'
import chat from '../../assets/chat.png'
import veblog from '../../assets/veblog.png'
import more from '../../assets/more.png'
import call from '../../assets/call.png'

//React Router Dom
import { Link } from 'react-router-dom'

//Context
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const { state } = useContext(CartContext);

    const [show, setShow] = useState(false);
    const [hambergur, setHambergur] = useState(false);

    const mouseOverHandler = () => {
        setShow(true);
    }

    const mouseOutHandler = () => {
        setShow(false);
    }

    const hambergurMenu = () => {
        setHambergur(!hambergur)
    }

    return (
        <div className={`webNavbarSection `}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6 col-6'>
                        <Link to='/cart' className='basket'><img src={basket} alt='basket' /></Link><span>{state.itemsCounter}</span>
                        <p className='space'>|</p>
                        <button type='button' className='enter'>ورود / عضویت</button>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 search'>
                        <input type='text' placeholder='... جستجو' className='searchBox' />
                    </div>
                    <div className='name col-lg-3 col-md-4 col-sm-4 col-4'>
                        <h1>saEd Market</h1>
                    </div>
                    <div className='col-lg-1 col-md-1 col-sm-1 col-1 hambergurNav' onClick={hambergurMenu}>
                        <div className='hambergurLine'></div>
                        <div className='hambergurLine'></div>
                        <div className='hambergurLine'></div>
                    </div>
                </div>
                <div className='secondLine'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                            <button type='button' className='club'><img src={customers} alt='customers' />باشگاه مشتریان</button>
                            <button type='button' className='branch'><img src={branch} alt="branch" />شعب روز</button>
                        </div>
                        <div className='list col-lg-8 col-md-8 col-sm-8 col-8'>
                            <ul>
                                <li onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}><a href='#'><img src={more} alt="more" />دسته بندی محصولات</a></li>
                                <li><a href='#'><img src={star} alt="star" />برندها</a></li>
                                <li><a href='#'><img src={chat} alt="chat" />مشاوره رایگان</a></li>
                                <li><a href='#'><img src={veblog} alt="veblog" />وبلاگ روز</a></li>
                                <li><a href='#'><img src={aboutus} alt="aboutus" />درباره ما</a></li>
                                <li><a href='#'><img src={call} alt="call" />ارتباط با ما</a></li>
                                <li><a href='#'><img src={discount} alt="discount" />فروش ویژه</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`category ${show ? "show" : "hide"}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
                <div className='right'>
                    <ul>
                        <li><Link to='/product/mensClothing'>لباس مردانه</Link></li>
                        <li><Link to='/product/WomensClothing'>لباس زنانه</Link></li>
                        <li><Link to='/product/electronics'>لوازم الکترونیکی</Link></li>
                        <li><Link to='/product/jewelery'>جواهرات</Link></li>
                    </ul>
                </div>
            </div>
            <div className={`${hambergur ? "showw" : "hidee"} hambergurMenu`}>
                <div className='row'>
                    <div className='leftMenu col-lg-6 col-md-6 col-sm-6 col-6'>
                        <h4>دسته بندی محصولات</h4>
                        <ul>
                            <li><Link to='/product/mensClothing' onClick={hambergurMenu}>لباس مردانه</Link></li>
                            <li><Link to='/product/mensClothing' onClick={hambergurMenu}>لباس زنانه</Link></li>
                            <li><Link to='/product/electronics' onClick={hambergurMenu}>لوازم الکترونیکی</Link></li>
                            <li><Link to='/product/jewelery' onClick={hambergurMenu}>جواهرات</Link></li>
                        </ul>
                    </div>
                    <div className='rightMenu col-lg-6 col-md-6 col-sm-6 col-6'>
                        <ul>
                            <li><Link to='/' onClick={hambergurMenu}>صفحه اصلی</Link></li>
                            <li><a href='#' onClick={hambergurMenu}>مشاوره رایگان</a></li>
                            <li><a href='#' onClick={hambergurMenu}>وبلاگ روز</a></li>
                            <li><a href='#' onClick={hambergurMenu}>درباره ما</a></li>
                            <li><a href='#' onClick={hambergurMenu}>ارتباط با ما</a></li>
                            <li><a href='#' onClick={hambergurMenu}>فروش ویژه</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;