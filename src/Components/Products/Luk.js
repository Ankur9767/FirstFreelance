
import React, { useState } from 'react';

import Header from '../Header';
import './Facewash.css';
import facewash from '../../media/luk/luk.png';
import facewash1 from '../../media/luk/luk1.jpg';
import facewash2 from '../../media/luk/luk2.jpg';
import facewash3 from '../../media/luk/luk3.jpg';
import facewash4 from '../../media/luk/luk4.jpg';




const Luk = () => {

  const product = {
    name: 'Luk Cream',
    price: '111.95 /Piece',
    storage: 'Store at a Temperature Not Exceeding 25° C. Do Not Freeze. Protect from Light.',
    netWeight: '30 Mg',
    precautions: 'Keep Out of Reach of Children.',
    warning: 'To Be Sold By Retail On the Prescription of a Registered Medical Practitioner Only. Do Not Apply to',
    dosage: 'As Directed By the Physician',
    medicineType: 'Allopathic',
    description:
      'LUK cream is an antifungal medicine used to treat fungal infections of the skin such as athlete\'s foot, Dhobie Itch, thrush, ringworm, and dry, flaky skin. It works by killing the fungi that cause these infections.'
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
          <h4>Medicines Tonics and Drugs</h4>
          <p>We offer the best product range of LUK Cream.</p>
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
            <th>Storage</th>
            <td>{product.storage}</td>
          </tr>
          <tr>
            <th>Net Weight</th>
            <td>{product.netWeight}</td>
          </tr>
          <tr>
            <th>Precautions</th>
            <td>{product.precautions}</td>
          </tr>
          <tr>
            <th>Warning</th>
            <td>{product.warning}</td>
          </tr>
          <tr>
            <th>Dosage</th>
            <td>{product.dosage}</td>
          </tr>
          <tr>
            <th>Medicine Type</th>
            <td>{product.medicineType}</td>
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

export default Luk;

