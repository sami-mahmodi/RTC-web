import { Row, Col} from 'antd';
import React from 'react';
import Image from 'next/image';
import styles from './services.module.css';
import '../../styles/global.css';

const services = [
  {
    title: "Student Visa Assistance",
    description: "We help you navigate the process of applying for a student visa, ensuring that you meet all the requirements and complete your application accurately.",
    icon: "/icons/service.svg" // Example icon path
  },
  {
    title: "Work Visa Guidance",
    description: "Our team provides expert advice and support for securing a work visa, including helping with documentation and understanding visa conditions.",
    icon: "/icons/work-visa.svg" // Example icon path
  },
  {
    title: "Tourist Visa Services",
    description: "We assist with the application process for tourist visas, providing guidance on required documents and ensuring a smooth application process.",
    icon: "/icons/tourist-visa.svg" // Example icon path
  },

];


const ResponsiveColumn = ({ title, description, icon }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
      <div className={styles.card}>
        <Image src={icon} alt={`${title} Icon`} height={180} width={180} />
        <h1 className={styles.heading}>{title}</h1>
      
        <p>{description}</p>
      </div>
    </Col>
  );
};

function Services() {
  return (
    <div>
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
    </div>
  );
}

export default Services;
