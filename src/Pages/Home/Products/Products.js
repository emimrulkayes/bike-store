import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (

        <Container className='pt-5'>
            <div className='section-top mt-5 mb-5'>
                <h2 className=' section-title'> STOCK <span className='text-warning'>PRODUCTS</span></h2>
            </div>
            <Row>
                {
                    products.map(product =>  
                        <Product
                            key={product._id}
                            product = {product}
                        ></Product>
                    )
                }
            </Row>
        </Container>
 
    );
};

export default Products;