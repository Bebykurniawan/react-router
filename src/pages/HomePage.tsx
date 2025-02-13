import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>This is homepage, tralalala.</h1>
      <Link to="/terms">go to terms page.</Link>
    </div>
  );
};

export default HomePage;
