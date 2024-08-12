import { Row, Col } from 'antd';
import React from 'react';
import Image from 'next/image';
import { SolutionOutlined, SafetyCertificateOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './services.module.css';
import '../../styles/global.css';

const services = [
  {
    title: "Student Visa Assistance",
    description: "We help you navigate the process of applying for a student visa, ensuring that you meet all the requirements and complete your application accurately.",
    icon: "/icons/service.svg",
  },
  {
    title: "Work Visa Guidance",
    description: "Our team provides expert advice and support for securing a work visa, including helping with documentation and understanding visa conditions.",
    icon: "/icons/workVisa.svg",
  },
  {
    title: "Tourist Visa Services",
    description: "We assist with the application process for tourist visas, providing guidance on required documents and ensuring a smooth application process.",
    icon: "/icons/tour.svg",
  },
];

const ResponsiveColumn = ({ title, description, icon }) => {
  return (
    <Col xs={24} sm={12} md={8} >
      <div className={styles.card}>
        <Image src={icon} alt={`${title} Icon`} height={180} width={180} />
        <h2 className={styles.heading}>{title}</h2>
        <p>{description}</p>
      </div>
    </Col>
  );
};

function Services() {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.introSection}>
        <h1 className={styles.pageTitle}>Our Services</h1>
        <p className={styles.introText}>
          At RTCS, we provide a wide range of services designed to support you in achieving your goals, from visa assistance to specialized training programs.
        </p>
      </div>

      <Row gutter={[16, 16]} className={styles.row}>
        {services.map((service, index) => (
          <ResponsiveColumn
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </Row>

      <div className={styles.consultationSection}>
        <SolutionOutlined className={styles.icon} />
        <h2 className={styles.sectionTitle}>Consultation & Advising</h2>
        <p className={styles.sectionText}>
          Our consultation services are tailored to meet the needs of our clients, providing expert advice and guidance in various areas, including education, training, and more.
        </p>
      </div>

      <div className={styles.trainingSection}>
        <SafetyCertificateOutlined className={styles.icon} />
        <h2 className={styles.sectionTitle}>Training Services</h2>
        <p className={styles.sectionText}>
          We offer comprehensive training programs designed to enhance your skills and knowledge, with a focus on practical application and real-world outcomes.
        </p>
      </div>

      <div className={styles.researchSection}>
        <GlobalOutlined className={styles.icon} />
        <h2 className={styles.sectionTitle}>Research & Survey Services</h2>
        <p className={styles.sectionText}>
          Our research and survey services provide accurate and reliable data to help you make informed decisions in challenging environments.
        </p>
      </div>
    </div>
  );
}

export default Services;
