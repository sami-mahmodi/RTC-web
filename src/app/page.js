import { Col, Row } from "antd";
import styles from "./page.module.css";




export default function Home() {

  
  return (
    <>
    <main className={styles.main}>
      <Row className={styles.wrapper}>
        <Col span={24} md={12}>
          <h1 >Right Time Consulting Services </h1>
        </Col>
        <Col>
        </Col>
      </Row>

    </main>
    </>
  );
}
