import {BrowserRouter, Routes, Route} from "react-router-dom"
import { getCategories } from "./asyncMocks";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  getCategories()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
