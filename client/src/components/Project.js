import React from 'react';
import {
    Container, CardBody, CardSubtitle, CardText, Card, CardTitle, Row, Col
} from 'reactstrap';


const Project = () => {
    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
            <Row className="my-auto mx-2 py-2">
                <Col md="4" lg="3" >
                    <h2 className="mt-auto mb-2 mx-auto"><a className="text-dark textshadows" href="https://gamenationapp.herokuapp.com/">GameNation</a></h2>
                    <Card color="transparent" className="border rounded border-dark mx-auto shadow">
                        <CardBody className="whiteshade">
                            <CardTitle><b>Primary Technologies</b></CardTitle>
                            <CardSubtitle className="mb-1"><b>Full Stack</b></CardSubtitle>
                            <CardText>React</CardText>
                            <CardText>Express</CardText>
                            <CardText>MongoDB</CardText>
                            <CardText>Node.js</CardText>
                        </CardBody>
                    </Card>
                    <p className="my-3"><a href="https://github.com/Zayd-Sarraj/Project-3" className="mx-auto text-dark textshadows">Visit Repo</a></p>
                </Col>
                <Col className="mx-1 my-auto">
                    <Card className="border rounded border-dark mx-auto my-auto shadow">
                        <img src="images/gameNationss.png" className="card-img" alt="gamenation-app" />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;