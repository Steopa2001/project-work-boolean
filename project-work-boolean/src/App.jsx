import DetailPage from "./components/DetailPage";
import Homepage from "./components/Homepage";
import Default_layout from "./Layout/Default_layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Default_layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/dettaglio/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;