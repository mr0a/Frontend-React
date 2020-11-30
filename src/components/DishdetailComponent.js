import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderComments(comments){
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

    render() {
        const dish = this.props.dish;
        if (dish != null){
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
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;