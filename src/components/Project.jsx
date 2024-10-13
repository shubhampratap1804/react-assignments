import React from 'react'
import {Container, Col, Card, Row} from 'react-bootstrap';
 import project from '../project.avif';
import { Link } from 'react-router-dom';

const Project = () => {
    const projects = [
      { id: 1, title: 'Project Tesla Model R50N91', description: 'A spaceship 50000 times faster than Sound.', image: 'project1.jpg' },
      { id: 2, title: 'Project Unicorn Module UTR990', description: 'A spacecraft meant to explore Jupiter and Saturn.', image: 'project2.jpg' }
    ];


  return (
    <Container className='p-4'>
        <Row>
            {projects && projects.map((item, index) => (
                <Col key={index} md={4} className='mb-4'>
                    <Card>
                        <Card.Img variant='top' src={project}/>
                        <Card.Body>    
                            <Card.Title>{item.title} </Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                         </Card.Body>
                         <Card.Footer>
                            <Link to={`/project/${item.id}`} 
                                    state={{ project: item }}>View Details
                            </Link>
                         </Card.Footer>
                     </Card>
                </Col>
            ))}
        </Row>   
    </Container>
  )
}

export default Project
