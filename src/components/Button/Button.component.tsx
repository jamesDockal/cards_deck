import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './Button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
