import {React, useState} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';

export const Breeds = ({ data, ...props }) => {

  return(
    <p>Breeds</p>
  )
}


export default Breeds;