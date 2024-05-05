import React from 'react';
import styles from './footer.module.css';

import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.contact}>
        <li><p>Meu contato: <br /> (35) 99915-1050</p></li>
        <li><p>Email: <br /> hector752220@gmail.com</p></li>
      </ul>

      <ul className={styles.socialLinks}>
        <li>
          <a target='_blank' href="https://github.com/Noww01"><img src={githubIcon} alt="ERROR"/></a>
        </li>
        <li>
          <a target='_blank' href="https://www.linkedin.com/in/hector-augusto-59a2b9297/"><img src={linkedinIcon} alt="ERROR"/></a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;