import axios, { AxiosInstance } from 'axios';
import { Card } from '../models/Deck.model';

export class CardsService {
  private readonly cardsApi: AxiosInstance;

  constructor() {
    this.cardsApi = axios.create({
      baseURL: process.env.REACT_APP_CARDS_API,
    });
  }

  async createDeck() {
    const { data } = await await this.cardsApi.get('/deck/new/draw/?count=8');

    const cards = data.cards.map((card: Card) => ({
      ...card,
      randomValue: Math.floor(Math.random() * (10 + 1)),
    }));

    return {
      ...data,
      cards,
    };
  }

  async getNewCard(deckId: string) {
    return await (
      await this.cardsApi.get(`/deck/${deckId}/draw/?count=1`)
    ).data;
  }

  async shuffleCards(array: Array<any>) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
