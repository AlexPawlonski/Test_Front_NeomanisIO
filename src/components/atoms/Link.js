import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({ data, value, ...props }) => {
  return(
    <a href={data} target="_blank" >{value}</a>
  );
};

Link.propTypes = {
 
};
Link.defaultProps = {
  
};
export default Link;