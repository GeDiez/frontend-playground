import React, { useState } from 'react';
import './App.css';

// import 'bulma/css/bulma.min.css';
import { Hero, HeroHeader, HeroBody, Container, Nav, NavLeft, NavItem, NavRight, Button, Columns, Column, Menu, MenuList, MenuLabel, MenuLink } from "bloomer";

import { Login } from './Login';
import { Register } from './Register';

const App = () => {
  const [view, changeViewTo] = useState('');

  console.log('app')

  return (
    <Hero isColor='info' isFullHeight>
      <HeroHeader>
        <Nav>
          <NavLeft>
            <NavItem isBrand>React Hooks Training</NavItem>
          </NavLeft>
          <NavRight isMenu>
            <NavItem>
              <Button isColor="warning" onClick={() => changeViewTo('Register')}>
                Register
              </Button>
            </NavItem>
            <NavItem>
              <Button isColor="success" onClick={() => changeViewTo('Login')}>
                Login
              </Button>
            </NavItem>
          </NavRight>
        </Nav>
      </HeroHeader>
      <HeroBody>
        <Container>
          <Columns>
            <Column isSize='1/4'>
              <Menu>
                <MenuLabel hasTextColor="white">General</MenuLabel>
                <MenuList>
                  <li><MenuLink hasTextColor="grey-light">useForm</MenuLink></li>
                  <li><MenuLink hasTextColor="grey-light">useToggle</MenuLink></li>
                </MenuList>
              </Menu>
            </Column>
            <Column isSize='3/4'>
              <Register></Register>
            </Column>
          </Columns>
          <Login isHidden={view !== 'Login'} />
          <Register isHidden={view !== 'Register'} />
        </Container>
      </HeroBody>
    </Hero>
  );
}

export default App;
