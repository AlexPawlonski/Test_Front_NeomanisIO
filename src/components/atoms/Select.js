import React from 'react';
import PropTypes from 'prop-types';


export const Select = ({ data, fCallBack, ...props }) => {
  return(
    <select >
      {data.map( data => <option onClick={ () => fCallBack(data)} >{data}</option>)}
    </select>
  )
};

Select.propTypes = {
 
};
Select.defaultProps = {
  
};
export default Select;