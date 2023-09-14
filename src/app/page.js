'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Enviar from './components/enviar';
import styles from './page.module.css'
import Listar from './components/listar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Enviar />
      <Listar />  
    </main>
  )
}
