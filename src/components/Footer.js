import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href='https://instagram.com/__s_i_n_g_l_e_p_a_i_y_a_n?igshid=ZDc4ODBmNjlmNQ=='><InstagramIcon /></a>
        <TwitterIcon />
        <FacebookIcon />
        <a href='https://www.linkedin.com/in/arunkumar-k-9553b9206'> <LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 arunkumarcse1999@gmail.com</p>
    </div>
  );
}

export default Footer;