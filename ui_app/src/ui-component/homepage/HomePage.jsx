import { useNavigate } from "react-router-dom";
import "./home.css";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const userLogged = localStorage.getItem("Email");
  console.log("checking getitem", userLogged);

  useEffect(() => {
    if (userLogged === null) {
      console.log("Navigate....");

      navigate("/loginPage");
    }
  }, []);

  return (
    <div id="home">
      Home
      <div></div>
    </div>
  );
};

export default HomePage;
