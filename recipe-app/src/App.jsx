import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { Homepage } from "./pages/Home.jsx";
import { RecipeDetail } from "./pages/RecipeDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
