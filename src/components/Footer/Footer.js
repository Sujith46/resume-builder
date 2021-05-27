import React from "react";
import ReactIcon from "../../assets/icons/reactjs-icon.svg";
import ReduxIcon from '../../assets/icons/redux.svg'
import NetlifyIcon from '../../assets/icons/netlify-icon.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <h4>Powered By</h4>
      <nav>
        <a href="https://reactjs.org/" target="_blank">
          <img className="Footer__Icon" src={ReactIcon} alt="react-icon"></img>
        </a>
        <a href="https://redux.js.org/" target="_blank">
          <img className="Footer__Icon" src={ReduxIcon} alt="redux-icon"></img>
        </a>
        <a href="https://www.netlify.com/" target="_blank">
          <img className="Footer__Icon" src={NetlifyIcon} alt="netlify-icon"></img>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
