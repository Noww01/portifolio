import React from 'react';

import ProjectCard from './utils/ProjectCard';
import googleImage from '../../assets/icons/google.svg'
import dnvweather from '../../assets/images/dnc_weather.png';
import architecture from '../../assets/images/architecture.png';
import portifolio from '../../assets/images/portifolio.png';

import styles from './projects.module.css';

function Projects() {
  return (
    <div>
        <h1 className={styles.projectsH1}>Projetos</h1>

        <div className={styles.projectCard}>
            <ProjectCard 
                projectName='Site de Arquitetura' 
                image={architecture}
                description='Landing Page do site de uma empresa de arquitetura 
                desenvolvida ultilizando HTML e CSS, contendo registro de dados de usuário para contato.'
                link='https://github.com/Noww01/desafio-landing-page.git'
            />
            <ProjectCard 
                projectName='DncWeather' 
                image={dnvweather}
                description='Desenvolvida ultilizando HTML, CSS, e JavaScript, DncWeather é uma página para busca de endereço
                por CEP, e previsão do tempo baseada na região do endereço localizado.'
                link='https://github.com/Noww01/dnc-desafio-2.git'
            />
            <ProjectCard 
                projectName='Meu Portifólio' 
                image={portifolio}
                description='Portifólio pessoal desenvolvido com ReactJS + Vite'
                link='https://github.com/Noww01/portifolio.git'
            />
        </div>
    </div>
  );
}

export default Projects;