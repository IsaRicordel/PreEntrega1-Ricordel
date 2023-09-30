import React from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div style={styles.NavBar}>
        <h1>
          Altitude
        </h1>
      
        <div style={styles.Links}>
          <Link to={"/"}> Home </Link>
          <Link to={"/Cart"}> Cart </Link>
          <Link to={"/Products"}> Products </Link>
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
    borderBottom: "1px solid black",
  },

  Links: {
    width: '30%',
    display: 'flex',
    padding: '2rem',
    justifyContent: 'space-between',
  }

}

export default NavBar;