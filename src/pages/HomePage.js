import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import CardList from "../components/CardList";
import { AuthContext } from "../context/AuthContext";
import PaginationButtons from "../components/PaginationButtons";
import logo from "../assets/load.gif";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import SliderText  from "../components/SliderText";

const useStyles = makeStyles((theme) => ({
  small: {
    width: "30%",
    height: "30%",
    margin: "50vh auto",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const { postList, fetchDataList, loading } = useContext(AuthContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchDataList(page);
  }, [page]);
  return (
    <Container>
      {loading ? (
        <Avatar alt="Remy Sharp" src={logo} className={classes.small} />
      ) : (
        <>
          <SliderText />
          <PaginationButtons setPage={(value) => setPage(value)} page={page} />
          <CardList postData={postList} />
        </>
      )}
    </Container>
  );
};
export default HomePage;
