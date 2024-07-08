import React from 'react'
import Link from 'next/link'
import styles from './navlink.module.css'

export default function NavLink({ to, children }) {
  return (
    <Link href={to} className={styles.link} activeClassName={styles.active}>
      {children}
    </Link>
  )
}