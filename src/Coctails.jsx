import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './slice/Slice';

const Coctails = () => {
    const coctails = useSelector((state) => state.cartState.cartitems);
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeItem({ id: id }));
    };

    return (
        <div className="coctails-container">
            {coctails.map((item, index) => (
                <div className="coctail-card" key={index}>
                    <div className="card-content">
                        <h3 className="card-title">{item.name}</h3>
                        <p className="card-text">Type: {item.type}</p>
                        <p className="card-text">Price: ${item.price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="remove-btn" onClick={() => remove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Coctails;
