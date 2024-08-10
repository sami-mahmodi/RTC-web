import React from 'react';
import { Row, Col } from 'antd';
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import styles from './footer.module.css';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Row gutter={[24, 24]} className={styles.row}>
        <Col span={24} md={8}>
          <h2 className={styles.heading}>Who We Are?</h2>
          <p className={styles.paragraph}>
            We are a consulting firm dedicated to helping individuals navigate their way through the visa process and achieve their dreams of studying, working, and living abroad. Our team of experts is committed to providing personalized guidance and support to make your journey as smooth as possible.
          </p>
        </Col>

        <Col span={24} md={8}>
          <h2 className={styles.heading}>What We Do?</h2>
          <p className={styles.paragraph}>
            We simplify visa applications, offer advice on educational and employment opportunities abroad, and provide comprehensive support tailored to your unique needs. Our goal is to ensure a seamless and stress-free experience for every client.
          </p>
        </Col>

        <Col span={24} md={8}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <ul className={styles.contactList}>
            <li><a href="tel:+1234567890"><PhoneOutlined /> +1 234 567 890</a></li>
            <li><a href="https://wa.me/1234567890"><WhatsAppOutlined /> +1 234 567 890</a></li>
            <li><a href="mailto:info@example.com"><MailOutlined /> info@example.com</a></li>
            <li><a href="#"><CompassOutlined /> Address Placeholder</a></li>
          </ul>
          <div className={styles.socialMedia}>
            <a href="#"><FacebookOutlined className={styles.icon} /></a>
            <a href="#"><TwitterOutlined className={styles.icon} /></a>
            <a href="#"><InstagramOutlined className={styles.icon} /></a>
          </div>
        </Col>
      </Row>
      <div className={styles.copyrights}>
        <span>&copy; {new Date().getFullYear()} - Right Time Consulting Services</span>
      </div>
    </footer>
  );
};

export default Footer;
