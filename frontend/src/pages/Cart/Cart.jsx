import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate()
  const url = 'http://localhost:4000'
  
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
          if (cartItems[item._id] > 0) {
            console.log("cartItems", cartItems)
            return (
              <div key={index._id} className='cart-items-title cart-items-item'>
                <img src={url + "/images/"+ item.image} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
          <div className='cart-total'>
              <h2>Cart Total</h2>
              <div>
                <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <p>Delivery Fee</p>
                  <p>${2}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                   <b>Total</b>
                   <b>${getTotalCartAmount()+2}</b>
                </div>
              </div>
                <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cart-promocode'>
              <p>If you have a promo code, Enter it here</p>
              <div className='cart-promocode-input'>
                  <input type='text' placeholder="promo-code" />
                  <button>Submit</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
