import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCars = () => {
     const [cars,setCars] = useState([])
     useEffect(()=> {
          (async () => {
              const {data} = await axios.get('data.json')
          //     console.log(data);
              setCars(data)
             })();
          // axios.get('data.json')
          // .then(res => console.log(res.data))

     },[])
     return [cars,setCars]
};

export default useCars;