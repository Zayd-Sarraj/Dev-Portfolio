import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Project from './Project'
import Project2 from './Project2'
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';

const Home = (props) => {
    return (
        <div className="fullheight spreader px-3">
            <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                <h1>Zayd Sarraj - Full Stack Developer</h1>
                <Row className="mx-5">
                    <Col sm="3" className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                        <div className="textshadows"><a href="https://github.com/Zayd-Sarraj" class="fa fa-github text-dark"></a></div>
                    </Col>
                    <Col sm="3" className='text-center mx-1 py-2 border rounded border-dark shadow mt-3 whiteshade'>
                        <div className="emaildiv">
                            <span className="email textshadows">@</span>
                        </div>
                    </Col>
                    <Col sm="3" className='text-center mr-1 py-2 border rounded border-dark shadow mt-3 whiteshade'>
                        <div className="textshadows"> <a href="https://www.linkedin.com/in/zayd-sarraj-445930196/" class=" text-dark mx-2 fa fa-linkedin"></a></div>
                    </Col>
                    <Col sm="3" className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                        <div className="textshadows"><a href="http://zayd-sarraj.herokuapp.com/resume/ZS_Resume_2020.pdf" class="text-dark"><b>Resume</b></a></div>
                    </Col>
                </Row>
            </Container>

            <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
                <h2>Projects</h2>
                <Project />
                <Project3 value={props.value} />
                <Project2 />
                <Project5 value={props.value} />
                <Project4 />
            </Container>
        </div>
    )
}

export default Home