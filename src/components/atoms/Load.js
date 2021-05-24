import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
export const Load = ({ data, ...props }) => {
  return(
      <div className="bg-indigo-900 rounded-md w-48 flex font-bold text-white items-center justify-center">
          <FontAwesomeIcon className="m-2 animate-spin " icon={faSpinner} />
          <p className="m-2">{data}</p>
      </div>
  )
};

export default Load;