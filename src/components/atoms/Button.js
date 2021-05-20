import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ data, fCallBack, ...props }) => {
  return(
    <a onClick={() => fCallBack()} className="">
      <p>{data}</p>
    </a>
  );
};

Button.propTypes = {
 
};
Button.defaultProps = {
  
};
export default Button;