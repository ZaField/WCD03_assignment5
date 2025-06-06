import React from 'react';

interface PokemonImageProps {
  imageUrl: string;
  name: string;
  spriteUrl: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ imageUrl, name, spriteUrl }) => (
  <>
    <img
      src={imageUrl}
      alt={name}
      className="mt-4 w-full max-w-xs mx-auto my-4"
    />
    <div className="relative">
      <h1 className="text-2xl sm:text-4xl font-bold capitalize pr-32 text-[#2e3a59] dark:text-[#F0F3FF]">
        {name}
      </h1>
      <img
        src={spriteUrl}
        alt={name}
        className="w-36 h-36 absolute top-0 right-0 -translate-y-14 translate-x-10"
      />
    </div>
  </>
);

export default PokemonImage;
