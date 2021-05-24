import {React, useState, useEffect} from 'react';
import axios from 'axios';

/**import composent */
import FavPanel from '../molecules/FavPanel'
import Title from '../atoms/Title';
import Load from '../atoms/Load';

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';

export const Fav = ({ data, ...props }) => {
  const [fav, setFav] = useState();

  useEffect(() => {
    const getFav = async () => {
      const res = await axios('/favourites');
      setFav(res);
      console.log(res);
    }
    getFav() 
    console.log(fav);
  },[])

 

  function deleteFav (data) {
    const deleteFavSend = async () => {
      console.log("DELETE fav");
      console.log(data);
      const res = await axios.delete('favourites/'+data);
      console.log(res); 
      getFav()
    }
    const getFav = async () => {
      const res = await axios('/favourites');
      setFav(res);
      console.log(res);
    }
    deleteFavSend();
    console.log(fav);
  }
  
  return(
    <section className="w-full m-4">
      <div className="my-4 text-center">
        <Title data={"Your favourites"} type={"h2"}/>
      </div>
        { fav ? 
          <div className="flex justify-center flex-wrap items-center p-4 border-2 rounded-md bg-blue-50">
            { fav.data.map( val => <FavPanel data={val} fCallBack={deleteFav}/>)}
          </div> : 
          <div className="flex justify-center items-center my-4">
            <Load data={"Loading Fav"}/> 
          </div>}
    </section>
  );
};


export default Fav;