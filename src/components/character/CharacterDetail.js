import { useParams } from "react-router-dom";
import useLoadCharacterDetail from "../../hooks/useLoadCharacterDetail";

const CharacterDetail = () => {
  const { id } = useParams();

  const { detail, isLoading } = useLoadCharacterDetail({ id });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <h2>Hi, I'm {detail.name}</h2>
          {detail.thumbnail.path}
          {detail.urls.map((item, index) => {
            return (
              <ul key={index}>
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
