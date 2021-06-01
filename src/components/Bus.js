import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Bus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            From: '',
            To: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Bus Routes</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Choose Your Route</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="From" md={2}>From</Label>
                                <Col md={10}>
                                    <Input type="text" id="From" from="From"
                                        placeholder="Starting Point"
                                        value={this.state.From}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="To" md={2}>To</Label>
                                <Col md={10}>
                                    <Input type="text" id="To" to="To"
                                        placeholder="Destination"
                                        value={this.state.To}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="Plan my trip" color="secondary">
                                        Plan My Trip
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Bus ;