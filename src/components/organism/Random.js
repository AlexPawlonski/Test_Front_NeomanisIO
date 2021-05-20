import {React, useState} from 'react';
import axios from 'axios';

/**import composent */
import Button from '../atoms/Button'
import Select from '../atoms/Select'
import Img from '../atoms/Img'

/**import img default*/
import imgDefault from '../../img/imgDefault.jpg'

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';


export const Random = ({ data, ...props }) => {

    const [imgType, setType] = useState();
    const [img={ src: imgDefault, alt:"imgDefault", id: ""}, setImg] = useState();

    const requestNexImg = async () => {
        /** cette fonction permet de récupérer des images en fonction du type sélectionné par l'utilisateur */
        const res = await axios('/images/search?mime_types='+imgType);
        let img = {
            src : res.data[0].url,
            alt : res.data[0].id,
            id : res.data[0].id
        }
        setImg(img);
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
    }
    
    return(
        <section className="w-full">
            <div> 
                <Select data ={["jpg,png", "gif", "gif,jpg,png"]} fCallBack={setType}/>
            </div>
            <div>
                <Button data={"RANDOM"} fCallBack={requestNexImg}/>
            </div>
            <div>
                <Img data={img} type="img-full"/>
            </div>
            <div>
                <Button data={"ADD FAV"} fCallBack={addFav}/>
            </div>
        </section>
    );
};

export default Random;