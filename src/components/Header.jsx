import React from 'react';
import './header.scss'; // Ensure correct path if SCSS is not directly in the same directory
import Link from 'next/link';
import Image from 'next/image';

const paths = [
  {
    linkName: 'Home',
    linkPath: '/'
  },
  {
    linkName: 'About',
    linkPath: '/about'
  },
  {
    linkName: 'Contact',
    linkPath: '/contact'
  }
];

const LinkRoute = ({ path, pathName }) => (
  <Link href={path} >
    <div className="link">{pathName}</div>
  </Link>
);

function Header() {
  return (
    <div className="wrapper">
        <div>
         <Image src='/assets/rtc/LOGO.png' width={40} height={40}></Image>
        </div>
        <div>

      {paths.map((pathObj, index) => (
          <LinkRoute key={index} path={pathObj.linkPath} pathName={pathObj.linkName} />
          ))}
          </div>
    </div>
  );
}

export default Header;
