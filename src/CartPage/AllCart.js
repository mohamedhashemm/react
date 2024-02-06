import React from 'react'
import Navbar from '../HomePage/Navbar';
import { CartProvider,useCart } from 'react-use-cart';

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart,
      totalItems,
      cartTotal,
    } = useCart();
  
    if (isEmpty){
       return <h2 className="text-center">Your cart is empty</h2>;
  }
    return (
      <div>
        <h1 className="text-center">Cart ({totalUniqueItems})
        <button className="btn btn-danger mx-2" onClick={()=>emptyCart()}>Delete All</button>
        </h1>
  <div className="container">
    <div className="row">
      <div className="col-md-10 m-auto">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Operation</th>
            </tr>
          </thead>
  
          <tbody>
    {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price*item.quantity}</td>
              <td>
              <button
              className="btn btn-warning"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
              className="btn btn-success mx-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
  
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalItems}</td>
            <td>{cartTotal}</td>
            <td>-----------------------------</td>
          </tr>
          </tbody>
        
        </table>
      </div>
    </div>
  </div>
      </div>
    );
  }
  

function AllCart() {
  return (
    <CartProvider>
        <Navbar/>
  <Cart/>
    </CartProvider>
  )
}

export default AllCart
