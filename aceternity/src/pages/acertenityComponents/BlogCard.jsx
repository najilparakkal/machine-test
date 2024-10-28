import React, { useState, memo } from "react";

const Avatar = ({ src, alt, fallback }) => (
  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
    {src ? (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="object-cover"
      />
    ) : (
      <span className="text-sm font-medium text-gray-600">{fallback}</span>
    )}
  </div>
);
const Card = memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={`rounded-lg relative bg-gradient-to-br from-pink-400 to-blue-500 overflow-hidden h-[400px] w-full transition-all duration-300 ease-out ${
      hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
    }`}
  >
    <img
      loading="lazy"
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 h-full w-full" // ensure image covers the whole card
    />
    <div
      className={`absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-opacity duration-300 ${
        hovered === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
      <p className="text-sm text-gray-200 mb-4">{card.description}</p>
      <div className="flex items-center">
        <Avatar
          src={card.profileSrc}
          alt={card.profileName}
          fallback={card.profileName.charAt(0)}
        />
        <span className="text-sm font-medium text-white ml-2">
          {card.profileName}
        </span>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-4 lg:px-1">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
