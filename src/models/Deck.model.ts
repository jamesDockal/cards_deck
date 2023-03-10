export interface Card {
  code: string;
  image: string;
  suit: string;
  value: string;
}

export interface Deck {
  cards: Card[];
  deck_id: string;
}
