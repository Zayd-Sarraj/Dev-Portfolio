import React from 'react';
import {
    Container
} from 'reactstrap';


const Project5 = () => {


    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 mb-2 whiteshade'>

            <div className="container-fluid">
                <div className="row portfolioRow" id="notetaker">
                    <div className="col">
                        <div className="note-taker-link appexample mx-auto my-3 card bg-transparent border-dark text-white">
                            <img src="images/notetakerss.png" className="card-img rowimg" alt="note-taker-app" />
                        </div>
                    </div>
                    <div className="col-3 text-center align-self-center">
                        <div className="rowtitle">
                            <h1 className="rowRepotitle note-taker-link">Note Taker</h1>
                            <p className="rowRepo" id="note-taker-repo">Repository</p>
                        </div>
                        <div className="card bg-transparent mx-auto border-dark">
                            <div className="cardbkg card-body text-dark">
                                <h5 className="card-title">Primary Technologies</h5>
                                <p className="card-text">Javascript <br /> Heroku.js <br /> Node.js <br /> HTML5 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Project5;