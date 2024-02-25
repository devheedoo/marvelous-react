import { Link, useParams } from "react-router-dom";
import useLoadCharacterDetail from "../../hooks/useLoadCharacterDetail";

import commonStyles from "../common.module.css";
import styles from "./CharacterDetail.module.css";

const CharacterDetail = () => {
  const { id } = useParams();

  const { detail, isLoading } = useLoadCharacterDetail({ id });

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.pageTitle}>
        <Link to="/">MARVEL.characters</Link>
      </h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className={styles.container}>
          <div className={styles.profile}>
            <img
              src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
            />
            <h2>{detail.name}</h2>
          </div>

          {/* comics, series, stories */}
          <div className={styles.collectionContainer}>
            <div className={styles.collection}>
              <h3>COMICS</h3>
              <ul>
                {detail.comics.items.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </div>

            <div className={styles.collection}>
              <h3>SERIES</h3>
              <ul>
                {detail.series.items.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </div>

            <div className={styles.collection}>
              <h3>STORIES</h3>
              <ul>
                {detail.stories.items.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
