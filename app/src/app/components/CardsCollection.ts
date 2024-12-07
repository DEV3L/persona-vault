import { CardType } from "./Card";

export const CardData: CardType[] = [
  {
    id: 1,
    title: "Sephiroth",
    description: "A legendary swordsman, embodying pure power and darkness.",
    effectDescription: "Unleashes a devastating attack on all opponents.",
    stats: { attack: 95, defense: 85, speed: 90 },
    frontImage: "/cards/sephiroth-card-front.png",
    backImage: "/cards/sephiroth-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF", // Placeholder for the new property
    rarity: "legendary",
    setNumber: "FF7-001",
    type: "Warrior",
  },
  {
    id: 2,
    title: "Huffie",
    description: "A rare companion, loyal and fierce, with a heart of gold.",
    effectDescription: "Boosts defense of all allies.",
    stats: { attack: 60, defense: 80, speed: 50 },
    frontImage: "/huffie-card.png",
    backImage: "/huffie-card-back.png",
    backgroundColor: "#008080",
    textColor: "#FFFFFF", // Placeholder for the new property
    rarity: "rare",
    setNumber: "ANM-002",
    type: "Companion",
  },
  {
    id: 3,
    title: "Cloud Strife",
    description:
      "A legendary warrior, carrying the weight of destiny on his shoulders.",
    effectDescription: "Increases attack power when HP is low.",
    stats: { attack: 85, defense: 70, speed: 80 },
    frontImage: "/cloud-card.png",
    backImage: "/cloud-card-back.png",
    backgroundColor: "#4682B4",
    textColor: "#FFFFFF", // Placeholder for the new property
    rarity: "legendary",
    setNumber: "FF7-002",
    type: "Warrior",
  },
  {
    id: 4,
    title: "Vincent Valentine",
    description: "A rare sharpshooter shrouded in mystery and redemption.",
    effectDescription: "Can transform into a powerful beast.",
    stats: { attack: 75, defense: 60, speed: 75 },
    frontImage: "/cards/vincent-card-front.png",
    backImage: "/cards/vincent-card-back.png",
    backgroundColor: "#800000",
    textColor: "#FFFFFF", // Placeholder for the new property
    rarity: "rare",
    setNumber: "FF7-003",
    type: "Sharpshooter",
  },
  {
    id: 5,
    title: "Barret Wallace",
    description:
      "An uncommon hero with an unbreakable will and a powerful arm cannon.",
    effectDescription: "Provides cover for allies, reducing damage taken.",
    stats: { attack: 70, defense: 90, speed: 55 },
    frontImage: "/barret-card.png",
    backImage: "/barret-card-back.png",
    backgroundColor: "#654321",
    textColor: "#FFFFFF", // Placeholder for the new property
    rarity: "uncommon",
    setNumber: "FF7-004",
    type: "Leader",
  },
];
