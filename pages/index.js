import React from 'react'
import Head from 'next/head'
import { Flex, Heading } from 'rebass'
import 'antd/dist/antd.min.css'
import { Card, Col, Row } from 'antd'
//import injectSheet from 'react-jss'
import '../styles/sheet.css'

const Index = () => (
  <React.Fragment>
    <Head>
      <title>MAAS</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Flex alignItems="center" justifyContent="center">
      <Card
        hoverable
        fontSize={6}
        fontWeight="bold"
        width={[1, 1, 1 / 2]}
        p={3}
        borderRadius={9}
        boxShadow="0 3px 16px rgba(0, 0, 0, 0.25)"
      >
        <Flex alignItems="center" justifyContent="center">
          <div className="glitch medium" data-text="Memes">
            Memes As A Serivce
          </div>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <div className="small">A.K.A. MAAS</div>
        </Flex>
      </Card>
    </Flex>
    <Card
      hoverable
      title="The suite of many services we offer:"
      bordered={false}
    >
      <Row gutter={69} justify="center" align="center">
        <Col span={8}>
          <Card title="Rick Roll">The classic rick roll</Card>
        </Col>
        <Col span={8}>
          <Card title="Bustin">Bustin makes me feel good</Card>
        </Col>
        <Col span={8}>
          <Card title="Ricardo">Our lord and savior Ricardo</Card>
        </Col>
        <Col span={8}>
          <Card title="Hit Or Miss">I guess they never miss, huh?</Card>
        </Col>
        <Col span={8}>
          <Card title="Sax Guy">Super duper epic sax dude</Card>
        </Col>
      </Row>
    </Card>
    <Flex alignItems="center" justifyContent="center">
      <div>Please call our 24/7 help line: 778-330-2389</div>
    </Flex>
  </React.Fragment>
)

export default Index
