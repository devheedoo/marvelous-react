import { useEffect, useState } from "react";

/**
 * @typedef Character
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

const useLoadCharacters = () => {
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

  return {
    characters,
    isLoading,
  };
};

export default useLoadCharacters;
