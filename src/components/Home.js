import { Link } from "react-router-dom";
import useLoadCharacters from "../hooks/useLoadCharacters";

import commonStyles from "./common.module.css";
import styles from "./Home.module.css";

const Home = () => {
  const { characters, isLoading } = useLoadCharacters();

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.pageTitle}>
        <Link to="/">MARVEL.characters</Link>
      </h1>
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
