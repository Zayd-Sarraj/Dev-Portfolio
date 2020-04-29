import React from 'react';
import {
    Container, CardBody, CardText, Card, CardSubtitle, CardTitle, Row, Col
} from 'reactstrap';



const Project5 = (props) => {
    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>
            <Row className="my-auto mx-2 py-2">
                {props.value.width > 768 &&
                    <Col className="mx-1 my-auto">
                        <Card className="border rounded border-dark mx-auto my-auto shadow">
                            <img src="images/notetakerss.png" className="card-img" alt="note-taker-app" />
                        </Card>
                    </Col>}
                <Col md="4" lg="3" >
                    <h2 className="my-5 mx-auto"><a className="text-dark textshadows" href="https://sleepy-harbor-86048.herokuapp.com/">Note Taker App</a></h2>
                    <Card color="transparent" className="border rounded border-dark mx-auto mt-5 shadow">
                        <CardBody className="whiteshade">
                            <CardTitle><b>Primary Technologies</b></CardTitle>
                            <CardText>Javascript</CardText>
                            <CardText>Node</CardText>
                            <CardText>HTML</CardText>
                            <CardText>Heroku</CardText>
                        </CardBody>
                    </Card>
                    <p className="my-5"><a href="https://github.com/Zayd-Sarraj/Note-taker" className="mx-auto text-dark textshadows">Visit Repo</a></p>
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

export default Project5;