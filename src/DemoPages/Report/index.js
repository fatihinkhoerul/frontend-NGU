import React, {Fragment, useState} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

import ReactTable from "react-table";
import PageTitle from '../../Layout/AppMain/PageTitle';
import AppHeader from '../../Layout/AppHeader'
import axios from "axios";
import {makeData} from "../Tables/DataTables/Examples/utils";

class Report extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    getData(){
        axios.get('http://localhost:1212/data')
            .then(res => {
            this.setState({data:res.data})
            console.log(res.data)
        })
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        const {data} = this.state;
        console.log("ini datanya", data);
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
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <ReactTable
                                                data={data}
                                                filterable
                                                columns={[{
                                                    columns: [
                                                        {
                                                            Header: "Title",
                                                            accessor: "age"
                                                        },
                                                        {
                                                            Header: "Location",
                                                            accessor: "lastname"
                                                        },
                                                        {
                                                            Header: "Date",
                                                            accessor: "lastname"
                                                        },
                                                        {
                                                            Header: "Participants",
                                                            accessor: "lastname"
                                                        },
                                                        {
                                                            Header: "Note",
                                                            accessor: "lastname"
                                                        }
                                                    ]
                                                }]}
                                                defaultPageSize={10}
                                                className="-striped -highlight"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default Report;