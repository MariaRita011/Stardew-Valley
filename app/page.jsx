import styles from './page.module.css'
import ModalIntro from './components/modalintro/ModalIntro'

export default function Home() {

  return (
    <main className={styles.containerPrincipal}>
      <ModalIntro
        nome={"teste"}
        imagem={"/pngs/mrperson.png"}
        texto={"Ola, seja bem-vindo(a) ao meu site de Stardew Valley. Aqui voce encontra um guia completo (ou quase completo) do jogo. Lembrando que esse e um site totalmente feito afim de estudos. Divirta-se!"} />
    </main>
  )
}
