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
        <div className="container">
            <div className="row">
                {coctails.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title mb-3">{item.name}</h3>
                                <p className="card-text mb-2">Type: {item.type}</p>
                                <p className="card-text mb-4">Price: ${item.price}</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-danger btn-sm float-end" onClick={() => remove(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coctails;
