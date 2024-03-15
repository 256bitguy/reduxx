import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./slice/Slice";
import Navbar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Counter = () => {
  const coctails = useSelector((state) => state.cartState.User);
  console.log(coctails)
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addItem({ val:  coctails[id] }));
  };

  return (
    <div  >
      <Navbar/>
     <Container>
      <Row>
     <Col>
     {coctails.map((item) => (
        <div className="card" key={item.id}>
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">Type: {item.type}</p>
          <p className="card-text">Price: ${item.price}</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(item.id)}>Add to Cart</button>
        </div>
      ))}</Col>
      </Row>
     </Container>
    </div>
  );
};

export default Counter;
