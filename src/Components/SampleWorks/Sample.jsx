import React from 'react';
import './Sample.css';
import panaflex_img from '../Assets/panaflex.jpg';
import t_shirt_img from '../Assets/t-shirt.jpg';
import tarp from '../Assets/tarp.jpg';
import sticker from '../Assets/sticker.jpg';
import styro_cut from '../Assets/styro_cut.jpg';
import silk_screen from '../Assets/silk_screen.jpg';


const Sample = () => {
  return (
    <div className='sample'>
      <h2 className="sample-title">Our Sample Works</h2>
      <div className="sample-grid">
        <div className="sample-item"><img src={panaflex_img} alt="Panaflex" /><p>Panaflex</p></div>
        <div className="sample-item"><img src={t_shirt_img} alt="T-Shirt Print" /><p>T-Shirt Print</p></div>
        <div className="sample-item"><img src={tarp} alt="Tarpaulin" /><p>Tarpaulin</p></div>
        <div className="sample-item"><img src={sticker} alt="Sticker" /><p>Sticker</p></div>
        <div className="sample-item"><img src={styro_cut} alt="Styro Cut" /><p>Styro Cut</p></div>
        <div className="sample-item"><img src={silk_screen} alt="Silk Screen" /><p>Silk Screen</p></div>
      </div>
    </div>
  );
}

export default Sample;
