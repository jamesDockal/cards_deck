import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 12px;
  background-color: #1a202c;
`;

type InputProps = {
  isErrored: boolean;
};

export const Input = styled.input<InputProps>`
  background-color: #171923;
  color: #f7fafc;
  border: none;
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 20px;
  transition: 0.3s;
  border: 1px solid ${({ isErrored }) => (isErrored ? 'red' : '#f7fafc')};
`;

export const WriteName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
