import React from 'react';
import PropTypes from 'prop-types';


export const Title = ({ type, data, ...props }) => {
  switch (type) {
    case "h2":
      return(
        <h2 className="font-bold text-2xl my-3 mx-0">{data}</h2>
      );
      break;
    case "h3":
      return(
        <h3 className="font-bold text-2xl my-3 mx-0">{data}</h3>
      );
      break;
    default:
        <p>enter a type and value</p>
      break;
  }

};

Title.propTypes = {
 
};
Title.defaultProps = {
  
};
export default Title;