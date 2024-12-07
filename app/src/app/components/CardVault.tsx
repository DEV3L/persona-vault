"use client";

import { useState } from "react";
import { CardData } from "./CardCollection";
import { Card } from "./Cards";
import { CarouselControls } from "./CarouselControls";
import { getVisibleIndices } from "./carouselUtils";

const cardData = { ...CardData };

export const CardVault = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const visibleIndices = getVisibleIndices(currentIndex, CardData.length);

  const toggleFlip = (index: number) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = new Set(prevFlippedCards);
      if (newFlippedCards.has(index)) {
        newFlippedCards.delete(index);
      } else {
        newFlippedCards.add(index);
      }
      return newFlippedCards;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + CardData.length) % CardData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CardData.length);
  };

  console.log(visibleIndices);
  const y = visibleIndices.map((cardIndex, displayIndex) => {
    return { cardIndex, displayIndex };
  });

  console.log(y);

  return (
    <div className="min-h-screen py-12 px-4">
      <div
        className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg"
        style={{ backgroundColor: "#2d3748" }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 italic">
          P£rsona Vault
        </h1>
        <p className="text-gray-600 text-2xl text-center mb-12 monospace">
          Enjoy your trading card collection in style
        </p>

        <hr className="mb-12" />

        <div className="relative flex items-center justify-center py-8">
          <CarouselControls onPrevious={handlePrevious} onNext={handleNext} />
          <div className="card-container">
            {visibleIndices.map((cardIndex, displayIndex) => {
              const card = cardData[cardIndex];
              if (!card) return null;

              console.log("CARD", card);

              const isCenter = displayIndex === 1; // Ensure the current card is always in the center
              const isFlipped = flippedCards.has(cardIndex);

              return (
                <Card
                  key={card.id}
                  card={card}
                  isCenter={isCenter}
                  isFlipped={isFlipped}
                  onClick={isCenter ? () => toggleFlip(cardIndex) : undefined} // Only allow clicking the center card
                  className={`card ${isCenter ? "is-center" : ""}`}
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
