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
            <div className="flex justify-center items-center my-4">
               <Load data={"Loading Img"}/>   
            </div>
        )
    }else{
        let tabImg = {
            src: data.data[0].url,
            alt: data.data[0].id,
        }
        return(
            <div className="border-2 rounded-md bg-blue-50 p-4">
                <div className="flex justify-center my-2">
                    <Img data={tabImg} type={"img-full"}/>
                </div>
                <div className="flex justify-around w-full text-white font-bold">
                    <div className="flex justify-around items-center bg-green-500 rounded-md px-2 py-1 transform hover:scale-105 duration-100 cursor-pointer" onClick={() => fCallBack(1)}>
                        <FontAwesomeIcon className="m-1" icon={faHeart} />
                        <p className="m-1">LOVE IT</p>
                    </div>
                    <div className="flex justify-around items-center bg-red-500 rounded-md px-2 py-1 transform hover:scale-105 duration-100 cursor-pointer" onClick={() => fCallBack(0)}>
                        <FontAwesomeIcon className="m-1" icon={faTimesCircle} />
                        <p className="m-1">NOPE IT</p>
                    </div>  
                </div>
            </div>
        ); 
    }
};


export default VotePanel;