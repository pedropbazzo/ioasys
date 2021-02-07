import React from 'react';

import {Container, Text} from './styles';

const Button = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
