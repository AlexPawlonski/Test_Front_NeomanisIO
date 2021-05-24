import {React, useState, useEffect} from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/**import composent */
import Button from '../atoms/Button'
import Select from '../atoms/Select'
import Img from '../atoms/Img'
import Load from '../atoms/Load'

/**import img default*/
import imgDefault from '../../img/imgDefault.jpg'

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';


export const Random = ({ data, ...props }) => {

    const [imgType, setType] = useState();
    const [img, setImg] = useState();
    const [fav = false, setFav] = useState();

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
        console.log(post_body);
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
            <div className="flex justify-around">
                <div>
                    <Button data={"RANDOM"} fCallBack={requestNexImg}/>
                </div>
                <div> 
                    <Select data ={["jpg,png", "gif", "gif,jpg,png"]} fCallBack={setType}/>
                </div>  
            </div>
            <div className="flex justify-center items-center m-5">
                {img !== undefined ?<Img data={img} type="img-full"/>: <Load data={"Loading Img"}/>}
            </div>
            <div>
                {!fav ? <Button data={"ADD FAV"} fCallBack={addFav}/> : <div className="w-full flex justify-center items-center bg-green-500 text-white font-bold rounded-md"><FontAwesomeIcon icon={faHeart} className="mx-2" /><p className="mx-2">In your favorites</p></div>}
            </div>
        </section>
    );
};

export default Random;