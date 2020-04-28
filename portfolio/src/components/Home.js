import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Profile from './Profile'
import Project from './Project'
import Project2 from './Project2'
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';

const Home = () => {
    return (
        <div className="fullheight spreader">
            <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                <h1>Zayd Sarraj - Full Stack Developer</h1>
                <Col sm="3" className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                <div className="emaildiv">
                    <span className="email">@</span>
                </div>
            </Col>
            </Container>
        
            <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                <h2>Projects</h2>
                <Project />
                <Project3 />
                <Project2 />
                <Project5 />
                <Project4 />
            </Container>
        </div>
    )
}

export default Home