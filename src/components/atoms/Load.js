import React from 'react';

export const Load = ({ data, ...props }) => {
  return(
      <div className="bg-indigo-900 rounded-md w-64">
          <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
          <p>{data}</p>
      </div>
  )
};

export default Load;