import React, { useEffect, useState } from 'react';

import styles from './content.module.css';

const phrases = [
  'Hector',
  'Desenvolvedor Back-end',
  'Aluno DNC',
]

function Content() {
  const [text, setText] = useState(' ');
  const [loop, setLoop] = useState(0);
  const [isDel, setIsDel] = useState(false);
  const period = 130;
  const [delta, setDelta] = useState(130);

  const type = () => {
    console.log(text)

    let fullText = phrases[loop % phrases.length];
    let updatedText = isDel ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
  
    setText(updatedText);
  
    if (!isDel && updatedText === fullText) {
      setIsDel(true);
      setDelta(period);
    } else if (isDel && updatedText === '') {
      setIsDel(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  }

  useEffect(() => {
    let timer = setInterval(() => {
      type();
    }, delta);

    return () => {clearInterval(timer)}
  }, [text])

  return (
    <div className={styles.content}>
        <h1>Olá, sou {text}!</h1>

        <p className={styles.description}>Sou desenvolvedor back-end, futuro desenvolvedor Full Stack, aluno da escola DNC.
        Sou apaixonado por tecnologia desde criança e venho estudando a alguns anos, e conheçendo as tecnologias mais famosas
        ou até mesmo as menos famosas do mercado.</p>
        <button className={styles.about_button}>Saber mais</button>
    </div>
  );
}

export default Content;