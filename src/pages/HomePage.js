import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import CardList from "../components/CardList";
import { AuthContext } from "../context/AuthContext";
import PaginationButtons from "../components/PaginationButtons";

const HomePage = () => {
  const { postList, fetchDataList } = useContext(AuthContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchDataList(page);
  }, [page]);

  return (
    <Container>
      <CardList postData={postList} />
      <PaginationButtons setPage={(value) => setPage(value)} />
    </Container>
  );
};
export default HomePage;
