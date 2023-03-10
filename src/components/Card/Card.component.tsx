import React from 'react';
import { Card as ICard } from '../../models/Deck.model';
import { Container, Label, Value } from './Card.styles';

type Props = {
  card: ICard;
};

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <Container>
      <Label>
        {card.suit} {card.value}
      </Label>
      <img src={card.image} alt={`${card.suit} ${card.value}`} />
      <Value> {card.randomValue}</Value>
    </Container>
  );
};
