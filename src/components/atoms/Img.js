import React from 'react';
import PropTypes from 'prop-types';


export const Img = ({ data, type, ...props }) => {
  switch (type) {
    case "img-full":
      return(
        <img className="w-full my-2" src={data.src} alt={data.alt}/>
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