import React, { useContext, useEffect } from 'react';

//Css
import './cart.css'

//Context
import { CartContext } from '../../context/CartContextProvider';

//Assets
import bin from '../../assets/bin.png'

const Cart = () => {

    const { state, dispatch } = useContext(CartContext);
    const selectedProducts = state.selectedItems;

    const shorten = (title) => {

        const split = title.split(" ");
        const newTitle = `${split[0]} ${split[1]} ${split[2]} ${split[3]} ${split[4]}`
        return newTitle;

    }

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

    return (
        <div className='cart'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        {
                            selectedProducts.map(product =>
                                <div key={product.id} className='items'>
                                    <div>
                                        <h3>{shorten(product.title)}</h3>
                                        <span>{product.catrgory}</span>
                                    </div>
                                    <div className='buttons'>
                                        {
                                            isInCart(state, product.id) ?
                                                <button onClick={() => dispatch({ type: 'INCREASE', payload: product })} className='increase'>+</button> :
                                                <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })} className='add'>Add to cart</button>
                                        }
                                        <p>{product.quantity}</p>
                                        {quantityCount(state, product.id) === 1 && <button onClick={() => dispatch({ type: 'REMOVE', payload: product })} className='remove'><img src={bin} alt='remove' /></button>}
                                        {quantityCount(state, product.id) > 1 && <button onClick={() => dispatch({ type: 'DECREASE', payload: product })} className='decrease'>-</button>}
                                    </div>
                                    <div>
                                        <strong>{(product.price * product.quantity).toFixed(2)} $</strong>
                                    </div>
                                    <div>
                                        <img src={product.image} alt='product' />
                                    </div>
                                </div>
                            )
                        }
                        <div className='total'>
                            <h4>Number of items : <span>{state.itemsCounter}</span></h4>
                            <h6>Total price is : <span>{state.total} $</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;