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

export const CardsContainer = styled.div`
  margin-top: 24px;
  width: 90%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const ButtonContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;

  display: flex;
  gap: 12px;
`;
