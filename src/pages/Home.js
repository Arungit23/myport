import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LinkedInIcon from "@material-ui/icon/LinkedIn";
// import EmailIcon from "@material-ui/icon/Email";
import EmailIcon from '@mui/icons-material/Email';
// import GithubIcon from "@material-ui/icon/Github";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function Home() {
 return (
  <div className="home">
   <div className="about">
    <h2>Hi, My Name is Arunkumar K</h2>
    <div className="prompt">
     <p>I'm a Full Stack Developer.</p>
     <a href='https://www.linkedin.com/in/arunkumar-k-9553b9206'> <LinkedInIcon /></a>
     <a href='https://mail.google.com/mail/u/0/#inbox'><EmailIcon /></a>
     <a href='https://github.com/Arungit23'><GitHubIcon /></a>
    </div>
   </div>

   <div className="skills">
    <h1>skills</h1>
    <ol className="list">
     <li className="item">
     <h2>Front-End</h2>
     <span>
      ReactJS, Angular, Html, CSS, BootStrap, NPM
     </span>
     </li>
     <li className="item">
      <h2>Back-End</h2>
      <span>
       NodeJS, .NET, ExpressJS, SQL, MongoDB
      </span>
     </li>
     <li className="item">
      <h2>Languages</h2>
      <span>
       JavaScript, Java, c, c++, Python
      </span>
     </li>
    </ol>
   </div>

  </div>
 );
}


export default Home