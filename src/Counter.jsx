import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./slice/Slice";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Counter = () => {
  const coctails = useSelector((state) => state.cartState.User);
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addItem({ val: coctails[id] }));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {coctails.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
              <div className="card shadow">
                <div className="card-body">
                  <h3 className="card-title mb-3">{item.name}</h3>
                  <p className="card-text mb-2">Type: {item.type}</p>
                  <p className="card-text mb-4">Price: ${item.price}</p>
                  <button
                    className="btn btn-primary btn-sm float-end"
                    onClick={() => addToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
