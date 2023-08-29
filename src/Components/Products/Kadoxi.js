
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/kadoxi/kdoxi.png'
import facewash1 from '../../media/kadoxi/kadoxi1.jpg';
import facewash2 from '../../media/kadoxi/kadoxi2.jpg'



const Kadoxi = () => {
  const product = {
    name: 'KDOXI Plus Capsule',
    form: 'Capsules',
    precautions: 'Keep Out of Reach of Children.',
    storage: 'Keep in a Cool Dry Place',
    medicineType: 'Allopathic',
    dosage: 'As per Doctor Prescription',
    packSize: '10 x 10 Capsules',
    description:
      'K-DOXI PLUS Capsule is a versatile antibiotic medicine which can be used to treat many different infections caused by bacteria. These include infections of the blood, brain, lungs, bones, joints, urinary tract, stomach and intestines. It can also be used to treat sexually transmitted diseases. It stops the growth of the bacteria causing the infection and clears the infection. It also helps treat as well as prevent diarrhea that may occur due to the use of this medicine or due to stomach/gut (intestine) infections.'
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
          <h4>Antibiotic Drugs
          </h4>
          <p>Leading Manufacturer, Supplier & Retailer of KDOXI PlusCapsule.</p>
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
        <h4>{product.name}</h4>
      <table className="table">
        <tbody>
          <tr>
            <th>Form</th>
            <td>{product.form}</td>
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
            <th>Pack Size</th>
            <td>{product.packSize}</td>
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

export default Kadoxi;

