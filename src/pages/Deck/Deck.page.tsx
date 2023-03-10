import React, { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';

import { Button } from '../../components/Button/Button.component';
import { Card } from '../../components/Card/Card.component';
import { Deck } from '../../models/Deck.model';
import { CardsService } from '../../services/cards.service';

import {
  ButtonContainer,
  CardsContainer,
  Container,
  Name,
} from './Deck.styles';
import { useParams } from 'react-router-dom';

export const DeckPage: React.FC = () => {
  const cardsService = new CardsService();

  const { name } = useParams();

  const [cardsCount, setCardsCount] = useState(0);
  const [deck, setDeck] = useState<Deck>({} as Deck);

  const parentRef = useRef(null);

  const getDeck = async () => {
    const data = await cardsService.createDeck();
    console.log('data', data);
    setDeck(data);
    setCardsCount(5);
  };

  const getNewCard = async () => {
    setCardsCount(cardsCount + 1);
  };

  const shuffle = async () => {
    const data = await cardsService.shuffleCards(deck.cards);

    setDeck((oldDeck) => ({
      ...oldDeck,
      cards: data,
    }));
  };

  useEffect(() => {
    Promise.all([getDeck()]);
  }, []);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  const availableCards = deck?.cards?.slice(0, cardsCount);

  return (
    <Container>
      <Name>{name}</Name>
      <CardsContainer ref={parentRef}>
        {availableCards?.map((card) => (
          <Card key={card.code} card={card} />
        ))}
      </CardsContainer>
      <ButtonContainer>
        <Button onClick={getNewCard} disabled={cardsCount === 8}>
          New Card
        </Button>

        <Button onClick={shuffle}>Shuffle</Button>
      </ButtonContainer>
    </Container>
  );
};
