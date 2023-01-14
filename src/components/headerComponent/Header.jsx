import React, {useState} from 'react'
import styles from './Header.module.css'
import Login from '../loginComponent/Login.jsx'
import Signup from '../signupComponent/Signup.jsx'
import SearchBar from '../searchComponent/SearchBar.jsx'
import {ImCart} from "react-icons/im"
import {BsSearch} from "react-icons/bs"
import {Link} from 'react-router-dom'



const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

    const handleSearch = () => {
        setShowSearch(!showSearch)
    }
    const handleLogin = () => {
        setShowLogin(!showLogin)
    }
    const handleSignUp = () => {
        setShowSignUp(!showSignUp)
    }
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }


  return (
    // The Nav bar of the page


    <header className={styles.header}>
        <nav className={styles.full_container}>
  
            
                    <nav className={styles.left_nav}>
                      <Link to='/'><button className={styles.nav_btn}>HOME</button></Link>
                      <Link to='/CreateCard/:user'><button className={styles.nav_btn}>DESIGN</button></Link>
                      <button onclick={handleSearch} className={styles.nav_btn}>SEARCH</button>
                    </nav>
                    <nav className={styles.logo}>
                             <img src={require('./assets/bluefire.jpeg')} alt="logo" className={styles.bluefire}/>
                             <h3 className={styles.victus}>VICTUS TRADERS</h3>
                     </nav>
                     
                    <nav className={styles.right_nav}>
                        <button onClick={handleLogin} className={styles.nav_btn}>LOGIN</button>
                        <button onClick={handleSignUp} className={styles.nav_btn}>SIGN-UP</button>
                        <button onClick={handleMenu} className={styles.nav_btn}>MENU</button>
                        <Link to='/checkout:user'>
                            <nav className={styles.cart_section}>
                              <ImCart size="1.2em" color="black"/>
                              <span className={styles.circle}>0</span>
                            </nav>
                        </Link>
                        {/* <nav className={showMenu ? 'menu-show' : 'menu-hide' }>
                            <Link to="/"><button className='nav-btn' onClick={handleMenu}>Home</button></Link>
                            <Link to="/auth"><button className='nav-btn' onClick={handleMenu}>Login</button></Link>
                        </nav> */}
                </nav>
            </nav>
            {/* <div className='search-container'> */}
              {/* <nav className={'search-hide'}>
                            <SearchBar />
              </nav> */}
            {/* </div> */}
    </header>
  )
}

export default Header