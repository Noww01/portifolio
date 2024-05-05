import React from 'react';
import styles from './navbar.module.css'

import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <ul className={styles.links}>
          <li>Projetos</li>
          <li>Tecnologias</li>
          <li>Sobre mim</li>
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

export default Navbar;