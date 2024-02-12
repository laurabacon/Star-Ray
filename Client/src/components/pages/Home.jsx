// import React, { useEffect } from 'react';
// import Granim from 'granim';


// const HomePage = () => {
//   const displayHomepage = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("/", {
//         method: "GET",
//       });
//       console.log("home button works");
//       if (response.ok) {
//         document.location.replace("/");
//       } else {
//         alert("Failed to Load Homepage");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to Load Homepage");
//     }
//   };


//   useEffect(() => {
//     var granimInstance = new Granim({
//       element: "#canvas-basic",
//       direction: "left-right",
//       isPausedWhenNotInView: true,
//       states: {
//         "default-state": {
//           gradients: [
//             ["#fbf8cc", "#fde4cf"],
//             ["#ffcfd2", "#f1c0e8"],
//             ["#cfbaf0", "#a3c4f3"],
//             ["#90dbf4", "#8eecf5"],
//             ["#98f5e1", "#b9fbc0"],
//           ],
//           transitionSpeed: 7000,
//         },
//       },
//     });
//   }, []);

//   return (
//     <>
     
//       <button id="home-button" onClick={displayHomepage}>Home</button>
    
//     </>
//   );
// };

// export default HomePage;


export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Bryn was here
      </p>
    </div>
  );
}