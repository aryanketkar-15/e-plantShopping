import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem, updateQuantity, selectCartItems, selectCartTotal } from './CartSlice.jsx';

export default function CartItem() {
  const cart = useSelector(selectCartItems);
  const navigate = useNavigate();
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleIncrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  const handleRemove = (item) => dispatch(removeItem(item.name));
  const handleContinueShopping = (e) => { e.preventDefault(); navigate('/plants'); };

  if (!cart.length) return <main className="cart-page empty-cart"><span className="empty-icon">♧</span><span className="eyebrow green">YOUR LITTLE GREEN CORNER</span><h1>Your cart is <em>waiting.</em></h1><p>Looks like you haven't found your new leafy friend yet.</p><button type="button" className="button button-dark get-started-button" onClick={handleContinueShopping}>Continue Shopping ↗</button></main>;

  return <main className="cart-page">
    <div className="cart-heading"><span className="eyebrow green">A GOOD CHOICE</span><h1>Your plant <em>basket.</em></h1><p>{cart.reduce((sum, item) => sum + item.quantity, 0)} leafy friends are ready for a new home.</p></div>
    <div className="cart-layout"><section className="cart-container">{cart.map(item => (
      <article className="cart-row" key={item.id}>
        <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=260&q=80`} alt={item.name}/>
        <div className="cart-product"><span className="plant-category">{item.category}</span><h3>{item.name}</h3><span className="cart-price">${(item.cost ?? item.price).toFixed(2)} each</span><button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button></div>
        <div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => handleDecrement(item)}>-</button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => handleIncrement(item)}>+</button></div>
        <strong className="line-total">${((item.cost ?? item.price) * item.quantity).toFixed(2)}</strong>
      </article>
    ))}
    <div className="cart-actions"><button type="button" className="continue-shopping-button get-started-button" onClick={handleContinueShopping}>Continue Shopping</button><button className="remove-link" onClick={() => dispatch(clearCart())}>Clear Cart</button></div></section>
    <aside className="order-summary"><span className="eyebrow green">THE TOTAL</span><h2>Order summary</h2><div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><div><span>Delivery</span><strong>Free</strong></div><div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div><button className="button button-dark checkout-button" onClick={() => window.alert('Coming Soon! Checkout is a demo and no payment has been taken.')}>Checkout</button><p>Checkout is currently a demo. No payment will be collected.</p></aside></div>
  </main>;
}
