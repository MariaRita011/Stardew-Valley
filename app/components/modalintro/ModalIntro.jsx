'use client'
import React, { useState, useEffect } from 'react';
import styles from "./modalIntro.module.css";

const ModalIntro = ({ imagem, nome, texto, fechar }) => {
  const [aparecerTexto, setAparecerTexto] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < texto.length) {
        setAparecerTexto((prevText) => prevText + texto[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 35); // ajuste a velocidade conforme necessário

    return () => clearInterval(intervalId);
  }, [texto, index]);

  return (
    <div className={styles.container}>
      <div className={styles.textoIntro}>
        <span className={styles.text}>{aparecerTexto}</span>
      </div>
      <div className={styles.infos}>
        <div className={styles.containerButtonClose}>
      <button onClick={fechar} className={styles.buttonClose} ><p className={styles.close}>x</p></button>
        </div>
      <div className={styles.imgNome}>
        <img className={styles.imagem} src={imagem} width={200} height={200} alt="Imagem" />
        <h1 className={styles.titulo}>{nome}</h1>
      </div>
      </div>
    </div>
  );
};

export default ModalIntro;