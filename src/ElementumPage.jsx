
import React from 'react';
import './Elementumpg.css';

const ElementumPage = () => {
  return (
    <div className="container">
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Elementum</div>
        <nav className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#studio" className="nav-link">Studio</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#faqs" className="nav-link">FAQs</a>
        </nav>
        <div className="menu-icon">
          <span></span>
          <span></span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="shape-pink"></div>
        <div className="shape-purple"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            The <span className="underline-text">thinkers</span> and <br /> 
            doers were <span className="badge-pink">changing</span> <br />
            the <span className="badge-green">status</span> Quo with
          </h1>
          <p className="hero-desc">
            We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        {/* Floating Avatars */}
        <div className="avatar-group">
          <div className="user-img img1"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Team" /></div>
          <div className="user-img img2"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Team" /></div>
          <div className="user-img img3"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" alt="Team" /></div>
          <div className="user-img img4"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150" alt="Team" /></div>
          <div className="user-img img5"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" alt="Team" /></div>
        </div>
      </section>

     
      <section className="about">
        <div className="about-text">
          <h2 className="section-title">
            <span className="underline-text">Tomorrow</span> should <br />
            be better than <span className="badge-green">today</span>
          </h2>
          <p className="section-desc">
            We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <a href="#readmore" className="btn-link">Read more <span className="arrow-line">—</span></a>
        </div>
        <div className="about-img-side">
          <div className="circle-frame">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" alt="Meeting" />
          </div>
          <div className="square-decor"></div>
        </div>
      </section>

      {/* ABOUT SECTION 2 (See how we can help) */}
      <section className="about reverse">
        <div className="about-img-side">
          <div className="circle-frame">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500" alt="Working" />
          </div>
          <div className="triangle-decor"></div>
        </div>
        <div className="about-text">
          <h2 className="section-title">
            <span className="badge-green">See</span> how we can <br />
            help you <span className="underline-text">progress</span>
          </h2>
          <p className="section-desc">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="wave-decor"></div>
        <h2 className="section-title service-heading">
          What we <span className="badge-green">can</span> <br />
          <span className="underline-text">offer</span> you!
        </h2>

        <div className="service-list">
          <div className="service-row">
            <div className="col-left">Office of multiple interest content</div>
            <div className="col-center">Collaborative & partnership</div>
            <div className="col-right">→</div>
          </div>
          <div className="service-row">
            <div className="col-left">The hanger US Air force digital experimental</div>
            <div className="col-center">We talk about our weight</div>
            <div className="col-right">→</div>
          </div>
          <div className="service-row">
            <div className="col-left">Delta faucet content, social, digital</div>
            <div className="col-center">
              Piloting digital confidence 
              <span className="stickers">
                <span className="sticker-yellow">★</span>
                <span className="sticker-black">●</span>
              </span>
            </div>
            <div className="col-right">→</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <h2 className="section-title text-center">
          <span className="badge-green">What</span> our customer <br />
          says <span className="underline-text">About Us</span>
        </h2>

        {/* Small floating customer heads */}
        <div className="floating-head h1"><img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" alt="user" /></div>
        <div className="floating-head h2"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" /></div>
        <div className="floating-head h3"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" /></div>
        <div className="floating-head h4"><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150" alt="user" /></div>

        <div className="testimonial-box">
          <p className="quote-mark">“</p>
          <p className="quote-text">
            Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable.
          </p>
          <p className="quote-mark text-end">”</p>
        </div>
      </section>

     
      <div className="footer-section">
        <div className="footer-decor"></div>
        <div className="footer-purple-shape"></div>

        {/* Newsletter */}
        <div className="newsletter">
          <h2 className="newsletter-title">Subscribe to <br /> our newsletter</h2>
          <p className="newsletter-desc">To make your stay special and even more memorable</p>
          <button className="btn-submit">Subscribe Now</button>
        </div>

        {/* Footer Links Grid */}
        <footer className="footer-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms & Policies</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#youtube">Youtube</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms & Policies</h4>
            <p className="contact-info">1498w Fluton ste, STE<br />2D Chicago, IL 60607.</p>
            <p className="contact-info">(123) 456789000</p>
            <p className="contact-info contact-email">info@elementum.com</p>
          </div>
        </footer>

        <div className="copyright">©2023 Elementum. All rights reserved</div>
      </div>

    </div>
  );
};

export default ElementumPage;