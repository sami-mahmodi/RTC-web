'use client'
import React, { useState } from 'react';
import styles from './header.module.css';
import NavLink from './nav-link';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';



export default function Header() {
  const [show, setShow] = useState(false);




  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="RTCS Logo"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <nav className={styles.navDesktop}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <MenuOutlined
        className={styles.toggleNav}
        onClick={() => setShow(true)}
      />
          <Drawer
        open={show}
        destroyOnClose
        closeable={false}
        onClose={() => setShow(false)}
      >
        <nav className={styles.navMobile}>
          <NavLink to="/" handleClick={()=> setShow(false)}>Home</NavLink>
          <NavLink to="/services" handleClick={()=> setShow(false)}>Services</NavLink>
          <NavLink to="/about" handleClick={()=> setShow(false)}>About</NavLink>
          <NavLink to="/contact" handleClick={()=> setShow(false)}>Contact</NavLink>
        </nav>
      </Drawer>
    </header>
  );
}
