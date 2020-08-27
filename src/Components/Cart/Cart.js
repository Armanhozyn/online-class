import React from 'react';

const Cart = (props) => {
    const purchase = props.purchase;
    const totalPrice = purchase.reduce((total, p) => total + p.price, 0);

    const formatPrice = (num) => {
        num = parseFloat(num).toFixed(2)
        return num;
    }
    return (
        <div className="mt-3 bg-dark text-white p-3 rounded">
            <h2>Purchase Summery</h2>
            <h5>Course Item : {purchase.length}</h5>
            <h5>Course Price : {formatPrice(totalPrice)}   </h5>
        </div>
    );
};

export default Cart;