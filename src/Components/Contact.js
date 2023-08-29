import React, { useState } from 'react';
import '../Style/Contact.css'
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use the state values (name, email, mobileNumber, message) to send the form data to your server
    console.log('Form submitted:', name, email, mobileNumber, message);
    // Reset form fields
    setName('');
    setEmail('');
    setMobileNumber('');
    setMessage('');
  };

  return (
    <>
    <Header />
    
    <div className="ContactMain row">
    <div className="Contact col-md-6">
      <h3 className="heading">Contact - Kaosmettika Lab</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Requirement Details</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="textarea"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    <div className="ReachUs">
      <div> 
      <h3> Reach Us</h3>
      <div className="Addr">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class=" bi-geo-alt-fill mt-1" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg> 
      <p className="Addr2">
      Shop No- 3,Sai Drushti Building No-4,Patil Wadi Road, West Palghar, Mumbai, Maharashtra - 401404, India
      </p>
      </div> 
      <div className="Addr">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi-person-circle mt-1" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
      <p className="Addr2">
      Mr.Vishwamitra Dubey
      </p>
      </div> 
      <div className="Addr">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi-telephone-outbound-fill mt-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
</svg>
      <p className="Addr2">
      7021234072  
      </p>
      </div> 
      <div className="Addr">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi-envelope-check mt-1 me-3" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
      <p className="Addr2">
      Kaosmettika.lab@gmail.com
      </p>
      </div> 
      <hr />
      <div className="additional">
       <h3>Additional Information</h3>
       <div className="Addition">
        <h4>Branch Office Address</h4>
        <p>Shop No- 3,Sai Drushti Building No-4,Patil Wadi Road, West Palghar, Mumbai, Maharashtra - 401404, India</p>
       </div>
       <div className="Addition">
        <h4>Corporate Office Address</h4>
        <h5 className="overflow-hidden">Harshal Dubey</h5>
        <p>SHOP NO- . 3,SAI DRUSHTI BUILDING NO-4,PATILWADI ROAD,PALGHAR WEST,PALGHAR-401404,MAHARASHTRA Mumbai, Maharashtra, Thane, Maharashtra - 401404, India</p>
       </div>
      </div>
      
      
           </div>
    </div>
    
    </div>
    <Footer />
  
    </>
  );
}

export default Contact;
