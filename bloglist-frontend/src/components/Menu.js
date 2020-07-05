import React, {useState} from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap'

import {Link} from 'react-router-dom'
import {useCurrentUser} from '../hooks'
import UserMenuStatus from './UserMenuStatus'

const Menu = () => {
  const {currentUser, handlerLogout} = useCurrentUser()
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container fluid>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to={'/'}>Blg</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/blogs">
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/users">
                Users
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText><UserMenuStatus handlerLogout={handlerLogout} currentUser={currentUser}/></NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  )
}
export default Menu


