import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Blog = ({blog}) => {
    const {id, name, img, description} = blog;
    const navigate = useNavigate();

    const navigateToBlogDetail = id => {
        navigate(`/blog/${id}`);
    }
    
    return (
        <Col xs={12} sm={6} md={6} lg={4} >
            <Card className='service-card mb-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> {description}  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => navigateToBlogDetail(id)} className='update-btn' type="button"> See More </button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Blog;