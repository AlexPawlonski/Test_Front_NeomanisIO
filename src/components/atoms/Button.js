import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ data, fCallBack, ...props }) => {
  return(
    <div onClick={() => fCallBack()} className="bg-blue-700 font-bold text-center rounded-md text-white p-2 px-4 cursor-pointer transform hover:scale-105 duration-100">
      <p>{data}</p>
    </div>
  );
};

Button.propTypes = {
 
};
Button.defaultProps = {
  
};
export default Button;