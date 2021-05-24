import React from 'react';
import PropTypes from 'prop-types';


export const Img = ({ data, type, ...props }) => { /**Composants qui affiche des images avec différents paramètres en fonction des props d'entrée du composant  */
  switch (type) {
    case "img-full": 
      return(
        <img className="w-full max-w-screen-md" src={data.src} alt={data.alt}/>/**L'image et afficher au maximum de sa taille */
      );
      break;
    case "img-limited": 
      return(
        <img className="object-cover w-full h-44" src={data.src} alt={data.alt}/>/** L'image et rongé pour correspondre un ratio défini par le parent*/
      );
      break;
    default:
        <p>enter a type, and a value</p>
      break;
  }
 
};

Img.propTypes = {
 
};
Img.defaultProps = {
  
};
export default Img;