import Spainer from './Spainer'
import "./searchPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createClient } from "pexels";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const client = createClient(
      "4a7AMKxzdkUMbk01TADWuI4RlcdZtOqNacIfyh1KPKXBfi8FvBNHeiqc"
    );
    client.photos
      .search({ query, per_page: 8 })
      .then((response) => {
        if (response && response.photos) {
          setPhotos(response.photos);
        }
      })
      .catch((err) => console.error("Error fetching photos:", err));
      setLoading(false);
  };

  // Function to navigate to the Caption component for a specific photo
  const handleNavigateToCaption = (index) => {
    const selectedPhoto = photos[index];
    navigate("/caption", { state: { photo: selectedPhoto } }); // Passing the specific photo
  };

  return (
    <div className="search-conatiner">
      <h2 className="search-header-text">SEARCH PAGE</h2>
      <div className="personal-details">
        <h2>
          Name: <span>Md Gul Moajjam Faizy</span>
        </h2>
        <h3>
          Email: <span>mdgmfaizy@gmail.com</span>
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search-button">
          <input
            type="text"
            placeholder="Enter Your Search Term"
            value={query}
            onChange={handleInputChange}
          />
          <div className="submit-container flex items-center">
            <button type="submit" className="submit-button flex items-center">
              <FaSearch className="search-icon" />
              {/* <span className="ml-2">Submit</span> */}
            </button>
          </div>
        </div>
        {/* <input
          type="text"
          name="image"
          placeholder="Search here"
          value={query}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" /> */}
      </form>

      {/* <div className="container">
        <div className="row">
          {photos.length > 0 ? (
            <>
              {photos.map((item, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={item.src.medium}
                        alt={item.photographer}
                        style={{ width: "100%", height: "200px" }}
                      />
                      <button
                        onClick={() => handleNavigateToCaption(index)}
                        className="add-caption-button"
                      >
                        ADD CAPTION
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center pt-4 text-bold">No photos found.</p>
          )}
        </div>
      </div> */}


<div className="container">
        <div className="row">
          {loading ? (
            <div className="loading-container">
              <p>load000..</p>
              <Spainer/>
            </div>
          ) : photos.length > 0 ? (
            <>
              {photos.map((item, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={item.src.medium}
                        alt={item.photographer}
                        style={{ width: "100%", height: "200px" }}
                      />
                      <button
                        onClick={() => handleNavigateToCaption(index)}
                        className="add-caption-button"
                      >
                        ADD CAPTION
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center pt-4 text-bold">No photos found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
