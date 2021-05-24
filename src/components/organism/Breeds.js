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
    <section className="w-full">
      <div className="flex justify-around">
        <Title data="choose a cat breed" type="h2"/>
        <Select data ={breedsListe} fCallBack={updateInfo}/>
      </div>
      <div>
        {breedsSelect !== undefined ? /**if */
          <div>
            <Title data={breedsSelect.name} type="h2"/>
            <div className="md:flex">
              <div>
                <div>
                  <Title data="Origin" type="h3"/>
                  <p>{breedsSelect.origin}</p>
                </div>
                <div>
                  <Title data="Temperament" type="h3"/>
                  <p>{breedsSelect.temperament}</p>
                </div>
                <div>
                  <Title data="Description" type="h3"/>
                  <p>{breedsSelect.description}</p>
                </div>
              </div>
              <div>
                <div>
                  <Img data = {{src:breedsSelect.image.url, alt: breedsSelect.id}} type={"img-full"} />
                </div>
                <div>
                  <Link data={breedsSelect.wikipedia_url} value="Wiki page "/>
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