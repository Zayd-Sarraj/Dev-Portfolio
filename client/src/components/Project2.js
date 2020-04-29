import React from 'react';
import {
    Container, CardBody, CardText, Card, CardTitle, Row, Col
} from 'reactstrap';


const Project2 = (props) => {
    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
            <Row className="my-auto mx-2 py-2">
                <Col md="4" lg="3" >
                    <h2 className="mt-4 mb-4 mx-auto"><a className="text-dark textshadows" href="https://zayd-sarraj.github.io/Project-1/">Topiks</a></h2>
                    <Card color="transparent" className="border rounded border-dark mx-auto mt-4 shadow">
                        <CardBody className="whiteshade">
                            <CardTitle><b>Primary Technologies</b></CardTitle>
                            <CardText>Javascript</CardText>
                            <CardText>HTML</CardText>
                            <CardText>Ajax</CardText>
                            <CardText>Web APIs</CardText>
                        </CardBody>
                    </Card>
                    <p className="my-4"><a href="https://github.com/Zayd-Sarraj/Project-1" className="mx-auto text-dark textshadows">Visit Repo</a></p>
                </Col>
                <Col className="mx-1 my-auto">
                    <Card className="border rounded border-dark mx-auto my-auto shadow">
                        <img src="images/topiksSS.png" className="card-img" alt="topiks-app" />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Project2;