import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

function Navbar() {
  const count = useSelector(selectCartCount);
  return <header className="navbar">
    <Link to="/" className="brand"><span className="brand-mark">✿</span><span>paradise<span className="brand-light">nursery</span></span></Link>
    <nav><NavLink to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink><NavLink to="/cart">Cart</NavLink><NavLink to="/about">About Us</NavLink></nav>
    <Link className="cart-link" to="/cart" aria-label={`Shopping cart with ${count} items`}><span>♧</span> Cart <b>{count}</b></Link>
  </header>;
}

function Home() {
  return <main>
    <section className="hero background-image">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow">A LITTLE GREEN GOES A LONG WAY</span>
        <h1>Welcome to Paradise Nursery</h1>
        <p>Thoughtfully chosen plants to make your space feel more like you. Start your little indoor jungle here.</p>
        <Link to="/plants" className="button button-light">Get Started <span>↗</span></Link>
        <div className="hero-note"><span>✳</span> Plants for happier homes</div>
      </div>
      <div className="hero-caption">GROW AT YOUR OWN PACE — EST. WITH LOVE</div>
    </section>
    <section className="intro section-wrap">
      <div><span className="eyebrow green">GOOD THINGS GROW HERE</span><h2>A calmer home starts<br/>with a little <em>green.</em></h2></div>
      <p>From easy-care favourites to statement leaves, find a plant that fits your space, your light, and your life.</p>
    </section>
    <section className="feature-grid section-wrap">
      <article><span className="feature-icon">☀</span><h3>Picked with care</h3><p>Plant-loving picks for every corner of your home.</p></article>
      <article><span className="feature-icon">❋</span><h3>Beginner friendly</h3><p>Simple care notes to help your new leaves thrive.</p></article>
      <article><span className="feature-icon">♡</span><h3>More joy, less fuss</h3><p>Bring a fresh, living touch to your everyday.</p></article>
    </section>
    <section className="bottom-cta"><span className="eyebrow">YOUR NEXT FAVOURITE IS WAITING</span><h2>Let's grow something good.</h2><Link className="button button-dark" to="/plants">Shop all plants ↗</Link></section>
  </main>;
}

export default function App() {
  return <><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="/about" element={<AboutUs/>}/><Route path="*" element={<Home/>}/></Routes><footer className="footer"><Link to="/" className="footer-brand">✿ paradise nursery</Link><span>Grow at your own pace.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></footer></>;
}
