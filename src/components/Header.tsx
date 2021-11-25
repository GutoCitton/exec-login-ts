import Menu from "./Menu"
import logo from '../images/logo-footer.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className='container'>
          <div className={styles.headerContainer}>
            <a href="/">
              <img width='140px' src={logo} alt="Logo" />
            </a>
            <Menu />
          </div>
        </div>
    </header>
  )
}

export default Header