interface Character {
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
  }
  
  const CharacterList = ({ characters }: { characters: Character[] }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition w-64" 
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center text-black">
              <h3 className="text-lg font-semibold">{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Gender: {character.gender}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CharacterList;
  