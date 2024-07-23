'use client'
import React, {useState} from "react";
import styles from "./page.module.css";
import {Carousel} from 'antd'
import Image from "next/image";

const contentStyle = {
  height: '60vh',
  width:'100%',
 
};



export default function Home() {
  const [dotPosition, setDotPosition] = useState('bottom');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  
  return (
    <>
    <main className={styles.main}>

<Carousel dotPosition={dotPosition} autoplay>

         <div>
          <Image src='/logo.png' alt="slider"  objectFit="cover" height={500} width={1000}/>
        </div>
        <div>
        <Image src='/assets/rtc/posters/poland.jpeg' alt="slider"  objectFit="contain" fill/>
        </div>
      
      </Carousel>
    </main>
    </>
  );
}
