import React from 'react';
import {
    Container
} from 'reactstrap';


const Project2 = () => {


    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>

            <div className="container-fluid">
                <div className="row portfolioRow" id="topiks-bg">
                    <div className="col-3 text-center align-self-center">
                        <div className="rowtitle text-dark">
                            <h1 className="rowRepotitle topiks-link">Topiks</h1>
                            <p className="rowRepo" id="topiks-repo">Repository</p>
                        </div>
                        <div className="card bg-transparent mx-auto border-dark">
                            <div className="cardbkg card-body text-dark">
                                <h5 className="card-title">Primary Technologies</h5>
                                <p className="card-text">Javascript <br /> HTML <br /> CSS <br /> External APIs </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="topiks-link appexample mx-auto my-3 card bg-transparent border-dark text-dark">
                            <img src="images/topiksSS.png" className="card-img rowimg" alt="topiks-app" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Project2;