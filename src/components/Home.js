import { Link } from "react-router-dom";
import useLoadCharacters from "../hooks/useLoadCharacters";

import styles from "./Home.module.css";

const Home = () => {
  const { characters, isLoading } = useLoadCharacters();

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>MARVEL.characters</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className={styles.charactersContainer}>
          {characters.map((character) => {
            const { id, name, thumbnail, series } = character;
            const [seriesName, seriesYear] = series.items[0].name.split(" (");

            return (
              <Link
                to={`/character/${id}`}
                key={id}
                className={styles.characterCard}
              >
                <img src={`${thumbnail.path}.${thumbnail.extension}`} />
                <span className={styles.characterCardName}>{name}</span>
                <p className={styles.characterCardSeries}>
                  {seriesName}
                  <br />
                  {`(${seriesYear}`}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
