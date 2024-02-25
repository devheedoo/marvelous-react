import { useEffect, useState } from "react";

/**
 * @typedef Character
 * @property {number} id
 * @property {string} name
 * @property {string} resourceURI
 * @property {Thumbnail} thumbnail
 * @property {Url[]} urls
 * @property {Collections} comics
 * @property {Collections} series
 * @property {Collections} stories
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

/**
 * @typedef Collections
 * @property {Item[]} items
 */

/**
 * @typedef Item
 * @property {string} name
 */

const useLoadCharacterDetail = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(/** @type {Character | null} */ (null));

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

  return {
    detail,
    isLoading,
  };
};

export default useLoadCharacterDetail;
