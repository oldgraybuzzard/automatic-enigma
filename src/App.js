import React from 'react';
import Navigation from './components/Nav';
import About from './components/About';
import ServiceGallery from './components/Services';


function App() {
  return (
    <div>
        <Navigation></Navigation>
        <main>
          <ServiceGallery></ServiceGallery>
          <About></About>
        </main> 
    </div>
  );
}

export default App;
