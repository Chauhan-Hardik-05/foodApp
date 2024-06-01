import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { useState } from "react";
import Container from "./components/Container";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
