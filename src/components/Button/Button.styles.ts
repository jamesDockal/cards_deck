import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d53f8c;
  color: #f7fafc;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 2px solid #d53f8c;

  transition: 0.5s;

  &:hover {
    background-color: #97266d;
    border-color: #f7fafc;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &:hover {
      background-color: #d53f8c;
      border-color: #d53f8c;
    }
  }
`;
