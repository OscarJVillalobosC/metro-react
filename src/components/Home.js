import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,} from 'reactstrap';


function RenderCard({ item }) {

    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="col-md m-1">
                <RenderCard item={props.fact} />
            </div>
            <div className="col-md m-1">
                <RenderCard item={props.covid} />
            </div>
            <div className="col-md m-1">
                <RenderCard item={props.equity} />
            </div>
        </div>
    );
}



export default Home;