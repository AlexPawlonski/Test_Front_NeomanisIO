import {React, useState, useEffect} from 'react';
/** import de axio pour gérer les requêtes à l’API */
import axios from 'axios';

/**import FontAwesome et des icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/**import composent */
import Button from '../atoms/Button'
import Select from '../atoms/Select'
import Img from '../atoms/Img'
import Load from '../atoms/Load'

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';


export const Random = ({ data, ...props }) => {
    /**Déclaration des hook qui vont servir à stocker les données récupérées de l’API */
    const [imgType, setType] = useState();
    const [img, setImg] = useState();
    const [fav = false, setFav] = useState();

    /** useEffect permet d'exécuter une requête à l'initialisation d'un composant  */
    useEffect(() => {
        requestNexImg(); 
    },[])

    const requestNexImg = async () => {
            /** cette fonction permet de récupérer des images en fonction du type sélectionné par l'utilisateur */
            const res = await axios('/images/search?mime_types='+imgType);
            let img = {
                src : res.data[0].url,
                alt : res.data[0].id,
                id : res.data[0].id
            }
            setImg(img);
            setFav(false)
        }

    const addFav = async () => {
        /**c'est fonction permet d'ajouter une image à nos favoris  ils seront à retrouver dans la partie favoris de l'application. */
        console.log("ADD fav");
        const post_body = JSON.stringify ({
            image_id: img.id,
            sub_id: "User-123"
        })
        console.log(post_body); /**En-tête de la requête qui envoie à l’API, l’ID de l'image ainsi que le nom de l'utilisateur qui ajoute un favoris */
        const res = await axios.post('favourites', post_body,
            {
                headers: {
                'Content-Type': 'application/json'
                }
            });
        console.log(res); 
        setFav(true)
    }
    
    return(
        <section className="w-full m-4 flew flex-col justify-center">
            <div className="flex justify-around border-0 border-b-2 p-2">
                <div>
                    <Button data={"CLICK HERE FOR MORE CAT !"} fCallBack={requestNexImg}/> 
                </div>
                <div className="flex items-center"> 
                    <Select data ={["jpg,png", "gif", "gif,jpg,png"]} fCallBack={setType}/>
                </div>  
            </div>
            <div className="flex justify-center items-center m-5">
                {img !== undefined ?<Img data={img} type="img-full"/>: <Load data={"Loading Img"}/> /**Si une image est chargée on l'affiche et sinon on affiche  le composant de chargement */} 
            </div>
            <div>
                {!fav ? <Button data={"ADD FAV"} fCallBack={addFav}/> : <div className="w-full flex justify-center items-center py-2 bg-green-500 text-white font-bold rounded-md"><FontAwesomeIcon icon={faHeart} className="mx-2" /><p className="mx-2">In your favorites</p></div>}
            </div>
        </section>
    );
};

export default Random;