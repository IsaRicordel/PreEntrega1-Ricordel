import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logoimg from '../../Img/logo-altitude.png'


const NavBar = () => {
  return (
    <div style={styles.NavBar}>
        <Link to="/">
          <img className="imglogo" src={logoimg} alt="logo-altitude" width={120} height={70} />
        </Link>
      
        <div style={styles.Links}>
          <Link style={styles.Link} to={"/"}> Home </Link>
          <Link style={styles.Link} to={"/Products"}> Products </Link>
          <Link style={styles.Link} to={"/Cart"}> 
            <div style={styles.CartWidget}>
              <CartWidget/>
            </div>
          </Link>
        </div>



    </div>
  )
}

const styles = {
  NavBar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '30px',
    backgroundColor: '#ffe4c4',
    borderBottom: "1px solid #f2b9af",
  },

  Links: {
    width: '30%',
    display: 'flex',
    padding: '2.5rem',
    justifyContent: 'space-between',
  },

  Link: {
    color: 'black',
    fontSize: 18,
    fontWeight: 600,
    textDecoration: 'none',
  },

}

export default NavBar;