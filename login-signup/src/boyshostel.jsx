import React from 'react';
import './boyshostel.css'; // Import the updated CSS file for styling

const BoysHostelDetails = () => {
  return (
    <div className="container">
      <section className="hostel-section">
        <h3 className="hostel-title">Boys Hostel</h3>
        <div className="hostel-content">
          <img 
            src={require('./image1.jpg')} 
            alt="Hostel Building" 
            className="hostel-image"
          />
          <img 
            src={require('./image2.jpg')} 
            alt="Hostel Room" 
            className="hostel-image"
          />
          <p className="hostel-description">
            Men's hostel has six blocks named Sapphire, Emerald, Ruby, Diamond, Coral and Pearl. 
            Sapphire has 282 four bedded rooms. Emerald has 284 four bedded rooms. Ruby has 68 four bedded rooms, 
            145 double bedded rooms and 24 single bedded rooms, Diamond has 146 double bedded rooms and 34 single 
            bedded rooms. Coral has 51 double bedded rooms and a single bed room. Pearl has 138 four bedded rooms 
            and 33 double-bedded rooms. Overall, the six blocks can accommodate 3897 members in 1206 rooms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BoysHostelDetails;