import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


    const RenderCard = ({dish}) => {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}){
        const options = { year:'numeric', month: 'short', day: '2-digit' }
        if (comments != null){
            return comments.map(comment => (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-IN', options).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
            ))
        }else{
            return (
                <p>No Comments</p>
            )
        }
    }

    const DishDetail =  ({dish, comment}) => {
        if (dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3><hr/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderCard dish={dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments={comment} />
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div>{dish.name}</div>
            );
        }
    }

export default DishDetail;