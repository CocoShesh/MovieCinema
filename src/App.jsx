import Home from "./components/Home";

import { ListProvider } from "./AddListContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Additems from "./pages/Additems/Additems";
function App() {
  return (
    <BrowserRouter>
      <ListProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddList" element={<Additems />} />
        </Routes>
      </ListProvider>
    </BrowserRouter>
  );
}

export default App;
