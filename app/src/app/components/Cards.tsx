"use client";

import { motion } from "framer-motion";

// Define the type for a card
export interface CardType {
  id: number;
  title: string;
  description: string;
  stats: { attack: number; defense: number; speed: number };
  image: string;
  backgroundColor: string;
  rarity: "common" | "uncommon" | "rare" | "legendary"; // New attribute
}

export interface CardProps {
  card: CardType;
  isCenter: boolean;
  isFlipped: boolean;
  onClick: () => void;
}

const getRarityStyles = (rarity: CardType["rarity"]) => {
  switch (rarity) {
    case "common":
      return { borderColor: "gray", borderWidth: "1px" };
    case "uncommon":
      return { borderColor: "green", borderWidth: "2px" };
    case "rare":
      return {
        borderColor: "blue",
        borderWidth: "3px",
        boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)", // Add a blue glow
      };
    case "legendary":
      return {
        borderImage: "linear-gradient(to right, gold, purple) 1", // Gradient border
        borderWidth: "4px",
        boxShadow: "0 0 15px rgba(128, 0, 128, 0.7)", // Add a purple glow
      };
    default:
      return { borderColor: "black", borderWidth: "1px" };
  }
};

export const CardFront = ({ card }: { card: CardType }) => {
  const rarityStyles = getRarityStyles(card.rarity);
  return (
    <div
      className={`w-72 h-96 rounded-lg shadow-lg backface-hidden transition-transform`}
      style={{ backgroundColor: card.backgroundColor, ...rarityStyles }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-3/4 object-cover rounded-t-lg"
      />
      <div className={`p-4`} style={{ backgroundColor: card.backgroundColor }}>
        <h3 className="text-xl font-bold text-center">{card.title}</h3>
      </div>
    </div>
  );
};

export const CardBack = ({ card }: { card: CardType }) => {
  const rarityStyles = getRarityStyles(card.rarity);
  return (
    <div
      className="absolute inset-0 w-72 h-96 rounded-lg shadow-lg backface-hidden rotate-y-180 p-6"
      style={{
        ...rarityStyles,
        background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
        color: "#333",
      }}
    >
      {/* Optional Image Placeholder */}
      {card.image && (
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-1/2 object-cover rounded-t-lg mb-4"
        />
      )}
      <h3
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "Dank Mono, sans-serif", fontStyle: "italic" }}
      >
        {card.title}
      </h3>
      <p className="text-gray-800 mb-4">{card.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Attack</span>
          <span
            style={{ fontFamily: "Dank Mono, sans-serif", fontStyle: "italic" }}
          >
            {card.stats.attack}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Defense</span>
          <span
            style={{ fontFamily: "Dank Mono, sans-serif", fontStyle: "italic" }}
          >
            {card.stats.defense}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Speed</span>
          <span
            style={{ fontFamily: "Dank Mono, sans-serif", fontStyle: "italic" }}
          >
            {card.stats.speed}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ card, isCenter, isFlipped, onClick }: CardProps) => (
  <motion.div
    className={`relative cursor-pointer ${isCenter ? "z-10" : "z-0"}`}
    initial={{
      scale: isCenter ? 1 : 0.8,
      opacity: isCenter ? 1 : 0.6,
    }}
    animate={{
      scale: isCenter ? 1 : 0.8,
      opacity: isCenter ? 1 : 0.6,
    }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
  >
    <motion.div
      className="relative preserve-3d"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardFront card={card} />
      <CardBack card={card} />
    </motion.div>
  </motion.div>
);
