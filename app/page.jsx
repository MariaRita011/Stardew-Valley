'use client'
import styles from './page.module.css'
import ModalIntro from './components/modalintro/ModalIntro'
import { useState } from 'react'

export default function Home() {

  const [modal, setModal] = useState(true)

  function fechar() {
    setModal(false)
  }

  return (
    <main className={styles.containerPrincipal}>
      <div className={styles.ContainerLogo}>
<img src={'/pngs/mainlogo.png'} alt={'Logo'} width={600} />
      </div>
      {
        modal ? (
<ModalIntro
        nome={"Maria Rita"}
        imagem={"/pngs/mrperson.png"}
        fechar={fechar}
        texto={"Ola, seja bem-vindo(a) ao meu site de Stardew Valley. Aqui voce encontra um guia completo (ou quase completo) do jogo. Lembrando que esse e um site totalmente feito afim de estudos. Divirta-se!"} />
        ) : (
          null
        )
      } 
      
    </main>
  )
}
