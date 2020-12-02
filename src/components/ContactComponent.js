import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default function Contact(props) {
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
        </div>
    );
}