import React from 'react';
import './girlshostel.css'; 
const GirlsHostelDetails = () => {
  return (
    <div className="container">
      <section className="hostel-section">
        <h3 className="hostel-title">Girls Hostel</h3>
        <div className="hostel-content">
          <img 
            src={require('./image3.jpg')}  
            alt="Ladies Hostel Building" 
            className="hostel-image"
          />
          <img 
            src={require('./image4.jpg')}  
            alt="Ladies Hostel Room" 
            className="hostel-image"
          />
          <p className="hostel-description">
            Women's hostel has seven blocks named Ganga, Yamuna, Narmadha, Cauvery, North Bhavani, South Bhavani, and Old Bhavani.
            Ganga has 124 four-bedded rooms and 8 double-bedded rooms. Yamuna has 93 four-bedded rooms and 6 double-bedded rooms.
            Narmatha is the only block to have 8 five-bedded rooms, 96 four-bedded rooms, 16 double-bedded rooms, and 8 single-bedded rooms. 
            Cauvery block has 111 double-bedded rooms and 15 single-bedded rooms. North Bhavani and South Bhavani both have the capacity of 64 four-bedded rooms, 
            4 double-bedded rooms, and four single-bedded rooms respectively. Old Bhavani has the speciality of 8 eight-bedded rooms and 2 single-bedded rooms.
            Overall, the seven blocks can accommodate 2199 members in 639 rooms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GirlsHostelDetails;