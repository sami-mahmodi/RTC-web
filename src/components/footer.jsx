import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import * as styles from './footer.module.css'


export default function Footer() {


  return (
    <>
      <footer className={styles.footer}>
        <Row gutter={[24, 24]}>
          <Col span={24} md={8}>
         
          
          </Col>

          <Col span={24} md={8}>
       
        
          </Col>

          <Col span={24} md={8}>
          
          
            <div className={styles.icons}>
          
           
            </div>
          </Col>
        </Row>
      </footer>
      <div className={styles.copyrights}>
       
      </div>
    </>
  )
}