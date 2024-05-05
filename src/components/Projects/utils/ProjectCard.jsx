import React from 'react';

import styles from './projectCard.module.css';

function ProjectCard(props) {
  return (
    <div className={styles.card}>
        <img className={styles.projectImage} src={props.image} alt="ERROR" />
        <h2>{props.projectName}</h2>
        <p>{props.description}</p>
        <a target='_blank' href={props.link}>Clique aqui</a>
    </div>
  );
}

export default ProjectCard;