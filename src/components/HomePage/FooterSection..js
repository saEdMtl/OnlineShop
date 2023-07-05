import React, { useState } from 'react';

//Css
import './footerSection.css'

//Assets
import instagram from '../../assets/instagram.png';
import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';

const FooterSection = () => {

    return (
        <div className='footerSection'>
            <div className='container'>
                <div className='row'>
                    <div className='contactUs col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div>
                            <h3>تماس با ما : 09012993631</h3>
                        </div>
                        <div className='socialMedia'>
                            <h3>سعیدمارکت در شبکه های اجتماعی</h3>
                            <img src={instagram} alt='instagram' />
                            <img src={telegram} alt='telegram' />
                            <img src={twitter} alt='twitter' />
                        </div>
                    </div>
                    <div className='left col-lg-5 col-md-5 col-sm-6 col-6'>
                        <div className='company'>
                            <h3>saEdMarket</h3>
                        </div>
                        <div className='aplication'>
                            <strong>دانلود اپلیکیشن سعیدمارکت</strong>
                            <p>دریافت از کافه بازار</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-1 col-sm-0 col-0 spacee' ></div>
                    <div className='right col-lg-4 col-md-6 col-sm-6 col-6'>
                        <div>
                            <h6>راهنمای مشتریان</h6>
                            <ul>
                                <li><a href='#'>آموزش تصویری خرید از سایت</a></li>
                                <li><a href='#'>دسته بندی محصولات</a></li>
                                <li><a href='#'>سبد خرید</a></li>
                                <li><a href='#'>شعب خرید حضوری</a></li>
                                <li><a href='#'>ورود / عضویت</a></li>
                                <li><a href='#'>شرکت های طرف قرارداد</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6>سعیدمارکت</h6>
                            <ul>
                                <li><a href='#'>درباره ما</a></li>
                                <li><a href='#'>تماس با ما</a></li>
                                <li><a href='#'>داستان سعید مارکت</a></li>
                                <li><a href='#'>فرهنگ ما</a></li>
                                <li><a href='#'>مزایای شغلی ما</a></li>
                                <li><a href='#'>وبلاگ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterSection;