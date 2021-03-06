import React from 'react';
import PropTypes from 'prop-types';


export const Title = ({ type, data, ...props }) => {

  switch (type) { /**Ce composant gère l'affichage des titres sur les différentes pages */
    case "h2":
      return(
        <h2 className="font-bold text-3xl mx-0">{data}</h2>
      );
      break;
    case "h3":
      return(
        <h3 className="font-bold text-2xl  mx-0">{data}</h3>
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