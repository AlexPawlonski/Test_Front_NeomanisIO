import React from 'react';
import Img from '../atoms/Img';
import Load from '../atoms/Load';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const VotePanel = ({ data, fCallBack, ...props }) => {
    console.log(data);
    if (data === undefined) {
        return(
            <Load data={"Loading Img"}/>   
        )
    }else{
        let tabImg = {
            src: data.data[0].url,
            alt: data.data[0].id,
        }
        return(
            <div>
                <div>
                <Img data={tabImg} type={"img-full"}/>
                </div>
                <div onClick={() => fCallBack(1)}>
                    <FontAwesomeIcon icon={faHeart} />
                    <p>LOVE IT</p>
                </div>
                <div onClick={() => fCallBack(0)}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                    <p>NOPE IT</p>
                </div>
            </div>
        ); 
    }
};


export default VotePanel;