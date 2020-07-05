import React from 'react'
import BlogList from '../components/BlogList'
import Togglable from '../components/Togglable'
import CreateBlogForm from '../components/CreateBlogForm'
import {useSelector} from 'react-redux'
import {useCurrentUser} from '../hooks'
import {Container, Row, Col} from 'reactstrap'
import LoginButton from '../components/LoginButton'

const Home = () => {
  const {currentUser} = useCurrentUser()
  return (
    <Container>
      <Row>
        <Col md={8}>
          <BlogList/>
        </Col>
        <Col md={4}>
          {currentUser ? <CreateBlogForm/> : <LoginButton>Login for creating new blog</LoginButton>
          }
        </Col>
      </Row>



    </Container>
  )
}

export default Home