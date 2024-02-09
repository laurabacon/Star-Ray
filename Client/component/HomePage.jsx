import React, { useEffect } from 'react';
import Granim from 'granim';


const HomePage = () => {
  const displayHomepage = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/", {
        method: "GET",
      });
      console.log("home button works");
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to Load Homepage");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to Load Homepage");
    }
  };


  useEffect(() => {
    var granimInstance = new Granim({
      element: "#canvas-basic",
      direction: "left-right",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#fbf8cc", "#fde4cf"],
            ["#ffcfd2", "#f1c0e8"],
            ["#cfbaf0", "#a3c4f3"],
            ["#90dbf4", "#8eecf5"],
            ["#98f5e1", "#b9fbc0"],
          ],
          transitionSpeed: 7000,
        },
      },
    });
  }, []);

  return (
    <>
     
      <button id="home-button" onClick={displayHomepage}>Home</button>
    
    </>
  );
};

export default HomePage;
