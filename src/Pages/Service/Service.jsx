import React from 'react';
import './Service.css';
import logo from '../../Components/Assets/logo.jpg';
import tarp from '../../Components/Assets/tarp.jpg';
import t_shirt from '../../Components/Assets/t-shirt.jpg';
import sticker from '../../Components/Assets/sticker.jpg';
import panaflex from '../../Components/Assets/panaflex.jpg';
import styro_cut from '../../Components/Assets/styro_cut.jpg';
import silk_screen from '../../Components/Assets/silk_screen.jpg';
import other_artwork from '../../Components/Assets/silk_screen.jpg'; // Placeholder

const Service = () => {
  const services = [
    {
      name: "Tarpaulin Printing",
      description: "High-quality waterproof prints for banners and signage",
      image: tarp,
      accent: "#FF6B6B"
    },
    {
      name: "T-Shirt Print (DTF)",
      description: "Vibrant direct-to-film transfers for fabrics",
      image: t_shirt,
      accent: "#4ECDC4"
    },
    {
      name: "Sticker Printing",
      description: "Durable adhesive prints for any surface",
      image: sticker,
      accent: "#FFD166"
    },
    {
      name: "Panaflex Signage",
      description: "Professional outdoor advertising solutions",
      image: panaflex,
      accent: "#06D6A0"
    },
    {
      name: "Styro Cut",
      description: "Precision-cut 3D letters for business signage",
      image: styro_cut,
      accent: "#118AB2"
    },
    {
      name: "Silk Screen Printing",
      description: "Classic screen printing technique for fabrics",
      image: silk_screen,
      accent: "#073B4C"
    },
    {
      name: "Other Custom Artwork",
      description: "Unique designs tailored to your business needs",
      image: other_artwork,
      accent: "#8338EC"
    }
  ];

  return (
    <div className="service-page">
      {/* Animated Header */}
      <div className="service-header">
        <div className="logo-container">
          <img src={logo} alt="Avengerz Logo" className="logo" />
          <div className="logo-glow"></div>
        </div>
        <h1 data-text="EASY AND FAST PRINT CUSTOMIZATION">EASY AND FAST PRINT CUSTOMIZATION</h1>
        <h2>With Digital Print Services</h2>
        <div className="divider">
          <div className="divider-inner"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            style={{ '--accent-color': service.accent }}
          >
            <div className="image-container">
              <div className="image-overlay"></div>
              <img 
                src={service.image} 
                alt={service.name}
                onError={(e) => {
                  e.target.src = logo;
                  e.target.style.objectFit = 'contain';
                }}
              />
            </div>
            <div className="card-content">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9,21c0,1.1 0.9,2 2,2s2-0.9 2-2h-4zM3,5v2h18v-2h-18zM12,1c-1.1,0-2,0.9-2,2h4c0-1.1-0.9-2-2-2zM7,18c0,1.1 0.9,2 2,2s2-0.9 2-2h-4zM3,9v2h18v-2h-18z"/>
                </svg>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="accent-bar"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="cta-section">
        <p>Ready to bring your ideas to life?</p>
        <button className="cta-button">
          Get a Free Quote
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Service;