import React from 'react';

import styles from './aboutMe.module.css';

function AboutMe() {
  return (
    <div className={styles.about_me}>
        <h1>Sobre mim</h1>

        <div>
            <div className={styles.timeline}>
                <ul className={styles.years}>
                    <li>
                        <p>2017</p>
                    </li>
                    <li>
                        <p>2020</p>
                    </li>
                    <li>
                        <p>2021</p>
                    </li>
                    <li>
                        <p>2023</p>
                    </li>
                </ul>

                <div className={styles.timeline_bar}></div>
                
                <ul className={styles.dot_container}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <ul className={styles.year_description}>
                <li>
                    <p>Por volta dos meus 13 anos, começei meus estudos teóricos em Hardware, redes de computadores e programação.</p>
                </li>
                <li>
                    <p>Aos 16, comprei um computador e começei os estudos práticos com foco em programação web.</p>
                </li>
                <li>
                    <p>Depois de uns meses, decidi focar no back-end. Criei e vendi alguns projetos básicos em JavaScript que era minha linguagem principal.</p>
                </li>
                <li>
                    <p>Passei a ampliar meus conhecimentos em outras áreas/linguagens, e decidi fazer alguns cursos para me tornar Full Stack e conseguir uma boa vaga de emprego.</p>
                </li>
            </ul>
            </div>

        </div>
    </div>
  );
}

export default AboutMe;