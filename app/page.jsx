import Image from 'next/image'
import styles from './page.module.css'
import ModalIntro from './components/modalintro/ModalIntro'

export default function Home() {
  return (
    <main className={styles.containerPrincipal}>
      <ModalIntro
        nome={"teste"}
        imagem={"/pngs/mrperson.png"}
        texto={" like Aldus PageMaker including versions of Lorem Ipsum."} />
    </main>
  )
}
