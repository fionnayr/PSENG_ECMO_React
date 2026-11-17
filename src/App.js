import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import RoleSelectionPage from "./pages/RoleSelectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/roleselection" element={<RoleSelectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;