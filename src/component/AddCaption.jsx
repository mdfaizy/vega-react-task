import "./addcaption.css";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const AddCaption = () => {
  const { state } = useLocation();
  const [caption, setCaption] = useState("");
  const canvasRef = useRef(null);
  const { photo } = state || {};

  useEffect(() => {
    if (photo) {
      const canvasElement = document.getElementById("canvas-0");
      if (canvasElement) {
        const canvas = new fabric.Canvas(canvasElement, {
          width: 400,
          height: 230,
          backgroundColor: "white",
        });

        fabric.Image.fromURL(
          photo.src.medium,
          (img) => {
            img.set({
              left: 0,
              top: 0,
              scaleX: canvas.width / img.width,
              scaleY: canvas.height / img.height,
            });
            canvas.add(img);
            canvas.renderAll();
          },
          { crossOrigin: "anonymous" }
        );

        canvasRef.current = canvas; // Store the canvas reference
      }
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.dispose();
      }
    };
  }, [photo]);

  const addImageWithCaption = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.clear();
      // Add the image to the canvas
      fabric.Image.fromURL(
        photo.src.medium,
        (img) => {
          img.set({
            left: 0,
            top: 0,
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height,
          });
          canvas.add(img);
          const text = new fabric.Text(caption, {
            left: 20,
            top: 30,
            fontSize: 40,
            scaleX: 1,
            scaleY: 1,
            zIndex: 100,
            fill: "black",
          });
          canvas.add(text);

          canvas.renderAll();
        },
        { crossOrigin: "anonymous" }
      ); // Ensure images can be loaded from other origins
    }
  };

  const downloadCanvasImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL({ format: "png" });
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `canvas-image.png`;
      link.click();
    }
  };

  if (!photo) {
    return <p>No photo found.</p>;
  }

  return (
    <div className="container">
      <h2 className="add-caption-heading">ADD CAPTION</h2>
      {/* <h2>Caption for {photo.photographer}</h2> */}
      <div className="add-caption-contante">
        <div className="add-caption-left">
          <img
            src={photo.src.medium}
            alt={photo.photographer}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="add-caption-right">
          <div className="add-caption-right-top-text">
            <input
              type="text"
              placeholder="Enter Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button
              className="add-caption-left-top-text"
              onClick={addImageWithCaption}
            >
              ADD CA
            </button>
          </div>
          <canvas id="canvas-0" className="canvas-image"></canvas>
          <button
            onClick={downloadCanvasImage}
            className="add-caption-download-button"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCaption;
