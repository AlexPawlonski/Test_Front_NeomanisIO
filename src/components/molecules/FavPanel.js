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
    <div>
        <div>
            <Img data={tabImg} type={"img-full"}/>
        </div>
        <div onClick={() => fCallBack(data.id)}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </div>
    </div>
  );
};


export default FavPanel;