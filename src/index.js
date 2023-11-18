import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages

import Home from "./pages/Home";
import NoPages from "./pages/NoPages";
import Store from "./pages/Store";
import Filtred from "./pages/Filtred";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} path="/" />
          <Route element={<Store/>} path="/store"/> 
          <Route element={<Filtred />} path="/filtered"/> 
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);