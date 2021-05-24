import React from 'react';
import Img from '../atoms/Img';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export const FavPanel = ({ data, fCallBack, ...props }) => {

    let tabImg = {
        src: data.image.url,
        alt: data.image.id,
    }
  return(
    <div className="m-2 w-56 h-56 rounded-md overflow-hidden">
        <div className="w-full">
            <Img data={tabImg} type={"img-limited"}/>
        </div>
        <div className="w-full flex justify-center bg-red-500 text-white font-bold  py-2 text-4xl" onClick={() => fCallBack(data.id)}>
            <FontAwesomeIcon className=" transform hover:scale-105 duration-100 cursor-pointer" icon={faTimesCircle} />
        </div>
    </div>
  );
};


export default FavPanel;