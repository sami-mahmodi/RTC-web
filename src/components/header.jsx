import React from 'react'
import styles from './header.module.css';
import NavLink from './nav-link';
import Image from 'next/image';


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
     <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
      
    <NavLinks className={styles.navDesktop}/>
    </header>
  )
}