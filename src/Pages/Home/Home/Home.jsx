import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import PopularBrands from '../Popular_Brands/PopularBrands';

const Home = () => {
     return (
          <>
               <Banner />
               <Inventory />
               <PopularBrands />
          </>
     );
};

export default Home;