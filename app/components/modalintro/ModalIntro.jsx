import styles from "./modalIntro.module.css"
const ModalIntro = ({ imagem, nome, texto,  }) => {


    return (
        <div className={styles.container}>

            <div className={styles.textoIntro}>
                <p className={styles.text}>{texto}</p>
            </div>
            <div className={styles.imgNome}>
            <img className={styles.imagem} src={imagem} width={200} height={200}/>
            <h1 className={styles.titulo}>{nome}</h1>
            </div>

        </div>)
}
export default ModalIntro