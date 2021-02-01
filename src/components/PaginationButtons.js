import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:15,
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
      <ButtonGroup  variant="contained" color="primary" aria-label="contained primary button group">
        {pageListFunc().map((value, index) => (
          <Button
           style={{borderRadius:'20px'}}
            key={index}
            value={value}
            onClick={() => props.setPage(value)}
            color={value == props?.page ? 'secondary' : null}
            style={{marginLeft:1}}
          >
            {value}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
