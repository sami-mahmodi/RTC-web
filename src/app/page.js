import { Col, Row } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import '../styles/global.css';
import SlickSlider from "@/components/homeSlider";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          
            <SlickSlider />
         
      </main>
    </>
  );
}
