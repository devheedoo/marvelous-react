import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * @typedef Character
 * @property {number} id
 * @property {string} name
 * @property {string} resourceURI
 */

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState(/** @type {Character[]} */ ([]));

  const loadMarvelCharacters = async () => {
    await fetch(
      "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data.results);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        console.error("Error while fetching data:", e);
      });
  };

  useEffect(() => {
    loadMarvelCharacters();
  }, []);

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
