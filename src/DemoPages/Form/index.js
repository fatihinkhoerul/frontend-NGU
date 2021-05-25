import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {
    Button, Form,
    FormGroup, Label,
    Input, FormText,
    Row, Col,
    Card, CardBody,
    CardTitle, Container,
} from 'reactstrap';
import AppHeader from "../../Layout/AppHeader";

import AppFooter from "../../Layout/AppFooter";

function NamaLabel(props) {
    return <label>{props.name}</label>;
}

const FormData = () => {
    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className='app-main'>
                    <div className='app-main__inner'>
                        <Container fluid>
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Add Event</CardTitle>
                                            <Form>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Title'/>
                                                            <Input type="text" name="title" id="title"
                                                                   placeholder="Title"/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Location'/>
                                                            <Input type="text" name="location" id="location"
                                                                   placeholder="Location"/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Participant'/>
                                                            <Input type="text" name="participant" id="participant"
                                                                   placeholder="Participant"/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Date'/>
                                                            <Input type="date" name="date" id="date"
                                                                   placeholder="Date" required/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <NamaLabel name='Note'/>
                                                    <Input type="textarea" name="note" id="note"
                                                           placeholder="note" required/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="exampleFile">File</Label>
                                                    <Input type="file" name="file" id="file"/>
                                                </FormGroup>
                                                <Button type="button" color="primary" className="mt-1">Submit</Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <AppFooter/>
            </CSSTransitionGroup>
        </Fragment>
    );
};

export default FormData;