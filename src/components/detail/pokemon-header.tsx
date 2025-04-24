import React from 'react';

interface PokemonHeaderProps {
  id: number;
}

const PokemonHeader: React.FC<PokemonHeaderProps> = ({ id }) => (
  <div className="flex justify-between items-center md:pt-5">
    <span className="text-[#8f9bb3] dark:text-[#97A0CC] text-xl">
      #{String(id).padStart(4, "0")}
    </span>
    <img src="/image/logo.svg" alt="Logo" className="w-25 h-auto" />
  </div>
);

export default PokemonHeader;
