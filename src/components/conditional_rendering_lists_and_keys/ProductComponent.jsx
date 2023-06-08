import React from 'react';
import { Button } from 'react-bootstrap';

const ProductComponent = (props) => {

    const imgStyle = {
        height: '300px',
      };
  return (

        <div className="card mb-3 col-4">
            <img className="card-img-top" style={imgStyle} src={props.products.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.products.title}</h5>
                <p className="card-text">{props.products.description}</p>
                <Button disabled >{props.products.price}$</Button>
            </div>
            <div className="card-footer">
                <small className="text-muted">Category : {props.products.category}</small>
            </div>
        </div>
    
  )
}

export default ProductComponent