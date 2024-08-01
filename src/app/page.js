import { Col, Row } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import '../styles/global.css';


export default function Home() {

  
  return (
    <>
    <main className={styles.main}>
      <Row className={styles.wrapper} gutter={[16,16]}>
        <Col span={24} md={12} >
          <h1 className={styles.heading}>Right Time Consulting Services </h1>
          <p className={styles.para}>
          At RIGHT TIME CONSULTING, we specialize in simplifying the visa process and helping individuals achieve their dreams of studying, working, and living abroad. Our dedicated team of experts provides comprehensive support and personalized guidance tailored to your unique needs. Whether you're pursuing educational opportunities, seeking employment, or planning to explore the world, we are here to make your journey seamless and stress-free. Trust us to navigate the complexities of visa applications, so you can focus on your exciting new chapter.
          </p>
        </Col>
        <Col span={24} sm={10} md={11}>
            <Image layout="fill" alt="Home Image" src='/assets/posters/poland.jpeg' style={{objectFit:'contain'}}/>
           
          </Col>
      </Row>
    </main>
    </>
  );
}
