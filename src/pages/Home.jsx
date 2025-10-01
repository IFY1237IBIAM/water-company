import React from "react";
import './Home.css';
import waterBottle from '../components/images/water.webp'; // correct path

function Home() {
  const handleLearnMore = () => {
    const section = document.getElementById("learn-more-section");
    if(section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home-container">
        {/* Left image */}
        <div className="home-image-container">
          <img 
            src={waterBottle} 
            alt="Water Bottle" 
            className="home-image" 
          />
        </div>

        {/* Right content */}
        <div className="home-content">
          <h1>Pure Water, Pure Life 💧</h1>
          <p>
            Welcome to AquaFlow Water Company. We provide clean, safe, and affordable drinking water to households and businesses. 
            Your health is our priority, and sustainability is at the heart of what we do.
          </p>
          <button onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>

      {/* Learn More section */}
      <div id="learn-more-section" className="learn-more-section">
        <h2>About Our Water</h2>
        <p>
          Our water goes through rigorous purification and testing to ensure the highest quality. 
          We believe in sustainability and delivering safe water to every customer.
        </p>
      </div>
    </>
  );
}

export default Home;
