'use client'
import React,{useState} from 'react'
import styles from './header.module.css';
import NavLink from './nav-link';
import { MenuOutlined } from '@ant-design/icons'
import {Drawer} from 'antd'
import Image from 'next/image';
import Link from 'next/link';


const NavLinks = props => (
  <nav {...props}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/services">Services</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
)


export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className={styles.header}>
      <Link href='/'>
     <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
      />
      </Link>
      
    <NavLinks className={styles.navDesktop}/>
    <MenuOutlined
        className={styles.toggleNav}
        onClick={() => setOpen(true)}
      />
            <Drawer
        
        open={open}
        closeable={false}
        onClose={() => setOpen(false)}
      >
        <NavLinks className={styles.navMobile} />
      </Drawer>
    </header>
  )
}