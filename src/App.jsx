// import './App.css'
// import  { useState } from 'react';
// import { fabric } from 'fabric';
// import { Canvas, Rect } from 'fabric'
// function App() {
//   // const [count, setCount] = useState(0)
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [canvas, setCanvas] = useState(null);
//   const [query, setQuery] = useState('');

//     // Fetch images from an API (example: Unsplash API)
//     const fetchImages = async () => {
//       const apiKey = 'YOUR_API_KEY';  // Replace with your Unsplash API key
//       const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       setImages(data.results);
//     };

//     // Initialize Fabric.js canvas
//     const initializeCanvas = (imgUrl) => {
//       const canvasObj = new fabric.Canvas('canvas', {
//         width: 600,
//         height: 400,
//       });
//       fabric.Image.fromURL(imgUrl, (img) => {
//         img.scaleToWidth(600);
//         canvasObj.add(img);
//         canvasObj.renderAll();
//       });
//       setCanvas(canvasObj);
//     };

//     // Add text to the canvas
//     const addText = () => {
//       const text = new fabric.Textbox('Your caption here', {
//         left: 100,
//         top: 100,
//         fontSize: 24,
//         fill: '#000',
//       });
//       canvas.add(text);
//       canvas.renderAll();
//     };

//     // Add shape to the canvas
//     const addShape = (shape) => {
//       let shapeObj;
//       switch (shape) {
//         case 'circle':
//           shapeObj = new fabric.Circle({ radius: 50, fill: '#f55', left: 100, top: 150 });
//           break;
//         case 'rect':
//           shapeObj = new fabric.Rect({ width: 100, height: 100, fill: '#55f', left: 200, top: 150 });
//           break;
//         default:
//           shapeObj = null;
//       }
//       if (shapeObj) {
//         canvas.add(shapeObj);
//         canvas.renderAll();
//       }
//     };

//     // Download the canvas as an image
//     const downloadImage = () => {
//       const link = document.createElement('a');
//       link.href = canvas.toDataURL({
//         format: 'png',
//         multiplier: 2,
//       });
//       link.download = 'edited_image.png';
//       link.click();
//     };
//   return (
//     <>

//     <div className="container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for images..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={fetchImages}>Search</button>
//       </div>
//       <div className="image-results">
//         {images.map((image) => (
//           <div key={image.id} className="image-card">
//             <img
//               src={image.urls.small}
//               alt={image.description}
//               onClick={() => {
//                 setSelectedImage(image.urls.regular);
//                 initializeCanvas(image.urls.regular);
//               }}
//             />
//             <button onClick={() => initializeCanvas(image.urls.regular)}>Add Captions</button>
//           </div>
//         ))}
//       </div>
//       {selectedImage && (
//         <div className="canvas-section">
//           <canvas id="canvas"></canvas>
//           <div className="controls">
//             <button onClick={addText}>Add Text</button>
//             <button onClick={() => addShape('circle')}>Add Circle</button>
//             <button onClick={() => addShape('rect')}>Add Rectangle</button>
//             <button onClick={downloadImage}>Download Image</button>
//           </div>
//         </div>
//       )}
//     </div>

//     </>
//   )
// }

// export default App

import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddCaption from "./component/AddCaption";
import Home from "./component/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caption" element={<AddCaption />} />
      </Routes>
    </>
  );
}

export default App;
