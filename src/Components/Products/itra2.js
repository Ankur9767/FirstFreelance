
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';

import itra2 from '../../media/itra2/itra2.png';
import facewash2 from '../../media/itra2/itra21.jpeg';
import itra22 from '../../media/itra2/itra22.jpg'




const Itra2 = () => {

  const product = {
    name: 'ITRA KAS 200 Capsule',
    price: '105.95',
    form: 'Capsules',
    dosageStrength: '200 Mg',
    precautions: 'Keep Out of Reach of Children',
    storage: 'Keep in a Cool Dry Place',
    medicineType: 'Allopathic',
    dosage: 'As per Doctor Prescription',
    description:
      'ITRAKAS 200 Capsule belongs to a group of medicines called antifungals. It works by stopping the growth of fungi and is used to treat infections of the mouth, throat, vagina, and other parts of the body including fingernails and toenails. It kills fungi by destroying the fungal cell membrane.'
  };
  const products = {
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    images: [
      itra2,
      facewash2,
      itra22
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
          <h4>Pharmaceutical raw materials</h4>
          <p>We offer a complete product range of ITRA KAS 200 Capsule</p>
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
        <h4 className="text-danger">ITRA KAS 200 Capsule </h4>
        <table className="table">
        <tbody>
          <tr>
            <th>Price</th>
            <td>{product.price} /Pack</td>
          </tr>
          <tr>
            <th>Form</th>
            <td>{product.form}</td>
          </tr>
          <tr>
            <th>Dosage Strength</th>
            <td>{product.dosageStrength}</td>
          </tr>
          <tr>
            <th>Precautions</th>
            <td>{product.precautions}</td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>{product.storage}</td>
          </tr>
          <tr>
            <th>Medicine Type</th>
            <td>{product.medicineType}</td>
          </tr>
          <tr>
            <th>Dosage</th>
            <td>{product.dosage}</td>
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

export default Itra2;

