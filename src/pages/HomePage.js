import React, { useEffect } from 'react';
import Container from "@material-ui/core/Container";
import CardList from '../components/CardList';
import axios from 'axios';





const HomePage = () => {

  const fetchData = async () => {
    const result= await axios.get(
      'https://blog-backend-ysf.herokuapp.com/list/',
    );
    return (result.data)
}

useEffect(() =>{
  fetchData()
  
})

  return (
    <Container>
      <CardList/>
    </Container>
  );
};
export default HomePage;

