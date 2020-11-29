import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    comments(comments){
        if (comments != null){
            return comments.map(comment => (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--- {comment.author}</li>
                        <li>{comment.date}</li>
                    </ul>
            ))
        }else{
            return (
                <p>No Comments</p>
            )
        }
    }

    render() {
        const dish = this.props.dish;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.comments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;