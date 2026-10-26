import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from './CartSlice.jsx';

const plants = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Statement plants', price: 34, tag: 'BESTSELLER', description: 'Big, beautiful leaves that make a statement.', image: 'photo-1614594975525-e45190c55d0b' },
  { id: 2, name: 'Snake Plant', category: 'Easy care', price: 22, tag: 'EASY CARE', description: 'A sculptural favourite that thrives on neglect.', image: 'photo-1593482892290-f54927ae2b30' },
  { id: 3, name: 'Golden Pothos', category: 'Trailing plants', price: 18, tag: '', description: 'Trailing golden leaves for shelves and corners.', image: 'photo-1616763355548-1b606f439f86' },
  { id: 4, name: 'Rubber Plant', category: 'Statement plants', price: 29, tag: '', description: 'Glossy, deep-green leaves with a bold presence.', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 5, name: 'Peace Lily', category: 'Easy care', price: 24, tag: '', description: 'Elegant foliage and graceful white blooms.', image: 'photo-1593691509543-c55fb32e5cee' },
  { id: 6, name: 'String of Hearts', category: 'Trailing plants', price: 21, tag: 'FAN FAVOURITE', description: 'Delicate heart-shaped leaves on cascading vines.', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 7, name: 'Bird of Paradise', category: 'Statement plants', price: 49, tag: 'STATEMENT', description: 'Tropical energy for your sunniest spot.', image: 'photo-1485955900006-10f4d324d411' },
  { id: 8, name: 'ZZ Plant', category: 'Easy care', price: 26, tag: '', description: 'Shiny, resilient leaves and minimal fuss.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 9, name: 'Heartleaf Philodendron', category: 'Trailing plants', price: 19, tag: '', description: 'Soft, heart-shaped leaves that spill beautifully.', image: 'photo-1459156212016-c812468e2115' },
  { id: 10, name: 'Fiddle Leaf Fig', category: 'Statement plants', price: 42, tag: '', description: 'Architectural leaves for a light-filled room.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 11, name: 'Jade Plant', category: 'Easy care', price: 17, tag: '', description: 'A compact succulent with plump, glossy leaves.', image: 'photo-1459411552884-841db9b3cc2a' },
  { id: 12, name: 'English Ivy', category: 'Trailing plants', price: 16, tag: '', description: 'Classic cascading greenery with a wild feel.', image: 'photo-1483794344563-d27a8d18014e' },
  { id: 13, name: 'Calathea Orbifolia', category: 'Statement plants', price: 32, tag: '', description: 'Rounded leaves with delicate silvery stripes.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 14, name: 'Aloe Vera', category: 'Easy care', price: 15, tag: '', description: 'A sun-loving succulent with sculptural form.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 15, name: 'String of Pearls', category: 'Trailing plants', price: 23, tag: '', description: 'Pearl-like leaves that tumble over the pot.', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 16, name: 'Parlour Palm', category: 'Easy care', price: 25, tag: '', description: 'Feathery tropical fronds for softer spaces.', image: 'photo-1518531933037-91b2f5f229cc' },
  { id: 17, name: 'Philodendron Birkin', category: 'Statement plants', price: 31, tag: 'RARE FIND', description: 'Distinctive pinstripe foliage for plant lovers.', image: 'photo-1485955900006-10f4d324d411' },
  { id: 18, name: 'Scindapsus Pictus', category: 'Trailing plants', price: 20, tag: '', description: 'Velvety leaves sprinkled with silver.', image: 'photo-1616763355548-1b606f439f86' }
];

const categories = ['All plants', 'Statement plants', 'Easy care', 'Trailing plants'];
const imageUrl = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

export default function ProductList() {
  const [active, setActive] = useState('All plants');
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const visible = plants.filter(plant => active === 'All plants' || plant.category === active);
  return <main className="shop-page">
    <div className="shop-heading"><span className="eyebrow green">THE PLANT EDIT</span><h1>Find your <em>green.</em></h1><p>Good plants. Good energy. Better spaces.</p></div>
    <div className="category-tabs">{categories.map(category => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>{category}</button>)}</div>
    <div className="results-line"><span>{visible.length} plants to love</span><span>Chosen for your home ✳</span></div>
    <div className="plant-grid">{visible.map(plant => {
      const inCart = cartItems.some(item => item.id === plant.id);
      return <article className="plant-card" key={plant.id}>
        <div className="plant-photo"><img src={imageUrl(plant.image)} alt={plant.name} loading="lazy"/>{plant.tag && <span className="plant-tag">{plant.tag}</span>}<span className="photo-number">0{plant.id}</span></div>
        <div className="plant-info"><span className="plant-category">{plant.category}</span><div className="plant-title-row"><h3>{plant.name}</h3><strong>${plant.price}</strong></div><p>{plant.description}</p><button className={inCart ? 'add-button added' : 'add-button'} onClick={() => dispatch(addToCart(plant))}>{inCart ? 'Add another +' : '＋ Add to cart'}</button></div>
      </article>;
    })}</div>
    <p className="shop-footnote">A little care goes a long way. Every plant comes with simple care guidance.</p>
  </main>;
}
