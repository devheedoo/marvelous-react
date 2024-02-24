import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * @typedef Detail
 * @property {number} id
 * @property {string} name
 * @property {string} resourceURI
 * @property {Thumbnail} thumbnail
 * @property {Url[]} urls
 */

/**
 * @typedef Thumbnail
 * @property {string} extension
 * @property {string} path
 */

/**
 * @typedef Url
 * @property {string} type
 * @property {string} url
 */

const CharacterDetail = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(/** @type {Detail | null} */ (null));

  const loadCharacterDetail = async () => {
    await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setDetail(res.data.results[0]);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        console.error("Error while fetching data:", e);
      });
  };

  useEffect(() => {
    loadCharacterDetail();
  }, []);

  return (
    <div>
      <h2>Hi, I'm {detail.name}</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {detail.thumbnail.path}
          {detail.urls.map((item) => {
            return (
              <ul>
                <li>{item.type}</li>
                <li>{item.url}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
