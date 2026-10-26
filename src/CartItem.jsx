import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart, selectCartItems, selectCartTotal } from './CartSlice.jsx';

export default function CartItem() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  if (!items.length) return <main className="cart-page empty-cart"><span className="empty-icon">♧</span><span className="eyebrow green">YOUR LITTLE GREEN CORNER</span><h1>Your cart is <em>waiting.</em></h1><p>Looks like you haven't found your new leafy friend yet.</p><Link to="/plants" className="button button-dark">Explore plants ↗</Link></main>;
  return <main className="cart-page">
    <div className="cart-heading"><span className="eyebrow green">A GOOD CHOICE</span><h1>Your plant <em>basket.</em></h1><p>{items.reduce((sum, item) => sum + item.quantity, 0)} leafy friends are ready for a new home.</p></div>
    <div className="cart-layout"><section className="cart-items">{items.map(item => <article className="cart-row" key={item.id}>
      <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=260&q=80`} alt={item.name}/>
      <div className="cart-product"><span className="plant-category">{item.category}</span><h3>{item.name}</h3><span className="cart-price">${item.price} each</span><button className="remove-link" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>
      <div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}>＋</button></div>
      <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
    </article>)}
    <div className="cart-actions"><Link to="/plants" className="text-link">← Continue shopping</Link><button className="remove-link" onClick={() => dispatch(clearCart())}>Clear basket</button></div></section>
    <aside className="order-summary"><span className="eyebrow green">THE TOTAL</span><h2>Order summary</h2><div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><div><span>Delivery</span><strong>Free</strong></div><div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div><button className="button button-dark checkout-button" onClick={() => window.alert('Thanks for shopping Paradise Nursery! Checkout is a demo and no payment has been taken.')}>Continue to checkout ↗</button><p>Checkout is currently a demo. No payment will be collected.</p></aside></div>
  </main>;
}
