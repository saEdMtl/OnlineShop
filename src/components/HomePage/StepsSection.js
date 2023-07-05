import React from 'react';

//Css
import './stepsSection.css';

//React Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Assets
import steps from '../../assets/steps.jpg';
import basket from '../../assets/basket.png'


const StepsSection = () => {
    return (
        <div className='stepsSection'>
            <div className='container'>
                <h1>چگونه از سعیدمارکت خرید کنیم؟</h1>
                <div className='row'>
                    <div className='col-lg-5 col-md-5 col-sm-12 col-12'><img src={steps} alt='steps' /></div>
                    <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                        <Tabs>
                            <TabList>
                                <Tab>ورود یا ثبت نام در سایت</Tab>
                                <Tab>انتخاب محصولات دلخواه</Tab>
                                <Tab>چک کردن سبد خرید</Tab>
                                <Tab>پرداخت</Tab>
                            </TabList>

                            <TabPanel>
                                <p>در سایت سعیدمارکت ثبت نام کنید و یا در صورت داشتن حساب کاربری وارد شوید</p>
                                <button type='button' className='enter'>ورود / عضویت</button>
                            </TabPanel>
                            <TabPanel>
                                <p>بعد از ورورد میتوانید از محصولات دیدن کرده و در صورت تمایل آن را به سبد خرید خود اضافه کنید</p>
                            </TabPanel>
                            <TabPanel>
                                <p>سبد خرید خود را چک کنید که چیزی از قلم نیوفتاده باشه</p>
                                <button type='button' className='basket'><img src={basket} alt='basket' /></button><span>۰</span>
                            </TabPanel>
                            <TabPanel>
                                <p>در صورت تمایل به خرید محصولات انتخابی به درگاه پرداخت منتقل می شوید</p>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;