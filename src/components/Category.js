import React from 'react';
import AllCategory from './AllCategory';
import './Category.css';

function Category() {
    return (
        <div className='category'>
            <h1> All Category</h1>
            <div className='category__container'>
                <div className='category__wrapper'>
                    <ul className="category__items">
                        <AllCategory src='images/canned_goodz-600x600.jpg' text='Supermarket'
                            label='New'
                            path='/Shop'
                        />
                        <AllCategory src='images/frut_icnz1-600x600.jpg' text='Fruits & Vegetables'
                            label='New'
                            path='/Shop'
                        />
                        <AllCategory src='images/kitch_imgs_bg-600x600.jpg' text='Home Supply'
                            label='New'
                            path='/Shop'
                        />
                        <AllCategory src='images/beuty_bgz1-600x600.jpg' text='Personal Care'
                            label='New'
                            path='/Shop'
                        />
                        <AllCategory src='images/baby_toys_icoz-600x600.jpg' text='Baby & Toys'
                            label='New'
                            path='/Shop'
                        />
                    </ul>
                    <ul m-2 className="category__items">
                        <AllCategory src='images/veg_img_en.png'
                            path='/best-offers'
                        />
                        <AllCategory src='images/frut_img_eng.png'
                            path='/best-offers'
                        />
                    </ul>
                </div>
            </div>
        </div >
    );
}
export default Category;