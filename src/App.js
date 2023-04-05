import {BrowserRouter, Routes, Route} from "react-router-dom"
import { getCategories } from "./asyncMocks";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  getCategories()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId/:categoryIdTwo" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId/:categoryIdTwo/:categoryIdThree" element={<ItemListContainer/>}/>
        <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/item/:productId/:productIdTwo" element={<ItemDetailContainer/>}/>
        <Route path="/item/:productId/:productIdTwo/:productIdThree" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
