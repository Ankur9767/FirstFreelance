
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/Shampoo/Shampoo.png'
import facewash1 from '../../media/Shampoo/S1.jpg';
import facewash2 from '../../media/Shampoo/s2.jpg';
import facewash3 from '../../media/Shampoo/s3.jpg';
import facewash4 from '../../media/Shampoo/s4.jpg'


const Shampoo = () => {

  const product = {
    name: 'LUK Plus Shampoo',
    price: '385.95 /PieceGet Latest Price',
    netVolume: '100ml',
    bestBefore: 'Best Use Before 36 Months from Date of Mfg.',
    use: 'For External Use Only',
    storage: 'Keep in a Cool Dry Place',
    precautions: 'Keep Out of Reach of Children.',
    benefits: 'It is Specially Formulated to Help Make the Hair Stronger, to Clean the Scalp, etc.',
    description:
      'LUK PLUS Anti Hair Fall Shampoo is a combination of ingredients that are brought together to help prevent hair fall as well as to increase hair growth. It stimulates the hair follicles for the hair to grow and can be used on a daily basis due to the use of natural ingredients.'
  };
  const products = {
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    images: [
      facewash,
      facewash1,
      facewash2,
      facewash3,
      facewash4
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
          <h4>Face Wash</h4>
          <p>Leading Manufacturer, Supplier & Retailer of OKKLAY FACEWASH.</p>
        </div>
        <hr />

        <div className="col-md-6">
          <table>
            <tbody>
              <tr className="d-flex flex-column justify-content-around">
                <td>
                  <img className="PThumnail" src={selectedImage} alt="Selected" />
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
        <h4>{product.name}</h4>
      <table className="table">
        <tbody>
          <tr>
            <th>Price</th>
            <td>{product.price}</td>
          </tr>
          <tr>
            <th>Net Volume</th>
            <td>{product.netVolume}</td>
          </tr>
          <tr>
            <th>Best Before</th>
            <td>{product.bestBefore}</td>
          </tr>
          <tr>
            <th>Use</th>
            <td>{product.use}</td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>{product.storage}</td>
          </tr>
          <tr>
            <th>Precautions</th>
            <td>{product.precautions}</td>
          </tr>
          <tr>
            <th>Benefits</th>
            <td>{product.benefits}</td>
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

export default Shampoo;

