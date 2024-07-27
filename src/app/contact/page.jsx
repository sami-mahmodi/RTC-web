'use client'
import React from 'react'
import { Row, Col, Typography, Form, Input, Button } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from '@ant-design/icons'
import styles from './contact.module.css'  // Import as a default import
import '../../styles/global.css';
const { TextArea } = Input
const { Paragraph, Title } = Typography

function Contact() {  
  return (
    <>
      <Row>
        <Col span={24} md={12} className={styles.contactInfo}>
          <Title className={styles.title}>Where can you find us?</Title>
          <Paragraph className={styles.aboutItem}>
            <CompassOutlined title='Address' />  Kabul, Afghanistan
          </Paragraph>

        </Col>
        <Col span={24} md={12} className={styles.contactInfo}>
          <Form   
            name="contact"
            className={styles.form}
            layout="vertical"
            size="large"
            >
                <Form.Item hidden name="form-name" initialValue="contact">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input type="text" name="name" placeholder="Your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true }, { type: 'email' }]}
            >
              <Input
                type="email"
                name="email"
                placeholder="youremail@example.com"
              />
            </Form.Item>

            <Form.Item label="Subject" name="subject">
              <Input
                type="text"
                name="subject"
                placeholder="Subject of discussion"
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true }]}
            >
              <TextArea name="message" placeholder="Your message..." rows={5} />
            </Form.Item>
            <button htmlType="submit" className={styles.button}>
              Submit
            </button>

          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Contact  
