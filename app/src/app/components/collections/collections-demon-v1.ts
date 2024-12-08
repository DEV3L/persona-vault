import { CardType } from "./cardType";

export const demonCards: CardType[] = [
  {
    id: 1,
    title: "Godzilla",
    description:
      "The King of the Monsters, protector of Earth and balance of nature.",
    effectDescription:
      "Unleashes a destructive atomic breath to devastate a single target.",
    rarity: "legendary",
    type: "Tank",
    subcategory: "Titan",
    stats: { attack: 90, defense: 100, speed: 60, hp: 400 },
    frontImage: "/cards/godzilla-card-front.png",
    backImage: "/cards/godzilla-card-back.png",
    backgroundColor: "#1B2631",
    textColor: "#00BFFF",
    abilities: {
      basicAttack: "Claw Swipe: Deals 100% Attack damage to a single target.",
      primaryAbility: {
        name: "Atomic Breath",
        cooldown: 3,
        initialCooldown: 1,
      },
      passiveAbility: "Titan Resilience: Reduces incoming damage by 15%.",
    },
    setNumber: "001",
    setName: "MonsterVerse",
    author: "Demon",
  },
  {
    id: 2,
    title: "Kong",
    description:
      "The ruler of Hollow Earth, a powerful and intelligent warrior.",
    effectDescription:
      "Uses his battle ax to deal massive damage and absorb energy attacks.",
    rarity: "unique",
    type: "DPS",
    subcategory: "Titan",
    stats: { attack: 150, defense: 85, speed: 100, hp: 350 },
    frontImage: "/cards/kong-card-front.png",
    backImage: "/cards/kong-card-back.png",
    backgroundColor: "#6E2C00",
    textColor: "#FFD700",
    abilities: {
      basicAttack: "Smash: Deals 110% Attack damage to a single target.",
      primaryAbility: {
        name: "Battle Axe Slam",
        cooldown: 3,
        initialCooldown: 1,
      },
      passiveAbility:
        "Energy Absorption: Restores 10% of max HP after using a Primary Ability.",
    },
    setNumber: "002",
    setName: "MonsterVerse",
    author: "Demon",
  },
  {
    id: 3,
    title: "King Ghidorah",
    description:
      "The alien destroyer, a three-headed dragon with unmatched power.",
    effectDescription:
      "Fires gravity beams from each head to attack multiple targets.",
    rarity: "epic",
    type: "DPS",
    subcategory: "Alien Titan",
    stats: { attack: 120, defense: 75, speed: 85, hp: 370 },
    frontImage: "/cards/king-ghidorah-card-front.png",
    backImage: "/cards/king-ghidorah-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack: "Triple Strike: Deals 90% Attack damage to a single target.",
      primaryAbility: {
        name: "Gravity Beam Barrage",
        cooldown: 2,
        initialCooldown: 1,
      },
      passiveAbility:
        "Overwhelming Presence: Increases Attack of all allies by 10%.",
    },
    setNumber: "003",
    setName: "MonsterVerse",
    author: "Demon",
  },
  {
    id: 4,
    title: "Male MUTO",
    description: "A sleek and agile kaiju capable of emitting EMP waves.",
    effectDescription:
      "Disables enemy abilities temporarily with a devastating EMP.",
    rarity: "common",
    type: "Support",
    subcategory: "Parasite",
    stats: { attack: 50, defense: 40, speed: 80, effectiveness: 30, hp: 250 },
    frontImage: "/cards/male-muto-card-front.png",
    backImage: "/cards/male-muto-card-back.png",
    backgroundColor: "#2C3E50",
    textColor: "#E74C3C",
    abilities: {
      basicAttack: "Claw Slash: Deals 90% Attack damage to a single target.",
      primaryAbility: {
        name: "EMP Shockwave",
        cooldown: 3,
      },
      passiveAbility:
        "Disruption: Increases cooldown of all enemy abilities by 1 turn.",
    },
    setNumber: "004",
    setName: "MonsterVerse",
    author: "Demon",
  },
  {
    id: 5,
    title: "Behemoth",
    description:
      "A gentle giant of the kaiju world with immense defensive power.",
    effectDescription:
      "Blocks damage for allies while regenerating health over time.",
    rarity: "uncommon",
    type: "Tank",
    subcategory: "Titan",
    stats: { attack: 60, defense: 90, speed: 50, hp: 500 },
    frontImage: "/cards/behemoth-card-front.png",
    backImage: "/cards/behemoth-card-back.png",
    backgroundColor: "#4B5320",
    textColor: "#A9A9A9",
    abilities: {
      basicAttack: "Trunk Swipe: Deals 70% Attack damage to a single target.",
      primaryAbility: {
        name: "Shield Wall",
        cooldown: 2,
        initialCooldown: 1,
      },
      passiveAbility: "Regeneration: Restores 5% HP each turn.",
    },
    setNumber: "005",
    setName: "MonsterVerse",
    author: "Demon",
  },
];
