import React from 'react';
import {
    Container
} from 'reactstrap';


const Project3 = () => {


    return (
        <Container classNameName='text-center mx-auto py-2 border rounded border-dark shadow mt-3 whiteshade'>

            <div className="container-fluid">
                <div className="row portfolioRow" id="captClown">
                    <div className="col">
                        <div className="caption-clown-link appexample mx-auto my-3 card bg-transparent border-dark text-dark">
                            <img src="images/captClown.png" className="card-img rowimg" alt="caption-clown-app" />
                        </div>
                    </div>
                    <div className="col-3 text-center align-self-center">
                        <div className="rowtitle text-dark">
                            <h1 className="rowRepotitle caption-clown-link">Caption Clown</h1>
                            <p className="rowRepo" id="caption-clown-repo">Repository</p>
                        </div>
                        <div className="card bg-transparent mx-auto border-dark">
                            <div className="cardbkg card-body text-dark">
                                <h5 className="card-title">Primary Technologies</h5>
                                <p className="card-text">Javascript <br /> MySQL <br /> Sequelize <br /> Handlebars </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Project3;