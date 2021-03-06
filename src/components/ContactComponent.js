import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import {Form, Label, Input, FormGroup, Col} from 'reactstrap';


export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Data" + JSON.stringify(this.state))
    }

    render() {
        return (
            <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Contact Us</h2> <hr/><br/><br/>
                    </div>
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-5 offset-sm-1">
                        <h5>Our Address</h5>
                        <address className="address" style={{'fontSize':'100%'}}>
                          121, Clear Water Bay Road<br/>
                          Clear Water Bay, Kowloon<br/>
                          HONG KONG<br/>
                          <i className="fa fa-phone fa-lg"></i> : +852 1234 5678<br/>
                          <i className="fa fa-fax fa-lg"></i> : +852 8765 4321<br/>
                          <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:confusion@food.net">confusion@food.net</a>
                       </address>
                    </div>
                    <div className="col-12 col-sm-5 offset-sm-1">
                        <h5>Map of our location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1 mt-4">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+9876543210"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="skype"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:my@my.com"><i className="fa fa-envelope"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                        value={this.state.firstname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number"
                                        value={this.state.telnum} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email"
                                        value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked={this.state.agree} onChange={this.handleInputChange} /> &nbsp;
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType} onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feeback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" id="message" 
                                        rows="12" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 3, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
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