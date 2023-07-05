import React, { useContext } from 'react';

//Context
import { ProductsContext } from '../../context/ProductsContextProvider';
import { CartContext } from '../../context/CartContextProvider';

//React router dom
import { useParams } from 'react-router-dom';
import Categories from './Categories';

//Css
import './productDetails.css'

//Assets
import bin from '../../assets/bin.png'

const ProductDetails = () => {

    const params = useParams();
    const id = params.id;
    const products = useContext(ProductsContext);
    const product = products[id - 1];

    const isInCart = (state, id) => {
        const result = !!state.selectedItems.find(item => item.id === id);
        return result;
    }

    const quantityCount = (state, id) => {
        const index = state.selectedItems.findIndex(item => item.id === id);
        if (index === -1) {
            return false
        } else {
            return state.selectedItems[index].quantity;
        }
    }

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className='productDetail'>
            <div className='container'>
                <div className='row details'>
                    <Categories className='col-lg-2 col-md-2 col-sm-2 col-2' />
                    <div className='col-lg-10 col-md-10 col-sm-10 col-10'>
                        <div className='row'>
                            <div className='productDescription col-lg-7 col-md-7 col-sm-7 col-7'>
                                <h4>{product.title} </h4>
                                <span>{product.category}</span>
                                <p>{product.description}</p>
                                <div className='price'>
                                    <div><h5>{product.price} $</h5></div>
                                    <div className='buttons'>
                                        {
                                            isInCart(state, product.id) ?
                                                <button onClick={() => dispatch({ type: 'INCREASE', payload: product })} className='increase'>+</button> :
                                                <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })} className='add'>Add to cart</button>
                                        }
                                        {quantityCount(state, product.id) > 0 && <span>{quantityCount(state, product.id)}</span>}
                                        {quantityCount(state, product.id) === 1 && <button onClick={() => dispatch({ type: 'REMOVE', payload: product })} className='remove'><img src={bin} alt='remove' /></button>}
                                        {quantityCount(state, product.id) > 1 && <button onClick={() => dispatch({ type: 'DECREASE', payload: product })} className='decrease'>-</button>}
                                    </div>
                                </div>
                            </div>
                            <div className='productImage col-lg-5 col-md-5 col-sm-5 col-5'>
                                <img src={product.image} alt='product' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;