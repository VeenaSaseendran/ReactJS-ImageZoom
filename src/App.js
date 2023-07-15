import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import product from './product.jpg';
import './'
 
function App() {
  
  return (
    <div className="App">
      
      <div style={{width:"200px",height:"200px"}}>
      <ReactImageMagnify {...{
     smallImage: {
      alt: 'Wristwatch by Ted Baker London',
      isFluidWidth: true,
      src: product
  },
  largeImage: {
      src: product,
      width: 1200,
      height: 1800
  }
}} />
        </div>
      
    </div>
  );
}
 
export default App;