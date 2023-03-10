export interface Card {
  code: string;
  image: string;
  suit: string;
  value: string;
  randomValue: number;
}

export interface Deck {
  cards: Card[];
  deck_id: string;
}
