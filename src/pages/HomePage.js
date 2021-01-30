import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CardList from "../components/CardList";
import axios from "axios";

const HomePage = () => {
  const [postData, setPostData] = useState([]);

  async function fetchData() {
    try {
      const results = await axios.get(
        "https://blog-backend-ysf.herokuapp.com/list/"
      );
      setPostData(results?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <CardList postData={postData} />
    </Container>
  );
};
export default HomePage;
