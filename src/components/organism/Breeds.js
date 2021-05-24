import {React, useState, useEffect} from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

/**import composent */
import Title from '../atoms/Title'
import Select from '../atoms/Select'
import Img from '../atoms/Img'
import Link from '../atoms/Link'

/**On définit la clé API et son url */
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'dc98602d-c393-4e02-8795-0d5652023ae8';

export const Breeds = ({ data, ...props }) => {

  const [breedsListe=["loading ..."], setBreedsListe] = useState();
  const [breedsData, setBreedsData] = useState()
  const [breedsSelect, setBreedsSeclect] = useState()

  useEffect(() => {
    const getBreeds = async () => {
      const res = await axios('/breeds');
      setBreedsData(res.data)
      let breedsTab = []
      res.data.map( val => breedsTab.push(val.id))
      setBreedsListe(breedsTab)
    }
    getBreeds()
    
  },[])

  console.log(breedsListe);

  function updateInfo (data) {
    console.log(data);
    console.log(breedsData);
    breedsData.map( val => val.id === data? setBreedsSeclect(val) : "")
  }
  console.log(breedsSelect);
  return(
    <section className="w-full m-4">
      <div className="flex justify-around border-0 border-b-2 p-2">
        <Title data="Cats around the world" type="h2"/>
        <Select data ={breedsListe} fCallBack={updateInfo}/>
      </div>
      <div>
        {breedsSelect !== undefined ? /**if */
          <div>
            <div className="text-center my-4 bg-blue-600 rounded-md p-4 text-white">
              <Title data={breedsSelect.name} type="h2"/>
            </div>
            <div className="md:flex border-2 rounded-md bg-blue-50">
              <div className="m-4">
                <div className="my-3">
                  <Title data="Origin" type="h3"/>
                  <p className="my-1 border-t-2 border-0 ">{breedsSelect.origin}</p>
                </div>
                <div className="my-3">
                  <Title data="Temperament" type="h3"/>
                  <p className="my-1 border-t-2 border-0 ">{breedsSelect.temperament}</p>
                </div>
                <div className="my-3">
                  <Title data="Description" type="h3"/>
                  <p className="my-1 border-t-2 border-0 " >{breedsSelect.description}</p>
                </div>
              </div>
              <div className="m-4">
                <div className="m-3 w-72">
                  <Img data = {{src:breedsSelect.image.url, alt: breedsSelect.id}} type={"img-full"} />
                </div>
                <div className="flex justify-center items-center ">
                  <Link data={breedsSelect.wikipedia_url} value="Wiki page"/>
                </div>
              </div>
            </div>
          </div>
        :/**else */
          <div className="flex justify-center items-center">
            <div className="m-20 p-5 bg-blue-600 rounded-md text-white font-bold flex justify-center items-center">
              <FontAwesomeIcon icon={faCat} />
              <p className="mx-2">Select a Breed</p>
              <FontAwesomeIcon icon={faCat} />
            </div>
          </div>
        }
      </div>
    </section>
  )
}


export default Breeds;