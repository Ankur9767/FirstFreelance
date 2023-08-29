
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/levo/levo.jpeg'
import facewash1 from '../../media/levo/levo2.jpg';
import facewash2 from '../../media/levo/levo3.jpg';
import facewash3 from '../../media/levo/levo4.jpg';



const Levo = () => {

  const product = {
    name: 'Levoeco Tablet',
    price: '14.95 /PairGet Latest Price',
    packSize: '10 x 10 Tablet',
    form: 'Tablet',
    storage: 'Keep in a Cool Dry Place',
    precautions: 'Keep Out of Reach of Children.',
    dosageStrength: '5 Mg',
    dosage: 'As per Doctor Prescription',
    description:
      'Levoeco 5 MG Tablet is an antihistamine medicine. It is used widely to relieve allergic symptoms like runny nose, sneezing, redness of your nose, watery eyes, itching, rash and hives (raised bumps on your skin). It stops the action of a natural substance called histamine produced in your body during an allergic reaction.'
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
          <h4>Antihistamines</h4>
          <p>Our product range contains a wide range of Levoeco Tablet</p>
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
            <th>Form</th>
            <td>{product.form}</td>
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
            <th>Dosage Strength</th>
            <td>{product.dosageStrength}</td>
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

export default Levo;

