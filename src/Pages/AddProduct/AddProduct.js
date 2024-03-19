import React from 'react';
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <Container className='form-container container'>
            <Row className='login-form'>
                <h2 className='form-title text-center mb-4'>Please Add a Product</h2>
                <Form className='p-0'>
                    <Form.Group className="input-group mb-3 " controlId="formBasicCategory">
                        <Form.Control type="text" className='rounded' placeholder='Category' required/>
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="formBasicName">
                        <Form.Control type="name" className='rounded' placeholder='Name' required/>
                    </Form.Group> 

                    <Form.Group className="input-group mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" className='rounded' placeholder='Email' required/>
                    </Form.Group> 

                    <Form.Group className="input-group mb-4" controlId="formBasicName">
                        <Form.Control type="text" className='rounded' placeholder='Supplier' required/>
                    </Form.Group> 

                    <Form.Group className="input-group mb-4" controlId="formBasicNumber">
                        <Form.Control type="number" className='rounded' placeholder='Quantity' required/>
                    </Form.Group> 

                    <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                        <Form.Control as="textarea" />
                    </FloatingLabel>

                    <Form.Group className="input-group mb-4" controlId="formBasicNumber">
                        <Form.Control type="number" className='rounded' placeholder='Price' required/>
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="formBasicUrl">
                        <Form.Control type="url" className='rounded' placeholder='Photo URL' required/>
                    </Form.Group> 


                    <Button className='form-submit' variant="primary" type="submit"> Add Product </Button>
                </Form>
               
            </Row>
        </Container>
    );
};

export default AddProduct;