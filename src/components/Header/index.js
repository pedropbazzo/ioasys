import React from 'react';

import {Container, HeaderTitle, ContainerHeader} from './styles';

const Header = ({children}) => {
  return (
    <Container>
      <ContainerHeader>
        <HeaderTitle>Enterprises</HeaderTitle>
      </ContainerHeader>
      {children}
    </Container>
  );
};

export default Header;
