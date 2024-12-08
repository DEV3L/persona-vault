import { CardType } from "./cardType";

export const slowbroCards: CardType[] = [
  {
    id: 10,
    title: "Michael Myers",
    description: "A relentless and unyielding force of terror.",
    effectDescription:
      "Immune to status effects and deals increased damage to vulnerable enemies.",
    rarity: "legendary",
    type: "Tank",
    subcategory: "Slasher",
    stats: { attack: 90, defense: 85, speed: 60, hp: 400 },
    frontImage: "/cards/michael-myers-card-front.png",
    backImage: "/cards/michael-myers-card-back.png",
    backgroundColor: "#1C1C1C",
    textColor: "#FF0000",
    abilities: {
      basicAttack:
        "Stalk and Slash: Deals 100% Attack damage to a single target.",
      primaryAbility: {
        name: "Unrelenting Pursuit",
        cooldown: 3,
        initialCooldown: 2,
      },
      passiveAbility:
        "Relentless Fear: Immune to all debuffs; deals 20% extra damage to weakened enemies.",
    },
    setNumber: "001",
    setName: "Horror Icons",
    author: "Slowbro43-lovr",
  },
  {
    id: 11,
    title: "Corey Taylor",
    description: "The masked master of chaos and unbridled energy.",
    effectDescription:
      "Boosts allies' attack power with an ear-splitting battle cry.",
    rarity: "rare",
    type: "Support",
    subcategory: "Performer",
    stats: { attack: 75, defense: 70, speed: 85, effectiveness: 60, hp: 300 },
    frontImage: "/cards/corey-taylor-card-front.png",
    backImage: "/cards/corey-taylor-card-back.png",
    backgroundColor: "#800000",
    textColor: "#FFFFFF",
    abilities: {
      basicAttack:
        "Shredding Note: Deals 100% Attack damage to a single target.",
      primaryAbility: {
        name: "Battle Cry",
        cooldown: 3,
        initialCooldown: 1,
      },
      passiveAbility:
        "Adrenaline Rush: Increases Attack of all allies by 10% while Corey is alive.",
    },
    setNumber: "002",
    setName: "Horror Icons",
    author: "Slowbro43-lovr",
  },
  {
    id: 12,
    title: "Spider-Ham",
    description:
      "A chaotic and whimsical parody of the web-slinging hero, whose unpredictable antics confuse even the strongest foes.",
    effectDescription:
      "Disorients enemies with unpredictable attacks and humor.",
    rarity: "unique",
    type: "Hybrid",
    subcategory: "Parody Hero",
    stats: { attack: 150, defense: 100, speed: 100, hp: 300 },
    frontImage: "/cards/spider-ham-card-front.png",
    backImage: "/cards/spider-ham-card-back.png",
    backgroundColor: "#FF4500",
    textColor: "#000000",
    abilities: {
      basicAttack:
        "Ham Slam: Deals 100% Attack damage with a chance to confuse the enemy.",
      primaryAbility: {
        name: "Pork Tornado",
        cooldown: 3,
        initialCooldown: 2,
      },
      passiveAbility:
        "Comic Relief: Has a 10% chance to avoid damage completely each turn.",
    },
    setNumber: "003",
    setName: "Quirky Crusaders",
    author: "Slowbro43-lovr",
  },
  {
    id: 13,
    title: "The Doctor",
    description:
      "A sadistic tormentor from Léry’s Memorial Institute, skilled in breaking minds and spirits.",
    effectDescription:
      "Induces madness in Survivors, revealing their locations and impairing their actions.",
    rarity: "rare",
    type: "DPS",
    subcategory: "Killer",
    stats: { attack: 85, defense: 70, speed: 60, hp: 350 },
    frontImage: "/cards/the-doctor-card-front.png",
    backImage: "/cards/the-doctor-card-back.png",
    backgroundColor: "#0D3B4A",
    textColor: "#F50087",
    abilities: {
      basicAttack:
        "Shock Therapy: Deals 90% Attack damage and has a chance to stun the target.",
      primaryAbility: {
        name: "Madness Pulse",
        cooldown: 4,
        initialCooldown: 2,
      },
      passiveAbility:
        "Mind Games: Enemies hit by basic attacks lose 5 Speed for 2 turns.",
    },
    setNumber: "004",
    setName: "Horror Icons",
    author: "Slowbro43-lovr",
  },
];
