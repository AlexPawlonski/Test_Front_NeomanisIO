import React from 'react';
import PropTypes from 'prop-types';


export const Img = ({ data, type, ...props }) => {
  switch (type) {
    case "img-full":
      return(
        <img className="w-full max-w-screen-md" src={data.src} alt={data.alt}/>
      );
      break;
    case "img-limited":
      return(
        <img className="object-cover w-full h-44" src={data.src} alt={data.alt}/>
      );
      break;
    default:
        <p>enter a type and value</p>
      break;
  }
 
};

Img.propTypes = {
 
};
Img.defaultProps = {
  
};
export default Img;