import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        display:'flex',
        justifyContent:'end'
      },
    }))

export const HomeButton = () => {
    const classes = useStyles()
    return (
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Link href='/'>
            <Button
          type="submit"
          variant="contained"
          color="action"
          className={classes.button}
          endIcon={<HomeIcon></HomeIcon>}
        >
          Main Page
        </Button>
        </Link>
        </div>
    )
}
