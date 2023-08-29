import React from 'react';
import Header from './Header';
import '../Style/About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className="AboutUs">
       <div>
        <h3>About Kaosmettika lab</h3>
       </div>
       <hr />
       <div className="Details">
       <p className="paragraph">
       Kaosmettika Lab links to the world with its wide array of skin and hair care products.
      We are committed and dedicated to becoming the creator of beautiful skin and hair across the world with our range.
       </p>
       <p className="paragraph">
       We envision giving the world healthy skin and hair solutions that are winning the trust and faith of millions. We are known as one of the most reliable names in the industry. 
       We offer a range of products like face creams, face wash, shampoos, tablets and capsules that are travelling far and wide over to countries like the USA, Europe and Africa.
       </p>
       <p className="paragraph">
      
With 4 years of experience in the industry, we have crossed many milestones very successfully to become one of the leading companies in the country.
 Our R&D is constantly working and researching to innovate and enhance our products further so that we are a name that is known globally even far beyond where we have travelled to today.


       </p>
       <p className="paragraph">
       We very actively implement the latest technology in our formulations so that our products surpass our own levels of excellence to become the king in the market. We ensure that all our raw inputs are pure and natural so that our customers are not left with any side effects.
      
        </p>
        <p className="paragraph">
        It is our sincere effort to bring forth products that come at very affordable prices so that it is within easy reach of every person in society. We want to be known as a company that is in the dedicated service of mankind. 
       </p>


       </div>
       <hr />
       <table className="Table">
      <tbody>
        <tr>
          <th>Nature of Business</th>
          <td>Manufacturer / Exporter / Service Provider / Supplier / Retailer / Distributor / Trader</td>
        </tr>
        <tr>
          <th>Contact Person</th>
          <td>Mr. Vishwamitra Dubey</td>
        </tr>
        <tr>
          <th>Registered Address</th>
          <td>Shop No- 3, Sai Drushti Building No-4, Patil Wadi Road, Mumbai, Maharashtra - 401404, India</td>
        </tr>
        <tr>
          <th>Total Number of Employees</th>
          <td>100</td>
        </tr>
        <tr>
          <th>Year of Establishment</th>
          <td>2017</td>
        </tr>
        <tr>
          <th>Legal Status of Firm</th>
          <td>Individual (Sole proprietorship)</td>
        </tr>
        <tr>
          <th>Branch Office Address</th>
          <td>Shop No- 3, Sai Drushti Building No-4, Patil Wadi Road, Mumbai, Maharashtra - 401404, India</td>
        </tr>
        <tr>
          <th>Corporate Office Address</th>
          <td>SHOP NO- 3, SAI DRUSHTI BUILDING NO-4, PATILWADI ROAD, PALGHAR WEST, PALGHAR-401404, MAHARASHTRA Mumbai, Maharashtra, Thane, Maharashtra - 401404, India</td>
        </tr>
      </tbody>
    </table>

      </div>
  <Footer />
    </div>
  )
   
};

export default About;  
