import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TermsPage from "./pages/TermsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/terms" element={<TermsPage/>}/>
    {/* Dynamic Route */}
    <Route path="/product/:productSlug" element={<ProductDetailPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
  </>;
};

export default App;
