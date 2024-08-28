// import "./searchPage.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createClient } from "pexels";
// import { FaSearch } from "react-icons/fa";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [photos, setPhotos] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false); 
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//     setError(null); 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate the search query
//     if (!query.trim()) {
//       setError("Search term cannot be empty. Please enter a keyword.");
//       return;
//     }

//     setLoading(true);
//     setPhotos([]);
//     setError(null);

//     const client = createClient(
//       "4a7AMKxzdkUMbk01TADWuI4RlcdZtOqNacIfyh1KPKXBfi8FvBNHeiqc"
//     );

//     client.photos
//       .search({ query, per_page: 8 })
//       .then((response) => {
//         setLoading(false);
//         if (response && response.photos.length > 0) {
//           setPhotos(response.photos);
//         } else {
//           setError("No photos found. Please try a different search term.");
//         }
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError("An error occurred while fetching photos. Please try again later.");
//         console.error("Error fetching photos:", err);
//       });
//   };

//   // Function to navigate to the Caption component for a specific photo
//   const handleNavigateToCaption = (index) => {
//     const selectedPhoto = photos[index];
//     navigate("/caption", { state: { photo: selectedPhoto } });
//   };

//   return (
//     <div className="search-container">
//       <h2 className="search-header-text">SEARCH PAGE</h2>
//       <div className="personal-details">
//         <h2>
//           Name: <span>Md Gul Moajjam Faizy</span>
//         </h2>
//         <h3>
//           Email: <span>mdgmfaizy@gmail.com</span>
//         </h3>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="search-button">
//           <input
//             type="text"
//             placeholder="Enter Your Search Term"
//             value={query}
//             onChange={handleInputChange}
//           />
//           <div className="submit-container flex items-center">
//             <button type="submit" className="submit-button flex items-center">
//               <FaSearch className="search-icon" />
//             </button>
//           </div>
//         </div>
//       </form>

//       <div className="container">
//         <div className="row">
//           {loading ? (
//             <div>
//              <p className="text-center">Loading...</p>
//             </div>
//           ) : error ? (
//             <p className="text-center pt-4 text-bold">{error}</p>
//           ) : photos.length > 0 ? (
//             <>
//               {photos.map((item, index) => (
//                 <div className="col-md-3 mb-3" key={index}>
//                   <div className="card">
//                     <div className="card-body">
//                       <img
//                         src={item.src.medium}
//                         alt={item.photographer}
//                         style={{ width: "100%", height: "200px" }}
//                       />
//                       <button
//                         onClick={() => handleNavigateToCaption(index)}
//                         className="add-caption-button"
//                       >
//                         ADD CAPTION
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </>
//           ) : (
//             <p className="text-center pt-4 text-bold">No photos found. Please search for an image.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import "./searchPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createClient } from "pexels";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError(null); // Clear any previous error
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the search query
    if (!query.trim()) {
      setError("Search term cannot be empty. Please enter a keyword.");
      return;
    }

    setLoading(true);
    setPhotos([]);
    setError(null); // Clear error before starting the search

    const client = createClient(
      "4a7AMKxzdkUMbk01TADWuI4RlcdZtOqNacIfyh1KPKXBfi8FvBNHeiqc"
    );

    client.photos
      .search({ query, per_page: 8 })
      .then((response) => {
        setLoading(false);
        if (response && response.photos.length > 0) {
          setPhotos(response.photos);
        } else {
          setError("No photos found. Please try a different search term.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(
          "An error occurred while fetching photos. Please try again later."
        );
        console.error("Error fetching photos:", err);
      });
  };

  // Function to navigate to the Caption component for a specific photo
  const handleNavigateToCaption = (index) => {
    const selectedPhoto = photos[index];
    navigate("/caption", { state: { photo: selectedPhoto } });
  };

  return (
    <div className="search-container">
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
            </button>
          </div>
        </div>
        {/* Display error message here, if any */}
        {error && <p className="error-message">{error}</p>}
      </form>

      <div className="container">
        <div className="row">
          {loading ? (
            <div className="loading-container">
              <p className="text-center">Loading...</p>
            </div>
          ) : photos.length > 0 ? (
            photos.map((item, index) => (
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
            ))
          ) : (
            !loading && !error && (
              <p className="text-center pt-4 text-bold">
                No photos found. Please search for an image.
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
