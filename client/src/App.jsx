import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import NoPage from "./pages/NoPage";
import ItemsAll from "./pages/ItemsAll";
import LoginRegistration from "./components/LoginRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/items/list" element={< ItemsAll/>}/>
        <Route path="/login" element={<LoginRegistration />} />
        
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
