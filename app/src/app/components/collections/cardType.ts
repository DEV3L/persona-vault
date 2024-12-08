export interface CardType {
  id: number;
  title: string;
  description: string;
  effectDescription: string;
  rarity:
    | "common"
    | "uncommon"
    | "rare"
    | "epic"
    | "legendary"
    | "heroic"
    | "unique";
  type: string;
  subcategory?: string;

  stats: {
    attack: number;
    defense: number;
    speed: number;
    effectiveness?: number;
    hp?: number;
  };

  frontImage: string;
  backImage: string;

  backgroundColor: string;
  textColor: string;
  borderColor?: string;

  abilities?: {
    basicAttack: string;
    primaryAbility: {
      name: string;
      cooldown: number;
      initialCooldown?: number;
    };
    passiveAbility?: string;
  };
  setNumber: string;
  setName: string;
  author: string;
}
