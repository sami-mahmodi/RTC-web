import React from 'react'
import { Row, Col,Typography } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import  styles from './footer.module.css'
import '../styles/global.css'

const Paragraph = Typography;

export default function Footer() {


  return (
    <>
      <footer className={styles.footer}>
        <Row gutter={[24, 24]} className={styles.row}>
          <Col span={24} md={8}>
        <h2 className={styles.heading}>Who We Are?</h2>
        <Paragraph ellipsis={{ rows: 2, expandable: true }}>
             
 
            </Paragraph>

          </Col>

          <Col span={24} md={8}>
          
          <h2 className={styles.heading}>What We Do?</h2>
        
          </Col>

          <Col span={24} md={8}>
          
          
          
            <h2 className={styles.heading}>Get in touch</h2>
          </Col>
        </Row>
        <div className={styles.copyrights}>
        <span>
          &copy; Copyright {new Date().getFullYear()} - Right Time Consulting Services
        </span>
      </div>

      </footer>
     
    </>
  )
}