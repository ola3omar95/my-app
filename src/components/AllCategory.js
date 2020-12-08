import React from 'react';
import { Link } from 'react-router-dom';

function AllCategory(props) {
    return (
        <>
            <li className="category__item">
                <Link className='category__item__link' to={ props.path }>
                    <figure className='category__item__pic-wrap' >
                        <img className='category__item__img' alt='supermarket-cat' src={ props.src } />
                    </figure>
                    <div className="category__item__info">
                        <h5 className='category__item__text'>
                            { props.text }
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default AllCategory;