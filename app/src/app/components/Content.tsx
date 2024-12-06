"use client";

import { CardData } from "./CardCollection";
import { Card } from "./Cards";
import { CarouselControls } from "./Components";

export const CardVault = () => {
  const visibleIndices = [0, 1, 2]; // Example indices
  const flippedCards = new Set<number>(); // Track flipped cards

  const toggleFlip = (index: number) => {
    if (flippedCards.has(index)) {
      flippedCards.delete(index);
    } else {
      flippedCards.add(index);
    }
  };

  const handlePrevious = () => {
    // Logic for previous card
  };

  const handleNext = () => {
    // Logic for next card
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
          <CarouselControls onPrevious={handlePrevious} onNext={handleNext} />
          <div className="flex items-center justify-center gap-4">
            {visibleIndices.map((cardIndex, displayIndex) => {
              const card = CardData[cardIndex];
              if (!card) return null; // Prevent rendering if card is undefined
              const isCenter = displayIndex === 1;
              const isFlipped = flippedCards.has(cardIndex);

              return (
                <Card
                  key={card.id}
                  card={card}
                  isCenter={isCenter}
                  isFlipped={isFlipped}
                  onClick={() => toggleFlip(cardIndex)}
                />
              );
            })}
          </div>
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
