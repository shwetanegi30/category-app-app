import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryFolder from "./Components/CategoryFolder/Category";
import "./App.css";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<CategoryFolder />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
