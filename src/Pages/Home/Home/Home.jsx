import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import PopularBrands from '../Popular_Brands/PopularBrands';

const Home = () => {
     return (
          <>
               <Banner />
               <Inventory />
               <PopularBrands />
               <About />
          </>
     );
};

export default Home;