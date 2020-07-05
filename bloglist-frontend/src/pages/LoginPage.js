import React from 'react'
import LoginForm from '../components/LoginForm'
import {Col, Container, Row} from 'reactstrap'

const LoginPage = () => {
  return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Login</h1>
            <LoginForm/>
          </Col>
        </Row>
      </Container>
  )
}

export default LoginPage