import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Facewash from '../media/facewash.png';
import itra2 from '../media/itra2.png';
import Shampoo from '../media/Shampoo.png';
import itra1 from '../media/itra1.png'
import '../Style/Slide.css';
import kas from '../media/kas.png';
import luk from '../media/luk.png';
import kdoxi from '../media/kdoxi.png';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Slide() {
  return (
    <div>
  <Carousel responsive={responsive}>
  <div className="Facewash">
  <Link className="pLink" to="/Facewash">
    <img src={Facewash} className="card-img p-3" />
    <h3 className="Caption"> OKKLAY FACEWASH</h3>
    </Link>
  </div>
  <div className="Facewash">
  <Link className="pLink"  to='/itra2'>
  <img src={itra2} className="card-img" />
  <h3 className="Caption">ITRA KAS 200 Capsule</h3>
  </Link>
  </div>
 
  <div className="Facewash">
  <Link  className="pLink"  to='/itra1'>
  <img src={itra1} className="card-img" />
  <h3 className="Caption"> ITRA Kas 100 Capsule</h3>
  </Link>
  </div>
 
  <div className="Facewash">
  <Link  className="pLink"  to='/luk'>
  <img src={luk} className="card-img" />
  <h3 className="Caption"> LUK Cream</h3>
  </Link>
  </div>
  
  <div className="Facewash">
  <Link className="pLink"  to='/kadoxi'>
  <img src={kdoxi} className="card-img" />
  <h3 className="Caption">KDOXI PlusCapsule</h3>
  </Link>
  </div>
  <div className="Facewash">
  <Link  className="pLink"  to='/kas'>
  <img src={kas} className="card-img" />
  <h3 className="Caption">KAS-VIT Tablet</h3>
  </Link>
  </div>
  <div className="Facewash">
  <Link className="pLink"  to='/shampoo'>
  <img src={Shampoo} className="card-img" />
  <h3 className="Caption">LUK Plus Shampoo</h3>
  </Link>
  </div>
</Carousel>
</div>
  )
}

export default Slide