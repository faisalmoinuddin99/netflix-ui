import "./Home.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/fetured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      
     <Featured />
    </div>
  );
};

export default Home;
