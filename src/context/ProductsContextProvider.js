import React, { createContext, useEffect, useState } from 'react';

//Api
import { getProducts } from '../servises/Api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();

    }, [])

    return (
        <div>
            <ProductsContext.Provider value={products }>
                {children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductsContextProvider;