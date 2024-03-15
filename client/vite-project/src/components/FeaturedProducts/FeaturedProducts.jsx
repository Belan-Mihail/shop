import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from 'axios'


// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );

const [products, setProducts] = useState([])

useEffect(() => {
const fetchData = async () => {
  try {
    const data = await axios.get(process.env.REACT_APP_API_URL + '/products', {
      headers: {
        Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN
      }
      
    })
    console.log(data)
  } catch (err) {
    console.log(err)
  }
};
fetchData();
}, [])



  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;

//8 add base html and styles (only base)
//9 create Card 

//25 c