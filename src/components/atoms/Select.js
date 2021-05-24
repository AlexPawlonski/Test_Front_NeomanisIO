import React from 'react';
import PropTypes from 'prop-types';


export const Select = ({ data, fCallBack, ...props }) => {
  return(
    <select className="select-style"> {/*Composants qui récupère une liste et qu'il l'affiche sous forme d’un select */}
      <option>...</option>
      {data.map( data => <option onClick={ () => fCallBack(data)} >{data}</option>)}
    </select>
  )
};

Select.propTypes = {
 
};
Select.defaultProps = {
  
};
export default Select;