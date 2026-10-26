import { Link } from 'react-router-dom';

export default function AboutUs() {
  return <main className="about-page"><div className="about-us-container">
    <section className="about-hero"><div><span className="eyebrow">A LITTLE MORE ABOUT US</span><h1>Rooted in nature.<br/><em>Made for home.</em></h1><p>We believe a plant can change the feeling of a room — and sometimes the feeling of a day.</p><Link className="button button-light" to="/plants">Meet the plants ↗</Link></div><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85" alt="Sunlight falling on lush green plants"/></section>
    <section className="about-copy"><span className="eyebrow green">OUR LITTLE PHILOSOPHY</span><h2>Make growing things<br/><em>part of everyday.</em></h2><p>Paradise Nursery is for the first-time plant parent, the windowsill gardener, and the person who can never quite find room for one more pot. Our collection is thoughtfully chosen to bring warmth, texture, and a touch of the outdoors into your space.</p><p>No perfect routines required. Just a little light, a little water, and the joy of watching something grow.</p></section>
  </div></main>;
}
