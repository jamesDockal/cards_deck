import React, { useRef, useState } from 'react';
import { Button } from '../../components/Button/Button.component';
import { Container, Input, WriteName } from './Name.styles';

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  useNavigate,
} from 'react-router-dom';

export const NamePage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isErrored, setIsErrored] = useState(false);

  const navigate = useNavigate();

  const saveName = () => {
    if (inputRef?.current?.value) {
      setIsErrored(false);
      navigate(`/deck/${inputRef?.current?.value}`);
    } else {
      setIsErrored(true);
    }
  };

  return (
    <Container>
      <WriteName>
        <Input ref={inputRef} isErrored={isErrored} />

        <Button onClick={saveName}>Ver Cartas</Button>
      </WriteName>
    </Container>
  );
};
