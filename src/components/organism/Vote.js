import {React, useState, useEffect} from 'react';
import axios from 'axios';
/**import composent */
import VotePanel from '../molecules/VotePanel'
import Title from '../atoms/Title';

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';

export const Vote = ({ data, ...props }) => {

    const [img, setImg] = useState();

    const imgRequest = async () => {
        const res = await axios('/images/search');
        setImg(res);
    }
    useEffect(() => { 
      imgRequest();
    },[])

    function voteCat (data) {
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
      imgRequest();
    }
    return(
      <section>
        <div>
          <Title data={"You like this cat ?"} type={"h2"}/>
        </div>
        <VotePanel data={img} fCallBack={voteCat} />
      </section>
    );
};


export default Vote;