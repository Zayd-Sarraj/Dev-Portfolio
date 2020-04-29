import React from 'react';
import {
    Container, CardBody, CardText, Card, CardSubtitle, CardTitle, Row, Col
} from 'reactstrap';



const Project3 = (props) => {
    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
            <Row className="my-auto mx-2 py-2">
                {props.value.width > 768 &&
                <Col className="mx-1 my-auto">
                    <Card className="border rounded border-dark mx-auto my-auto shadow">
                        <img src="images/captClown.png" className="card-img" alt="topiks-app" />
                    </Card>
                </Col>}
                <Col md="4" lg="3" >
                    <h2 className="mt-4 mb-4 mx-auto"><a className="text-dark textshadows" href="https://gamenationapp.herokuapp.com/">Caption Clown</a></h2>
                    <Card color="transparent" className="border rounded border-dark mx-auto mt-4 shadow">
                        <CardBody className="whiteshade">
                            <CardTitle><b>Primary Technologies</b></CardTitle>
                            <CardSubtitle className="mb-1"><b>Full Stack</b></CardSubtitle>
                            <CardText>Sequelize</CardText>
                            <CardText>MySQL</CardText>
                            <CardText>Handlebars</CardText>
                            <CardText>Javascript</CardText>
                        </CardBody>
                    </Card>
                    <p className="my-4"><a href="https://github.com/Zayd-Sarraj/Project-2" className="mx-auto text-dark textshadows">Visit Repo</a></p>
                </Col>
                {props.value.width < 769 &&
                <Col className="mx-1 my-auto">
                    <Card className="border rounded border-dark mx-auto my-auto shadow">
                        <img src="images/captClown.png" className="card-img" alt="topiks-app" />
                    </Card>
                </Col>}
            </Row>
        </Container>
    )
}

export default Project3;