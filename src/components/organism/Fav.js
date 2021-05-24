import {React, useState, useEffect} from 'react';
/** import de axio pour gérer les requêtes à l’API */
import axios from 'axios';

/**import FontAwesome et des icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/**import composent */
import FavPanel from '../molecules/FavPanel'
import Title from '../atoms/Title';
import Load from '../atoms/Load';

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';

export const Fav = ({ data, ...props }) => {

  /**Déclaration des hook qui vont servir à stocker les données récupérées de l’API */
  const [fav, setFav] = useState();

  /** Requête qui récupère mes favoris du compte associé à la clé API  */
  const getFav = async () => {
      const res = await axios('/favourites');
      setFav(res);
      console.log(res);
  }
  /** useEffect permet d'exécuter une requête à l'initialisation d'un composant  */
  useEffect(() => {
    getFav() 
  },[])

  /**Fonction qui permet de supprimer un favori enregistré */
  function deleteFav (data) {
    const deleteFavSend = async () => {  /**Suppression du favoris */
      console.log("DELETE fav");
      console.log(data);
      const res = await axios.delete('favourites/'+data);
      console.log(res); 
      getFav()
    }
    getFav(); /** Rafraîchissement de la liste des favoris */
    deleteFavSend();
    console.log(fav);
  }
  
  return(
    <section className="w-full m-4">
      <div className="titreHead">
        <FontAwesomeIcon icon={faStar} className="mx-4 text-yellow-400" />
          <Title data={"Your favourites"} type={"h2"}/>
        <FontAwesomeIcon icon={faStar} className="mx-4 text-yellow-400" />
      </div>
        { fav ? 
          <div className="flex justify-center flex-wrap items-center p-4 border-2 rounded-md bg-blue-50">
            { fav.data.map( val => <FavPanel data={val} fCallBack={deleteFav}/>)} {/**Si des favoris sont présents, on affiche la liste en chargeant  leurs composants,  sinon on affiche un chargement.  */}
          </div> : 
          <div className="flex justify-center items-center my-4">
            <Load data={"Loading Fav"}/> 
          </div> /** PS : Cette partie serait à retravailler pour ajouter le fait d'afficher un message quand la liste des favoris est vide pour un nouvel utilisateur par exemple.*/}
    </section>
  );
};


export default Fav;