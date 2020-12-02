import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';


    // Functional Component by Normal JS function definition
    function RenderCard({dish}){ // Instead of passing props object, just extract the property alone
        return (
            <Card>
                <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle tag='h2'>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    // Functional Component by Arrow function way
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderCard dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>
                </div>
                <div className="offset-md-2">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            </div>
        );
    }

export default Menu;