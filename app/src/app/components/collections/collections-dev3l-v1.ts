import { CardType } from "./cardType";

export const dev3lCards: CardType[] = [
  {
    id: 8,
    title: "Sephiroth",
    description: "A legendary swordsman, embodying pure power and darkness.",
    effectDescription: "Unleashes a devastating attack on all opponents.",
    rarity: "unique",
    type: "DPS",
    subcategory: "Warrior",
    stats: { attack: 150, defense: 100, speed: 100, hp: 400 },
    frontImage: "/cards/dev3l/sephiroth-card-front.png",
    backImage: "/cards/dev3l/sephiroth-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Masamune Strike: Deals 110% Attack damage to a single target.",
      primaryAbility: {
        name: "Supernova",
        cooldown: 4,
        initialCooldown: 2,
      },
      passiveAbility:
        "One-Winged Angel: Reduces all damage taken by 20% when HP drops below 50%.",
    },
    setNumber: "001",
    setName: "Final Fantasy",
    author: "Dev3L",
  },
  {
    id: 6,
    title: "Cloud Strife",
    description:
      "A legendary warrior, carrying the weight of destiny on his shoulders.",
    effectDescription: "Increases attack power when HP is low.",
    rarity: "legendary",
    type: "DPS",
    subcategory: "Warrior",
    stats: { attack: 120, defense: 80, speed: 90, hp: 350 },
    frontImage: "/cards/dev3l/cloud-card-front.png",
    backImage: "/cards/dev3l/cloud-card-back.png",
    backgroundColor: "#4682B4",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack: "Buster Slash: Deals 100% Attack damage to a single target.",
      primaryAbility: {
        name: "Omnislash",
        cooldown: 3,
        initialCooldown: 1,
      },
      passiveAbility:
        "Limit Break: Increases Attack by 20% when HP drops below 50%.",
    },
    setNumber: "002",
    setName: "Final Fantasy",
    author: "Dev3L",
  },
  {
    id: 7,
    title: "Vincent Valentine",
    description: "A rare sharpshooter shrouded in mystery and redemption.",
    effectDescription: "Can transform into a powerful beast.",
    rarity: "rare",
    type: "Hybrid",
    subcategory: "Sharpshooter",
    stats: { attack: 85, defense: 70, speed: 85, hp: 300 },
    frontImage: "/cards/dev3l/vincent-card-front.png",
    backImage: "/cards/dev3l/vincent-card-back.png",
    backgroundColor: "#800000",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack: "Deadly Shot: Deals 90% Attack damage to a single target.",
      primaryAbility: {
        name: "Chaos Transformation",
        cooldown: 3,
        initialCooldown: 2,
      },
      passiveAbility: "Vampiric Touch: Restores 10% HP after dealing damage.",
    },
    setNumber: "003",
    setName: "Final Fantasy",
    author: "Dev3L",
  },

  {
    id: 9,
    title: "Sarah Sanderson",
    description:
      "A whimsical witch who enchants with her hauntingly beautiful voice.",
    effectDescription: "Uses a mesmerizing song to lower enemy defenses.",
    rarity: "rare",
    type: "Support",
    subcategory: "Witch",
    stats: { attack: 60, defense: 50, speed: 75, effectiveness: 80, hp: 200 },
    frontImage: "/cards/dev3l/sarah-sanderson-card-front.png",
    backImage: "/cards/dev3l/sarah-sanderson-card-back.png",
    backgroundColor: "#800080",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Haunting Melody: Deals 80% Attack damage and applies a minor debuff to the target.",
      primaryAbility: {
        name: "Enchantment",
        cooldown: 3,
        initialCooldown: 2,
      },
      passiveAbility: "Charming Aura: Reduces enemy Speed by 10%.",
    },
    setNumber: "002",
    setName: "Limited Edition",
    author: "Dev3L",
  },
  {
    id: 10,
    title: "Rose Dawson",
    description:
      "A courageous and compassionate survivor who inspires those around her.",
    effectDescription:
      "Grants allies a boost to resilience when health is low.",
    rarity: "heroic",
    type: "Support",
    subcategory: "Survivor",
    stats: { attack: 50, defense: 70, speed: 60, effectiveness: 90, hp: 250 },
    frontImage: "/cards/dev3l/rose-dawson-card-front.png",
    backImage: "/cards/dev3l/rose-dawson-card-back.png",
    backgroundColor: "#4682B4",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Encouraging Words: Heals the lowest HP ally for 10% of their max HP.",
      primaryAbility: {
        name: "Titanic Resolve",
        cooldown: 4,
        initialCooldown: 2,
      },
      passiveAbility:
        "Resilient Spirit: Grants all allies a 20% Defense boost when HP drops below 50%.",
    },
    setNumber: "001",
    setName: "Limited Edition",
    author: "Dev3L",
  },
  {
    id: 11,
    title: "Gambit",
    description: "A master of cards and a mysterious figure from the shadows.",
    effectDescription:
      "Deals explosive damage and applies unpredictable effects.",
    rarity: "unique",
    type: "DPS",
    subcategory: "Card Master",
    stats: {
      attack: 150,
      defense: 70,
      speed: 100,
      effectiveness: 100,
      hp: 300,
    },
    frontImage: "/cards/dev3l/gambit-card-front.png",
    backImage: "/cards/dev3l/gambit-card-back.png",
    backgroundColor: "#2E2E2E",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Charged Throw: Deals 110% Attack damage to a single target.",
      primaryAbility: {
        name: "Explosive Ace",
        cooldown: 3,
        initialCooldown: 1,
      },
      passiveAbility:
        "Wild Card: 30% chance to apply an additional random effect (e.g., Burn, Stun, or Weaken).",
    },
    setNumber: "001",
    setName: "Limited Edition",
    author: "Dev3L",
  },
  {
    id: 12,
    title: "Jon Snow",
    description:
      "The Bastard of Winterfell, a true leader and warrior of honor.",
    effectDescription:
      "Leads allies with a steadfast resolve, dealing powerful blows and shielding his team.",
    rarity: "epic",
    type: "Tank",
    subcategory: "Leader",
    stats: { attack: 90, defense: 100, speed: 70, effectiveness: 60, hp: 350 },
    frontImage: "/cards/dev3l/jon-snow-card-front.png",
    backImage: "/cards/dev3l/jon-snow-card-back.png",
    backgroundColor: "#1C1C1C",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Longclaw Strike: Deals 100% Attack damage to a single target.",
      primaryAbility: {
        name: "Shield of the North",
        cooldown: 4,
        initialCooldown: 2,
      },
      passiveAbility:
        "King in the North: Grants all allies 10% increased Defense.",
    },
    setNumber: "001",
    setName: "Game of Thrones",
    author: "Dev3L",
  },
  {
    id: 13,
    title: "Chappell Roan",
    description:
      "A captivating performer whose songs inspire and uplift all who hear them.",
    effectDescription:
      "Amplifies the power of her allies through melody and inspiration.",
    rarity: "heroic",
    type: "Support",
    subcategory: "Performer",
    stats: { attack: 60, defense: 80, speed: 70, effectiveness: 100, hp: 300 },
    frontImage: "/cards/dev3l/chappell-roan-card-front.png",
    backImage: "/cards/dev3l/chappell-roan-card-back.png",
    backgroundColor: "#FF69B4",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Harmonic Pulse: Deals 50% Attack damage and restores 5% HP to allies.",
      primaryAbility: {
        name: "Rhapsody of Hope",
        cooldown: 3,
        initialCooldown: 2,
      },
      passiveAbility: "Melodic Aura: Increases the Speed of all allies by 10%.",
    },
    setNumber: "001",
    setName: "Limited Edition",
    author: "Dev3L",
  },
];
