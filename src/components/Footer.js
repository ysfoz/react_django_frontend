import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

export const Footer = () => {
  return (
    <footer
      style={{
        flexShrink: 1,
        textAlign: "center",
        backgroundColor: "azure",
        color: "white",
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
      
      
      }}
    >
        <div >
      <IconButton aria-label="Comment">
          <Link href='https://www.linkedin.com/in/ysf-öztürk/'>
        <LinkedInIcon color='primary' />
          </Link>
      </IconButton>
      <IconButton aria-label="Comment">
      <Link href='https://github.com/ysfoz'>
        <GitHubIcon color='action'/>
        </Link >
      </IconButton>
      <IconButton aria-label="Comment">
      <Link href="mailto:ysfozturk3@gmail.com">
        <MailIcon color='secondary'/>
        </Link>
      </IconButton>
        </div>

      <p style={{color:'#62727b',margin:'auto 10px'}}>Designed by Anonymous © Ysf Studio 2021 All right reserved</p>
    </footer>
  );
};
