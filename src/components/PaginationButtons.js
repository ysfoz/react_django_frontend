import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupSizesColors(props) {
  const { pageCount } = useContext(AuthContext);
  const classes = useStyles();
  const pageListFunc = () => {
    let pageList = [];
    for (let i = 1; i <= pageCount; i++) {
      pageList.push(i);
    }
    return pageList;
  };

  useEffect(() => {
    pageListFunc();
  }, []);
  return (
    <div className={classes.root}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {pageListFunc().map((value, index) => (
          <Button
            key={index}
            value={value}
            onClick={() => props.setPage(value)}
          >
            {value}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
