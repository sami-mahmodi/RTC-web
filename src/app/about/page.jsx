import React from 'react';
import { Row, Col, Card, Carousel } from 'antd';
import {
  SolutionOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  StarFilled,
} from '@ant-design/icons';
import styles from './about.module.css';
import '../../styles/global.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Introduction and Services Sections */}
      <section className={styles.introSection}>
        <h1 className={styles.title}>About Right Time Consulting Services</h1>
        <p className={styles.paragraph}>
          Right Time Consulting Services (RTCS) is an Afghanistan-based private company specializing in Overseas Education Services, Consultation, Capacity Building Trainings, Research, Monitoring & Evaluation, and Auditing Services. Established in 2016, RTCS is passionate about the development of the education sector, focusing on helping students and their families navigate the admissions processes of universities in the EU, UK, US, Canada, and Australia.
        </p>
        <p className={styles.paragraph}>
          Our team has substantial practical experience and a strong commitment to providing personalized, tailor-made services. We work closely with students and organizations to ensure they receive the full attention they deserve. Our approach is unique, and we strive to deliver the highest standards of service by offering bespoke solutions to our clients.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
  <Card className={styles.card} title="Consultation/Advising" bordered={false} hoverable>
    <SolutionOutlined className={styles.icon} />
    <p>
      We provide expert advice and counseling to help clients understand their programs, organization, and culture.
    </p>
  </Card>
</Col>
<Col xs={24} md={12} lg={8}>
  <Card className={styles.card} title="Education Services" bordered={false} hoverable>
    <ReadOutlined className={styles.icon} />
    <p>
      We specialize in developing programs and projects to supplement and improve education, offering expert guidance and support.
    </p>
  </Card>
</Col>
<Col xs={24} md={12} lg={8}>
  <Card className={styles.card} title="Training" bordered={false} hoverable>
    <SafetyCertificateOutlined className={styles.icon} />
    <p>
      We design and deliver training programs that help others develop new skills or knowledge to enhance their work.
    </p>
  </Card>
</Col>
<Col xs={24} md={12} lg={8}>
  <Card className={styles.card} title="Research & Survey" bordered={false} hoverable>
    <GlobalOutlined className={styles.icon} />
    <p>
      We conduct research and surveys to provide reliable and accurate data for organizations, governments, and companies.
    </p>
  </Card>
</Col>
<Col xs={24} md={12} lg={8}>
  <Card className={styles.card} title="Technical Services" bordered={false} hoverable>
    <TeamOutlined className={styles.icon} />
    <p>
      We offer advanced technical assistance and direction in broad educational programs, services, or activities.
    </p>
  </Card>
</Col>
<Col xs={24} md={12} lg={8}>
  <Card className={styles.card} title="Visa Application Support" bordered={false} hoverable>
    <GlobalOutlined className={styles.icon} />
    <p>
      We assist with the visa application process, offering support and guidance to ensure successful submissions for various types of visas.
    </p>
  </Card>
</Col>

        </Row>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <Carousel autoplay className={styles.testimonialCarousel}>
          <div>
            <Card className={styles.testimonialCard}>
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <p className={styles.testimonialText}>
                “RTCS helped me secure admission to my dream university in Canada. Their guidance was invaluable!”
              </p>
            </Card>
          </div>
          <div>
            <Card className={styles.testimonialCard}>
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <p className={styles.testimonialText}>
                “The training provided by RTCS improved our organization's efficiency and effectiveness.”
              </p>
            </Card>
          </div>
          <div>
            <Card className={styles.testimonialCard}>
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <StarFilled className={styles.starIcon} />
              <p className={styles.testimonialText}>
                “RTCS's research services provided us with the data we needed to make informed decisions in a challenging environment.”
              </p>
            </Card>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default AboutPage;
