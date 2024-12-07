"use client";

import { Box, Container, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Card } from "./Cards";
import { CardData } from "./CardsCollection";
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

  return (
    <Box sx={{ minHeight: "100vh", py: 6, px: 2 }}>
      <Container
        maxWidth="lg"
        sx={{ p: 4, bgcolor: "grey.900", borderRadius: 2, boxShadow: 3 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontStyle: "italic" }}
        >
          P£rsona Vault
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Enjoy your trading card collection in style
        </Typography>

        <Divider sx={{ mb: 6 }} />

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 4,
          }}
        >
          <CarouselControls onPrevious={handlePrevious} onNext={handleNext} />
          <Box
            className="card-container"
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
            }}
          >
            {visibleIndices.map((cardIndex, displayIndex) => {
              const card = cardData[cardIndex];
              if (!card) return null;

              const isCenter = displayIndex === 1; // Ensure the current card is always in the center
              const isFlipped = flippedCards.has(cardIndex);

              return (
                <Card
                  key={card.id}
                  card={card}
                  isCenter={isCenter}
                  isFlipped={isFlipped}
                  // @ts-expect-error potential type error
                  onClick={isCenter ? () => toggleFlip(cardIndex) : undefined}
                  className={`card ${isCenter ? "is-center" : ""}`}
                  sx={{
                    flex: "0 0 auto",
                    scrollSnapAlign: "center",
                    transform: isFlipped ? "rotateY(180deg)" : "none",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
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
    </Box>
  );
};
