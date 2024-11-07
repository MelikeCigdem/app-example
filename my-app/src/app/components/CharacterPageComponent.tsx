import React from 'react';
import CharacterFilter from './CharacterFilter';
import CharacterList from './CharacterList';

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface CharacterPageProps {
  characters: Character[];
}

const CharacterPageComponent: React.FC<CharacterPageProps> = ({ characters }) => {
  return (
    <div className='p-5'>
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-8"> Characters</h1>
      <CharacterFilter  />
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharacterPageComponent;
