import { Link } from "react-router-dom";
import useLoadCharacters from "../hooks/useLoadCharacters";

const Home = () => {
  const { characters, isLoading } = useLoadCharacters();

  return (
    <div>
      <h1>Hello World</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {characters.map((character) => {
            return (
              <div>
                <Link to={`/character/${character.id}`}>{character.name}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
