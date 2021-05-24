import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({ data, value, ...props }) => { /**Composants qui affiche les liens sur les pages */
  return(
    <a className="bg-red-500 text-white font-bold py-2 px-4 rounded-md transform hover:scale-105 duration-100 cursor-pointer" href={data} target="_blank" >{value}</a>
  );
};

Link.propTypes = {
 
};
Link.defaultProps = {
  
};
export default Link;