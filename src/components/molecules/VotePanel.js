import React from 'react';

/**import composent */
import Img from '../atoms/Img';
import Load from '../atoms/Load';

/**import FontAwesome et des icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const VotePanel = ({ data, fCallBack, ...props }) => {
    if (data === undefined) { /** Affichage un chargement le temps que les données arrive chez le client*/
        return(
            <div className="flex justify-center items-center my-4">
               <Load data={"Loading Img"}/>   
            </div>
        )
    }else{
        let tabImg = { /**Ce tableau prépare les données de l'image pour les envoyer au composant IMG */
            src: data.data[0].url,
            alt: data.data[0].id,
        }
        return(
            <div className="border-2 rounded-md bg-blue-50 p-4">  {/**Affichage de l'image */}
                <div className="flex justify-center my-2">
                    <Img data={tabImg} type={"img-full"}/>
                </div>
                <div className="flex justify-around w-full text-white font-bold"> {/** Affichage des boutons de vote */}
                    <div className="bg-green-500 buttonVote" onClick={() => fCallBack(1)}>
                        <FontAwesomeIcon className="m-1" icon={faHeart} />
                        <p className="m-1">LOVE IT</p>
                    </div>
                    <div className="bg-red-500 buttonVote" onClick={() => fCallBack(0)}>
                        <FontAwesomeIcon className="m-1" icon={faTimesCircle} />
                        <p className="m-1">NOPE IT</p>
                    </div>  
                </div>
            </div>
        ); 
    }
};

export default VotePanel;