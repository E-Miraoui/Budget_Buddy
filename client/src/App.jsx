import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoPage from "./pages/NoPage";
import ItemsAll from "./pages/ItemsAll";
import LoginRegistration from "./pages/LoginRegistration";
import Dashboard from "./pages/UserItems";
function App() {
  return (
   
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoginRegistration/>} />
        <Route path="/items/list" element={< ItemsAll/>} />
        <Route path="/dashboard/:id" component={Dashboard} />

        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
