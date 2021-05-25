import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";
import React, {Fragment} from "react";

const CardIsi = (props) => (
    <Fragment>
        <Col md="3">
            <Card className="main-card mb-3">
                <CardImg top width="20%"
                         src={props.image}
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.subtitle}</CardSubtitle>
                </CardBody>
                <CardFooter>
                    <div className='align-content'>
                        <p>Note: This event created by PSM</p>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
);

export default CardIsi;
