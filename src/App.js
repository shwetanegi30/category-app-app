import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CategoryFolder from "./Components/CategoryFolder/Category";
// import AddingTopics from "./Components/CategoryPages/CustomFolder/AddingTopics";
import Editor from "./Components/CategoryPages/Editor/Editor";
import "./App.css";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<CategoryFolder />} />
    </Routes>

    <Routes>
          {/* <Route path="/addTopic" element={<AddingTopics />} /> */}
          <Route path="/editor" element={<Editor />} />
        </Routes>

   </BrowserRouter>
  )
}

export default App




