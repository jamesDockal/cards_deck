import axios, { AxiosInstance } from 'axios';

export class CardsService {
  private readonly cardsApi: AxiosInstance;

  constructor() {
    this.cardsApi = axios.create({
      baseURL: process.env.REACT_APP_CARDS_API,
    });
  }

  async createDeck() {
    return await (
      await this.cardsApi.get('/deck/new/draw/?count=8')
    ).data;
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
