import React from 'react';
import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg'></Logo>
          <Button>Try It</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem
            natus consectetur iste quod iusto eos incidunt! Ad
          </p>
          <Button bg='#ff0099' color='#fff'>Get Started</Button>

          <Image src='./images/illustration-mockups.svg' />

        </Flex>
      </Container>
    </StyledHeader>
  );
}
export default Header;
