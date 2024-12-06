"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CardCarousel = () => {
  const cards = [
    // Example card data
    {
      id: 1,
      title: "Blue Dragon",
      description: "A legendary dragon",
      stats: { attack: 75, defense: 65, speed: 95 },
      image: "/path/to/image",
    },

    // Add more cards as needed
  ];

  const visibleIndices = [0, 1, 2]; // Example indices
  const flippedCards = new Set<number>(); // Track flipped cards

  const toggleFlip = (index: number) => {
    if (flippedCards.has(index)) {
      flippedCards.delete(index);
    } else {
      flippedCards.add(index);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Card Carousel Pro
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Discover your favorite trading cards
        </p>

        <div className="relative flex items-center justify-center py-8">
          <button
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="flex items-center justify-center gap-4">
            {visibleIndices.map((cardIndex, displayIndex) => {
              const card = cards[cardIndex];
              if (!card) return null; // Prevent rendering if card is undefined
              const isCenter = displayIndex === 1;
              const isFlipped = flippedCards.has(cardIndex);

              return (
                <motion.div
                  key={card.id}
                  className={`relative cursor-pointer ${
                    isCenter ? "z-10" : "z-0"
                  }`}
                  initial={{
                    scale: isCenter ? 1 : 0.8,
                    opacity: isCenter ? 1 : 0.6,
                  }}
                  animate={{
                    scale: isCenter ? 1 : 0.8,
                    opacity: isCenter ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => toggleFlip(cardIndex)}
                >
                  <motion.div
                    className="relative preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`w-72 h-96 bg-white rounded-lg shadow-lg backface-hidden ${
                        isCenter ? "hover:scale-105" : ""
                      } transition-transform`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-3/4 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-center">
                          {card.title}
                        </h3>
                      </div>
                    </div>
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
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <button
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
            aria-label="Next card"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};
