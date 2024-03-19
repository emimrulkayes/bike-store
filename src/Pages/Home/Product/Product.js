import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const { _id, name, description, price, img, author, quantity} = product;


    const navigate = useNavigate();

    const navigateToStoreProduct = id => {
        navigate(`/update/${id}`);
    }

    return (
        <Col xs={12} sm={6} md={6} lg={4} >
        <CardGroup>
            <Card className='product-card mb-4'>
                <Card.Img className='product-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <p className='text-info mb-1'> <strong>Price: <span className='text-dark'>&#36;</span>{price}</strong> </p>
                    <p className='quantity'> Quantity: <strong>{quantity}</strong> </p>
                    <p className='author'> <span>Author:</span> {author} </p>
                    <Card.Text>
                        {description} 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => navigateToStoreProduct(_id)} className='update-btn' type="button">Stock Update</button>
                </Card.Footer>
            </Card>
        </CardGroup>
    </Col>
    );
};

export default Product;