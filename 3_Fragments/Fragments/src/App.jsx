import "./App.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let foodItems=[];
  // let foodItems = ["Dal", "Rice", "Curd"];
  return (
    <>
      <h1>Healthy Food:</h1>
      <ErrorMsg></ErrorMsg>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
