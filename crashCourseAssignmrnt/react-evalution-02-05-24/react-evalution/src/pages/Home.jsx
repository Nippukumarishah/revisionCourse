import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Error from '../components/Error';

import { Container,  HStack, Select, SimpleGrid } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sortValue, setSortValue] = useState("");
    const [filterValue, setFilterValue] = useState("");
    let queryParams = {};

    async function fetchData(filterValue, sortValue) {
        setLoading(true);
        setError(false);
        try {
          if (sortValue) {
            queryParams.sort = "price";
            queryParams.order = sortValue;
          }
          if (filterValue) {
            queryParams.filter = filterValue;
          }
          let res = await axios({
            method: "get",
            url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
            params: queryParams,
          });
          
          setProducts(res?.data?.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }
    
    useEffect(() =>{
       
        fetchData(filterValue, sortValue)
    },[filterValue, sortValue])

    if(loading){
        return <Loading />
    }
    if(error){
        return<Error />
    }
  return (
    <Container>
    <HStack spacing={4} mt={4}>
      <Select
        placeholder="Sort by Price"
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="asc">ascending</option>
        <option value="desc">Descending</option>
      </Select>
      <Select
        placeholder="Filter by Category"
        onChange={(e) => setFilterValue(e.target.value)}
      >
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
        <option value="homeDecor">Home Decor</option>
      </Select>
    </HStack>
    <SimpleGrid columns={3} gap={6} w={"700px"}>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </SimpleGrid>
  </Container>
  )
}

export default Home
