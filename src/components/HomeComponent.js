import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';


function RenderCard({item}){
    return(
        <div className="col-12 col-md m-1">
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle tag="h6">{item.designation}</CardSubtitle>: null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <RenderCard item={props.dish} />
                <RenderCard item={props.promotion} />
                <RenderCard item={props.leader} />
            </div>
        </div>
    );
}

export default Home;