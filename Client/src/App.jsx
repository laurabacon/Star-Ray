import React from 'react';
import HomePage from '../component/HomePage';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const App = () => {
 
  const renderPage = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/shop') {
      return <Shop />;
    } else if (currentPath === '/cart') {
      return <Cart />;
    } else {
      return <HomePage />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;





