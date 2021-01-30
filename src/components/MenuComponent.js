import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Link from "@material-ui/core/Link";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";

// STYLE
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  paper1: {
    position: "absolute",
    width: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: 8,
    textAlign: "center",
  },
  container: {
    position: "absolute",
    top: 130,
    right: 160,
  },
  container1: {
    position: "absolute",
    top: 130,
    right: 20,
  },
  menuText: {
    fontSize: 15,
  },
  menuText1: {
    fontSize: 12,
  },
  modalText: {
    fontSize: 15,
    marginRight: 10,
  },
  modalText1: {
    fontSize: 12,
    marginLeft: 10,
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// COMPONENT

export default function MenuComponent({ slug }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const matches = useMediaQuery("(min-width:750px)");
  //   const { slug } = useParams();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const onDelete = async () => {
    const Token = localStorage.getItem("Token");
    const res = await axios.delete(
      `https://blog-backend-ysf.herokuapp.com/${slug}/update`,
      {
        headers: {
          Authorization: `Token ${Token}`,
        },
      }
    );
    console.log(res);
    history.push("/");
  };

  const body = (
    <div
      style={modalStyle}
      className={matches ? classes.paper : classes.paper1}
    >
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">Are you sure to delete this post ?</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCloseModal}
        className={matches ? classes.modalText : classes.modalText1}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onDelete()}
        className={matches ? classes.modalText : classes.modalText1}
      >
        Delete
      </Button>
    </div>
  );

  return (
    <div className={matches ? classes.container : classes.container1}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
        className={matches ? classes.menuText : classes.menuText1}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href={`/${slug}/update`}>
          <StyledMenuItem>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="EDIT" />
          </StyledMenuItem>
        </Link>
        <Button onClick={handleOpenModal}>
          <StyledMenuItem>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </StyledMenuItem>
        </Button>

        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </StyledMenu>
    </div>
  );
}
