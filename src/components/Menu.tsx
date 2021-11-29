import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import styles from './Menu.module.css'

const Menu = () => {
  const {handleLogout, auth} = useContext<any>(AuthContext)
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to='/login' onClick={handleLogout}>Login</Link></li>
        <li><Link to='/pessoa'>pessoa</Link></li>
        <li>{auth && <button onClick={handleLogout} className={styles.btnSair}>Sair</button>}</li>
      </ul>
    </nav>
  )
}

export default Menu;