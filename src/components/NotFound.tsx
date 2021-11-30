import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.errorContainer}>
      <div>
        <h1 className={styles.errorH1}>404 - Página não encontrada!</h1>
      </div>
    </div>
  )
}

export default NotFound;