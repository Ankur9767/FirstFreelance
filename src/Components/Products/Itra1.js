
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import itra1 from '../../media/itra1/itra1.png';
import itra12 from '../../media/itra1/itra12.jpg';



const Itra1= () => {

  const product = {
    name: 'ITRA Kas 100 Capsule',
    form: 'Capsules',
    packagingType: 'Blister',
    speciality: 'Safe Packing, Good Quality',
    packagingSize: '10X10 Pack',
    dosageStrength: 'As Per Doctor Prescribed',
    storage: 'Cool & Dry Place',
    description:
      'ITRAKAS 100 Capsule belongs to a group of medicines called antifungals. It works by stopping the growth of fungi and is used to treat infections of the mouth, throat, vagina, and other parts of the body including fingernails and toenails. It kills fungi by destroying the fungal cell membrane.'
  
  };
  const products = {
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    images: [
      itra1,
      itra12
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
          <h4>Antifungal Drugs</h4>
          <p>We are leaders in the market for providing best range of ITRA Kas 100 Capsule</p>
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
        <table className="table">
        <tbody>
          <tr>
            <th>Form</th>
            <td>{product.form}</td>
          </tr>
          <tr>
            <th>Packaging Type</th>
            <td>{product.packagingType}</td>
          </tr>
          <tr>
            <th>Speciality</th>
            <td>{product.speciality}</td>
          </tr>
          <tr>
            <th>Packaging Size</th>
            <td>{product.packagingSize}</td>
          </tr>
          <tr>
            <th>Dosage Strength</th>
            <td>{product.dosageStrength}</td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>{product.storage}</td>
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

export default Itra1;

