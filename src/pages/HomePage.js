import React, { useEffect, useState,useContext } from "react";
import Container from "@material-ui/core/Container";
import CardList from "../components/CardList";
import axios from "axios";

import {AuthContext} from "../context/AuthContext"


const HomePage = () => {
  // const [postData, setPostData] = useState([]);
  const {postList, setPostList, fetchDataList}=useContext(AuthContext)

  fetchDataList()
  .then((data) => {
    setPostList(data)
    })
    .catch((err) => {
      console.log(err)   
    });

  useEffect(() => {
    fetchDataList();
  }, [postList]);

  return (
    <Container>
      <CardList postData={postList} />
    </Container>
  );
};
export default HomePage;
