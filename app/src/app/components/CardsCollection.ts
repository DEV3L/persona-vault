import { CardType } from "./Card";

const monsterVerseCards: CardType[] = [
  {
    id: 1,
    title: "Godzilla",
    description:
      "The King of the Monsters, protector of Earth and balance of nature.",
    effectDescription:
      "Unleashes a destructive atomic breath to devastate a single target.",
    stats: { attack: 90, defense: 95, speed: 70 },
    frontImage: "/cards/godzilla-card-front.png",
    backImage: "/cards/godzilla-card-back.png",
    backgroundColor: "#1B2631",
    textColor: "#00BFFF",
    rarity: "legendary",
    setNumber: "MV-001",
    type: "Titan",
  },
  {
    id: 2,
    title: "Kong",
    description:
      "The ruler of Hollow Earth, a powerful and intelligent warrior.",
    effectDescription:
      "Uses his battle ax to deal massive damage and absorb energy attacks.",
    stats: { attack: 85, defense: 80, speed: 75 },
    frontImage: "/cards/kong-card-front.png",
    backImage: "/cards/kong-card-back.png",
    backgroundColor: "#6E2C00",
    textColor: "#FFD700",
    rarity: "legendary",
    setNumber: "MV-002",
    type: "Titan",
  },
  {
    id: 3,
    title: "King Ghidorah",
    description:
      "The alien destroyer, a three-headed dragon with unmatched power.",
    effectDescription:
      "Fires gravity beams from each head to attack multiple targets.",
    stats: { attack: 95, defense: 90, speed: 80 },
    frontImage: "/cards/king-ghidorah-card-front.png",
    backImage: "/cards/king-ghidorah-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF",
    rarity: "legendary",
    setNumber: "MV-004",
    type: "Titan",
  },
  {
    id: 4,
    title: "Male MUTO",
    description: "A sleek and agile kaiju capable of emitting EMP waves.",
    effectDescription:
      "Disables enemy abilities temporarily with a devastating EMP.",
    stats: { attack: 70, defense: 60, speed: 85 },
    frontImage: "/cards/male-muto-card-front.png",
    backImage: "/cards/male-muto-card-back.png",
    backgroundColor: "#2C3E50",
    textColor: "#E74C3C",
    rarity: "uncommon",
    setNumber: "MV-006",
    type: "Titan",
  },
];

const finalFantasyCards: CardType[] = [
  {
    id: 5,
    title: "Cloud Strife",
    description:
      "A legendary warrior, carrying the weight of destiny on his shoulders.",
    effectDescription: "Increases attack power when HP is low.",
    stats: { attack: 85, defense: 70, speed: 80 },
    frontImage: "/cards/cloud-card-front.png",
    backImage: "/cards/cloud-card-back.png",
    backgroundColor: "#4682B4",
    textColor: "#FFFFFF",
    rarity: "legendary",
    setNumber: "FF7-002",
    type: "Warrior",
  },
  {
    id: 6,
    title: "Vincent Valentine",
    description: "A rare sharpshooter shrouded in mystery and redemption.",
    effectDescription: "Can transform into a powerful beast.",
    stats: { attack: 75, defense: 60, speed: 75 },
    frontImage: "/cards/vincent-card-front.png",
    backImage: "/cards/vincent-card-back.png",
    backgroundColor: "#800000",
    textColor: "#FFFFFF",
    rarity: "rare",
    setNumber: "FF7-003",
    type: "Sharpshooter",
  },
  {
    id: 7,
    title: "Sephiroth",
    description: "A legendary swordsman, embodying pure power and darkness.",
    effectDescription: "Unleashes a devastating attack on all opponents.",
    stats: { attack: 95, defense: 85, speed: 90 },
    frontImage: "/cards/sephiroth-card-front.png",
    backImage: "/cards/sephiroth-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF",
    rarity: "legendary",
    setNumber: "FF7-001",
    type: "Warrior",
  },
];

export const CardData: CardType[] = [
  ...monsterVerseCards,
  ...finalFantasyCards,
];
