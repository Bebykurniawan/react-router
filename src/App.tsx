import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TermsPage from "./pages/TermsPage";

const App = () => {
  return <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/terms" element={<TermsPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
  </>;
};

export default App;
