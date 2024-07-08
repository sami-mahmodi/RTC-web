import React from 'react'
import styles from './header.module.css';
import {Image} from 'antd'
import NavLink from './nav-link';


const NavLinks = props => (
  <nav {...props}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/network">Network</NavLink>
    <NavLink to="/gallery">Gallery</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
)


export default function Header() {

  return (
    <header className={styles.header}>
    <NavLinks className={styles.navDesktop}/>
    </header>
  )
}