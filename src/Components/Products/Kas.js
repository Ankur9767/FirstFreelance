
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/kas/kas.png';
import facewash1 from '../../media/kas/kas2.jpg';
import facewash2 from '../../media/kas/kas3.jpg';
import facewash3 from '../../media/kas/kas4.jpg';



const Kas = () => {

  const product = {
    name: 'KAS-VIT Tablet',
    price: '221.95',
    packSize: '10 Tablets',
    taurine: '500 mg',
    lLeucine: '13.45 mg',
    lArginine: '13.28 mg',
    lLyme: '11.07 mg',
    lPhenylalanine: '9.04 mg',
    description:
      'KAS-VIT Tablet contains 32 nutrients, including 4 super-nutrients, that help treat general debility, weakness, lethargy, fatigue, tiredness, irritability, poor immunity, convalescence, and serve as a supplement in chronic illness. Amino Acids such as L-Phenylalanine and L-Tryptophan activate the TCA cycle, which aids in the production of energy in the form of ATP.'
  };
  const products = {
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    images: [
      facewash,
      facewash1,
      facewash2,
      facewash3
    ]
  };

  const [selectedImage, setSelectedImage] = useState(products.images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="PContainer">
      <Header />

      <div className="row">
        <div className="PHeading">
          <h4>Vitamin Supplements</h4>
          <p>Leading Manufacturer, Supplier & Retailer of KAS-VIT Tablet.</p>
        </div>
        <hr />

        <div className="col-md-6">
          <table>
            <tbody>
              <tr className="d-flex flex-column justify-content-around">
                <td>
                  <img className="img-fluid" src={selectedImage} alt="Selected" />
                </td>
                <td>
                  {products.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      onClick={() => handleImageClick(image)}
                      style={{ width: '100px', cursor: 'pointer', margin: '15px', border:'2px solid violet' }}
                    />
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
        <h4 className="text-danger">KAS -VIT Tablet </h4>
        <table className="table">
        <tbody>
          <tr>
            <th>Price</th>
            <td>{product.price} /Pack</td>
          </tr>
          <tr>
            <th>packSize</th>
            <td>{product.packSize}</td>
          </tr>
          <tr>
            <th>taurine</th>
            <td>{product.taurine}</td>
          </tr>
          <tr>
            <th>lLeucine</th>
            <td>{product.lLeucine}</td>
          </tr>
          <tr>
            <th> lArginine</th>
            <td>{product.lArginine}</td>
          </tr>
          <tr>
            <th>lLyme</th>
            <td>{product.lLyme}</td>
          </tr>
          <tr>
            <th>lPhenylalanine</th>
            <td>{product.lPhenylalanine}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
          <div className="AskButton">
            <button className="Cnb mt-5 mb-5">
              Ask for Details
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Kas;

