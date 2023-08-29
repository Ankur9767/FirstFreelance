
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/facewash.png';
import facewash1 from '../../media/Facewash/facewash2.jpg';
import facewash2 from '../../media/Facewash/facewash3.jpg';



const FaceWash = () => {

  const product = {
    name: 'OKKLAY FACEWASH',
    price: '385',
    minOrder: '1',
    type: 'Face Wash',
    application: 'Washing Face',
    gender: 'Female, Male',
    features: [
      'Antiseptic',
      'Dust Removing',
      'Enhance Skin',
      'Hygienically Processed',
      'No Side Effects'
    ],
    ingredients: 'EDTA, Mint Extract & Glycerine',
    packagingType: 'Plastic Tube',
    certifications: 'FDA Certified',
    color: 'Grey',
    packagingSize: '100ml',
    countryOfOrigin: 'India',
    additionalColor: 'SKY BLUE',
    usage: 'TWICE A DAY',
    size: '100ml',
    foam: 'Gel'
  };
  const products = {
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    images: [
      facewash,
      facewash1,
      facewash2
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
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{product.name}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td className="text-danger"> ₹{product.price} / 1 tube</td>
              </tr>
              <tr>
                <th>Min. Order (MOQ)</th>
                <td>{product.minOrder} Tubes</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{product.type}</td>
              </tr>
              <tr>
                <th>Application</th>
                <td>{product.application}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{product.gender}</td>
              </tr>
              <tr>
                <th>Features</th>
                <td>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Ingredients</th>
                <td>{product.ingredients}</td>
              </tr>
              <tr>
                <th>Packaging Type</th>
                <td>{product.packagingType}</td>
              </tr>
              <tr>
                <th>Certifications</th>
                <td>{product.certifications}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{product.color}</td>
              </tr>
              <tr>
                <th>Packaging Size</th>
                <td>{product.packagingSize}</td>
              </tr>
              <tr>
                <th>Country of Origin</th>
                <td>{product.countryOfOrigin}</td>
              </tr>
              <tr>
                <th>Additional Color</th>
                <td>{product.additionalColor}</td>
              </tr>
              <tr>
                <th>Usage</th>
                <td>{product.usage}</td>
              </tr>
              <tr>
                <th>Size</th>
                <td>{product.size}</td>
              </tr>
              <tr>
                <th>Foam</th>
                <td>{product.foam}</td>
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

export default FaceWash;

