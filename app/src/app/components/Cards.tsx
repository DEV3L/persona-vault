"use client";

import { motion } from "framer-motion";

// Define the type for a card
export type CardType = {
  id: number;
  title: string;
  description: string;
  stats: { attack: number; defense: number; speed: number };
  image: string;
};

export interface CardProps {
  card: CardType;
  isCenter: boolean;
  isFlipped: boolean;
  onClick: () => void;
}

export const CardFront = ({ card }: { card: CardType }) => (
  <div className="w-72 h-96 bg-white rounded-lg shadow-lg backface-hidden transition-transform">
    <img
      src={card.image}
      alt={card.title}
      className="w-full h-3/4 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-center">{card.title}</h3>
    </div>
  </div>
);

export const CardBack = ({ card }: { card: CardType }) => (
  <div className="absolute inset-0 w-72 h-96 bg-white rounded-lg shadow-lg backface-hidden rotate-y-180 p-6">
    <h3 className="text-xl font-bold mb-4">{card.title}</h3>
    <p className="text-gray-600 mb-4">{card.description}</p>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Attack</span>
        <span>{card.stats.attack}</span>
      </div>
      <div className="flex justify-between">
        <span>Defense</span>
        <span>{card.stats.defense}</span>
      </div>
      <div className="flex justify-between">
        <span>Speed</span>
        <span>{card.stats.speed}</span>
      </div>
    </div>
  </div>
);

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
