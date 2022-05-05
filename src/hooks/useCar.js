import axios from "axios";
import React, { useEffect, useState } from "react";

const useCar = (itemId) => {
  const [car, setCar] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://stormy-forest-45814.herokuapp.com/inventory/${itemId}`
      );
      setCar(data);
    })();
  }, [car]);
  return [car, setCar];
};

export default useCar;


// https://stormy-forest-45814.herokuapp.com/