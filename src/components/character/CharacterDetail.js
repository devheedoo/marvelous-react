import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Hi, I'm character {id}</h2>
    </div>
  );
};

export default CharacterDetail;
