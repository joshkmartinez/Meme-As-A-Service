import React from 'react'
import Head from 'next/head'
import { Flex, Heading } from 'rebass'
import 'antd/dist/antd.min.css'
import { Card, Col, Row, Collapse, List } from 'antd'
const Panel = Collapse.Panel
//import injectSheet from 'react-jss'
import '../styles/sheet.css'
function nada() {
  let nothing = 0
  nothing++
}
const rick = [
  'rickastley',
  'getrickrolled',
  'iloverick',
  'rollrick',
  'gotem',
  'ricc',
  'ricckk',
  'ricck',
  'rik',
  'ourlordandsaviorrick',
  'hailrick',
  'allhailrick',
  'getricked',
  'getrickrolled',
  'lordrick',
  'succ',
  'suck',
  'rickroll',
  'rickrolled',
  'rickrolld',
  'ricky',
  'rickit'
]
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
          <Card title="Rick Roll">
            The classic rick roll
            <Collapse defaultActiveKey={['1']} onChange={nada}>
              <Panel header="Available domains" key="1">
                <List
                  size="small"
                  dataSource={rick}
                  renderItem={item => <List.Item>{item}.now.sh</List.Item>}
                />
              </Panel>
              <Panel header="API" key="2">
                <p>hi</p>
              </Panel>
            </Collapse>
          </Card>
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
