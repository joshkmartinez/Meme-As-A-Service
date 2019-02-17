import React from 'react'
import Head from 'next/head'
import { Flex, Card, Heading } from 'rebass'
import 'antd/dist/antd.min.css'
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
        fontSize={6}
        fontWeight="bold"
        width={[1, 1, 1 / 2]}
        p={3}
        borderRadius={9}
        boxShadow="0 3px 16px rgba(0, 0, 0, 0.25)"
      >
        <Flex alignItems="center" justifyContent="center">
          <div className="glitch large" data-text="Memes">Memes As A Serivce</div>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <div>AKA</div>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <div>MAAS</div>
        </Flex>
      </Card>
    </Flex>
    <Flex alignItems="center" justifyContent="center">
      <div>
        The suite of services we offer: <br /> ricardo, <br /> hitormiss, <br />
        epicsaxguy,
        <br /> bustin
      </div>
    </Flex>
    <Flex alignItems="center" justifyContent="center">
      <div>Please call our 24/7 help line: 778-330-2389</div>
    </Flex>
  </React.Fragment>
)

export default Index
