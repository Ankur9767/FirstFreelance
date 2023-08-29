import React from 'react'
import '../Style/Product1.css';
import Facewash from '../media/facewash.png';
import itra2 from '../media/itra2.png';
import Shampoo from '../media/Shampoo.png';
import itra1 from '../media/itra1.png'
import '../Style/Slide.css';
import kas from '../media/kas.png';
import luk from '../media/luk.png';
import kdoxi from '../media/kdoxi.png'
import Header from './Header';
import { Link } from 'react-router-dom';
import levo from '../media/levo.jpeg';
import pantojio from '../media/pantojio.jpeg';


function Product() {
  return (
    <div>
    <Header />
        <div className="container-fluid mt-5">
        <div className="tittle">
            <h3 className="sec_tittle mt-5"> Our Product Range</h3>
        </div>
        <div className="psList">
        <div className="card">
             <img className="card-img-top" src={Facewash} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Face Wash</h5>
             <p className="card-text">OKKLAY FACEWASH</p>
             </div>
            <hr />
        <div className="card-body">
        <Link to="/product" className="card-body">
        <a  className="card-link bg-info text-white ">View All</a> 
        </Link>   
      </div>
      </div>
      <div className="card">
             <img className="card-img-top" src={kas} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Vitamin Supplements</h5>
             <p className="card-text">KAS-VIT Tablet</p>
             </div>
            <hr />
        
        <Link to="/product" className="card-body">
        
        <a href="#" className="card-link bg-info text-white">View All</a>    
     
      </Link>
      </div>
      <div className="card">
             <img className="card-img-top" src={itra2} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Pharmaceutical raw materials
</h5>
             <p className="card-text">ITRA KAS 200 Capsule</p>
             </div>
            <hr />
            <Link to="/product" className="card-body">
        <a href="#" className="card-link bg-info text-white">View All</a>    
      </Link>
      </div>
      <div className="card">
             <img className="card-img-top" src={luk} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Luk Cream</h5>
             <p className="card-text">Luk Cream</p>
             </div>
            <hr />
            <Link to="/product" className="card-body">
        <a href="#" className="card-link bg-info text-white">View All</a>    
      </Link>
      </div>
      <div className="card">
             <img className="card-img-top" src={kdoxi} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Antibiotic Drugs</h5>
             <p className="card-text">KDOXI Plus Capsule</p>
             </div>
            <hr />
            <Link to="/product" className="card-body">
        <a href="#" className="card-link bg-info text-white">View All</a>    
      </Link>
      </div>
      <div className="card">
             <img className="card-img-top" src={itra1} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Antifungal Drugs</h5>
             <p className="card-text">ITRA Kas 100 Capsule</p>
             </div>
            <hr />
            <Link to="/product" className="card-body">
        <a href="#" className="card-link bg-info text-white">View All</a>    
      </Link>
      </div>
      <div className="card">
             <img className="card-img-top" src={levo} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Antihistamines</h5>
             <p className="card-text">Levoeco Tablet</p>
             </div>
            <hr />
            <Link to="/product" className="card-body">
        <a href="#" className="card-link bg-info text-white">View All</a>    
      </Link>
      </div>
      <div className="card">
      
             <img className="card-img-top" src={pantojio} alt="Card image cap" />
                 <hr />
              <div className="card-body">
            <h5 className="card-title">Gastrointestinal drug</h5>
             <p className="card-text">Pantojio Tablet</p>
             </div>
            <hr />
            <Link to="/product" className="card-body">
        <a href="#" className="card-link bg-info text-white">View all</a>    
      </Link>
      </div>    
      </div>
        
    </div>
    
    </div>
  )
}

export default Product