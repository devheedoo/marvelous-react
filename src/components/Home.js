import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/character/1">See character-1</Link>
    </div>
  );
};

export default Home;
