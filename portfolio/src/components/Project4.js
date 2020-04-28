import React from 'react';
import {
    Container
} from 'reactstrap';


const Project4 = () => {


    return (
        <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>

            <div className="container-fluid">
                <div className="row portfolioRow" id="teamprofile">
                    <div className="col-3 text-center align-self-center">
                        <div className="rowtitle text-dark">
                            <h1 className="rowRepotitle teamprofile-link">Team Profile Generator</h1>
                            <p className="rowRepo" id="teamprofile-repo">Repository</p>
                        </div>
                        <div className="card mx-auto bg-transparent border-dark">
                            <div className="card-body text-dark">
                                <h5 className="card-title">Primary Technologies</h5>
                                <p className="card-text">Javascript <br /> Node.js <br /> HTML5 <br /> CSS </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="teamprofile-link appexample bg-transparent border-dark mx-auto my-3 card">
                            <img src="images/teamprofile.png" className="card-img rowimg" alt="teamprofile-app" />
                </div>
                        </div>
                    </div>
                </div>
</Container>
    )}

export default Project4;