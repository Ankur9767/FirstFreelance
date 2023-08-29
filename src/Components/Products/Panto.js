
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/pantojio.jpeg';
import facewash1 from '../../media/panto2.jpg';




const Panto = () => {

  const product = {
    name: 'Pantojio Tablet',
    price: '72.95 /PackGet Latest Price',
    packSize: '10 X 10 Tablets',
    storage: 'Keep in a Cool Dry Place',
    packType: 'Box',
    precautions: 'Keep Out of Reach of Children.',
    medicineType: 'Allopathic',
    dosage: 'As per Doctor Prescription',
    description:
      'PANTOJIO Capsule PR is a prescription medicine used to treat gastroesophageal reflux disease (Acid reflux) and peptic ulcer disease by relieving the symptoms of acidity such as indigestion, heartburn, stomach pain, or irritation.'
  };
  const products = {
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    images: [
      facewash,
      facewash1
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
          <h4>Gastrointestinal drug</h4>
          <p>We are leaders in the market for providing best range of Pantojio Tablet</p>
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
            <th>Price</th>
            <td>{product.price}</td>
          </tr>
          <tr>
            <th>Pack Size</th>
            <td>{product.packSize}</td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>{product.storage}</td>
          </tr>
          <tr>
            <th>Pack Type</th>
            <td>{product.packType}</td>
          </tr>
          <tr>
            <th>Precautions</th>
            <td>{product.precautions}</td>
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

export default Panto;

