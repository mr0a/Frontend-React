import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

    // Functional Component by Normal JS function definition
    function RenderCard({dish, onClick}){ // Instead of passing props object, just extract the property alone
        return (
            <Card onClick={() => onClick(dish.id) }>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle tag='h2'>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    // Functional Component by Arrow function way
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderCard dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="offset-md-2">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            </div>
        );
    }

export default Menu;