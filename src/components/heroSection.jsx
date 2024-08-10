import React from 'react';
import { Row, Col } from 'antd';
import styles from './heroSection.module.css';
import '../styles/global.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={12} className={styles.textContainer}>
          <h1 className={styles.title}>Welcome to Right Time Consulting</h1>
          <p className={styles.paragraph}>
            At Right Time Consulting, we specialize in providing comprehensive support for your journey to studying, working, and living abroad. Our expert team is here to guide you through every step, ensuring a seamless and stress-free experience. Let us help you achieve your dreams with personalized and professional service.
          </p>
        </Col>
        <Col xs={24} md={12} className={styles.imageContainer}>
          <img src="/assets/images/hero-img.svg" alt="Hero" className={styles.heroImage} />
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
