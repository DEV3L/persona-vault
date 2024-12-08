import { CardType } from "./cardType";
import { demonCards } from "./collections-demon-v1";
import { dev3lCards } from "./collections-dev3l-v1";
import { slowbroCards } from "./collections-slowbro-lovr-v1";

export const allCards: CardType[] = [
  ...dev3lCards,
  ...demonCards,
  ...slowbroCards,
];
