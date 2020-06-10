import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import baseUrl from '../utils/baseUrl';


function Home({products}) {
  //return <>home</>;
  return <ProductList products={products}  />
}

Home.getInitialProps = async () =>{
  //fetch data on server (buscar datos en el servidor)
  //return response data as an object (regresa datos como objecto)
  //return {hello : 'world'}
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return {products : response.data}
  //note: this object will be merged with existing props (este objecto se fusionara con los accesorios[props] existentes)

}

export default Home;
