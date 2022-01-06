import React from 'react';
import { Container } from './styles/Container.styled';
import { StyledHeader, Nav,Logo } from './styles/Header.styled';
import { Button } from './styles/Button.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg'></Logo>
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
export default Header;
