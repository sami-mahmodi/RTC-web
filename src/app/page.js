import styles from "./page.module.css";
import { Card, Row, Col } from 'antd';
import { TeamOutlined, GlobalOutlined, SafetyOutlined } from '@ant-design/icons';
import '../styles/global.css';
import HeroSection from "@/components/heroSection";
import Image from "next/image";

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
        <HeroSection />
        
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
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

        <div className={styles.whyRTCSSection}>
          <Row gutter={[32, 32]} align="middle">
            {/* Left Side: Text */}
            <Col xs={24} md={12}>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Why RTCS?</h2>
                <p className={styles.paragraph}>
                  RTCS Consulting is a trusted partner for delivering high-quality data, educational services, and research in complex and post-conflict environments. With a deep understanding of instructional methods, educational services, and a proven presence in Afghanistan, Iraq, and Yemen, we offer advanced technical expertise in Monitoring & Evaluation, research, and survey services. Our team is adept at navigating the challenges of volatile and complex markets, ensuring that our clients receive reliable and accurate data to make informed decisions. At RTCS, we prioritize analytical thinking, effective communication, and comprehensive knowledge of laws and regulations to offer tailor-made solutions that meet the specific needs of each project.
                </p>
              </div>
            </Col>

            {/* Right Side: Image */}
            <Col xs={24} md={12} className={styles.imageContainer}>
              <Image
                src="./assets/images/whyus.svg" 
                alt="Why RTCS"
                width={300}
                height={300}
                className={styles.image}
              />
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}
