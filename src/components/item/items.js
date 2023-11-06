import React from 'react';


const Items = (props) => {
    const { items, del, increament, decreament } = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return (
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p>
                        <button onClick={() => increament(item.id)}> + </button>
                        {item.quantity}
                        <button onClick={() => decreament(item.id)}> - </button>
                    </p>
                    <p>Total: {item.price * item.quantity}</p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total of type</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items