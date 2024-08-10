import styles from "./page.module.css";
import { Card, Row, Col } from 'antd';
import { TeamOutlined, GlobalOutlined, SafetyOutlined } from '@ant-design/icons';
import '../styles/global.css';
import SlickSlider from "@/components/heroSection";

const cardData = [
  {
    icon: <TeamOutlined className={styles.icon} />,
    title: 'Expert Team',
    description: 'Our experienced professionals are here to guide you through every step of your journey.',
  },
  {
    icon: <GlobalOutlined className={styles.icon} />,
    title: 'Global Reach',
    description: 'We provide services to clients from all around the world, ensuring a smooth process.',
  },
  {
    icon: <SafetyOutlined className={styles.icon} />,
    title: 'Secure Process',
    description: 'Your data and privacy are our top priority, ensuring a safe and secure experience.',
  },
];
export default function Home() {
  return (
    <>
      <main className={styles.main}>
          
            <SlickSlider />
         
            <div className={styles.container}>
    <Row gutter={[16, 16]} justify="center">
      {cardData.map((card, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card className={styles.card} bordered={false}>
            {card.icon}
            <h2 className={styles.title}>{card.title}</h2>
            <p className={styles.description}>{card.description}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
      </main>
    </>
  );
}
