import React from 'react';
import {
  Container
} from 'reactstrap';


const Project = () => {


  return ( 
    <Container className='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>

    <div className="container-fluid">
        <div className="row portfolioRow" id="gamenation-bg">
             <div className="col-3 text-center align-self-center">
                <div className="rowtitle text-dark">
                    <h1 className="rowRepotitle gamenation-link">GameNation</h1>
                    <p className="rowRepo" id="gamenation-repo">Repository</p>
                </div>
                <div className="card bg-transparent mx-auto border-dark">
                    <div className="cardbkg card-body text-dark">
                        <h5 className="card-title">Primary Technologies</h5>
                        <h6 className="card-subtitle">Full Stack</h6>
                        <p className="card-text">React <br /> Express <br /> MongoDB <br /> Node.js </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="gamenation-link appexample mx-auto my-3 card bg-transparent border-dark text-dark">
                    <img src="images/gameNationss.png" className="card-img rowimg" alt="gamenation-app" />
                </div>
            </div>
        </div>
    </div>
</Container>
    )}

export default Project;