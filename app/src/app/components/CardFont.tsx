"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { CardType, getRarityStyles } from "./Card";

export const CardFront = ({ card }: { card: CardType }) => {
  const rarityStyles = getRarityStyles(card.rarity);

  // Determine which additional information to display
  const description = card.description || card.effectDescription;
  const type = card.type || card.subcategory;

  return (
    <Box
      sx={{
        width: "18rem", // 72 * 0.25rem
        height: "24rem", // 96 * 0.25rem
        borderRadius: "0.5rem",
        boxShadow: 3,
        backfaceVisibility: "hidden",
        transition: "transform 0.3s",
        display: "flex",
        flexDirection: "column",
        backgroundColor: card.backgroundColor,
        backgroundImage: `url(${card.backgroundColorImage})`, // Use background color image
        color: card.textColor, // Use text color
        ...rarityStyles,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "white",
          color: "gray",
          fontSize: "0.5rem",
          fontFamily: "monospace",
          opacity: 0.25,
          position: "absolute",
          padding: "2px",
          top: 8,
          left: 8,
          width: 20,
          height: 20,
          boxShadow: 1,
        }}
      >
        {card.id}
      </Avatar>
      <Box
        component="img"
        src={card.frontImage}
        alt={card.title}
        sx={{
          width: "100%",
          height: "70%",
          objectFit: "cover",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }}
      />
      <Box sx={{ flexGrow: 1, p: 1, backgroundColor: card.backgroundColor }}>
        <Typography
          variant="h5"
          component="h3"
          align="center"
          fontWeight="bold"
        >
          {card.title}
        </Typography>

        {type && (
          <Typography
            variant="subtitle2"
            align="center"
            sx={{ fontSize: "1rem" }}
          >
            {type}
          </Typography>
        )}

        {description && (
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ fontSize: "0.75rem", margin: "4px 0" }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
