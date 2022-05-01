import axios from "axios";
import React, { useEffect, useState } from "react";

const useCar = (itemId) => {
  const [car, setCar] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:5000/inventory/${itemId}`
      );
      setCar(data)
    })()

  }, []);
  return [car, setCar]
};

export default useCar;
