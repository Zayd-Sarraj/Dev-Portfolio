import React from 'react';
import {
    Container, CardBody, CardText, Card, CardTitle, Row, Col
} from 'reactstrap';


const Project4 = () => {
    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
            <Row className="my-auto mx-2 py-2">
                <Col md="4" lg="3" >
                    <h2 className="mt-4 mb-4 mx-auto"><a className="text-dark textshadows" href="https://zayd-sarraj.github.io/Team-profile-generator/output/teamprofile.html">Team Profile Generator</a></h2>
                    <Card color="transparent" className="border rounded border-dark mx-auto mt-4 shadow">
                        <CardBody className="whiteshade">
                            <CardTitle><b>Primary Technologies</b></CardTitle>
                            <CardText>Javascript</CardText>
                            <CardText>HTML</CardText>
                            <CardText>Node</CardText>
                            <CardText>CSS</CardText>
                        </CardBody>
                    </Card>
                    <p className="my-4"><a href="https://github.com/Zayd-Sarraj/Team-profile-generator" className="mx-auto text-dark textshadows">Visit Repo</a></p>
                </Col>
                <Col className="mx-1 my-auto">
                    <Card className="border rounded border-dark mx-auto my-auto shadow">
                        <img src="images/teamprofile.png" className="card-img" alt="teamprofile-app" />
                    </Card>
                </Col>
            </Row>
        </Container>
    )}

export default Project4;