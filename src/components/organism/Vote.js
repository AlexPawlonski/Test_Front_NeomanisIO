import {React, useState, useEffect} from 'react';
/** import de axio pour gérer les requêtes à l’API */
import axios from 'axios';

/**import FontAwesome et des icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/**import composent */
import VotePanel from '../molecules/VotePanel'
import Title from '../atoms/Title';

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';

export const Vote = ({ data, ...props }) => {
    /**Déclaration des hook qui vont servir à stocker les données récupérées de l’API */
    const [img, setImg] = useState();

    const imgRequest = async () => {
        const res = await axios('/images/search');
        setImg(res);
    }
    /** useEffect permet d'exécuter une requête à l'initialisation d'un composant  */
    useEffect(() => { 
      imgRequest();
    },[])

    function voteCat (data) { /**Cette fonction exécute la requête est défini le l'entête pour envoyer un vote à l’API */
      const addVote = async () => {
        console.log("ADD Vote");
        const post_body = JSON.stringify ({
            image_id: img.data[0].id,
            sub_id: "User-123",
            value: data
        })
        console.log(post_body);
        const res = await axios.post('votes', post_body,{
            headers: {
            'Content-Type': 'application/json'
            }
        });
        console.log(res);
      }
      addVote();
      imgRequest(); /**elle recharge aussi une nouvelle image */
    }
    return(
      <section  className="w-full m-4">
        <div className="titreHead">
          <FontAwesomeIcon icon={faHeart} className="mx-4 text-red-500" />
          <Title data={"You like this cat ?"} type={"h2"}/>
          <FontAwesomeIcon icon={faHeart} className="mx-4 text-red-500" />
        </div>
        <VotePanel data={img} fCallBack={voteCat} /> {/**Composants qui s'occupe de l'affichage et de la mise en forme de l'image et des boutons de vote */}
      </section>
    );
};


export default Vote;