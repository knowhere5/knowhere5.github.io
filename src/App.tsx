import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import ThemeToggle from "./components/ThemeToggle";

const App = () => (
  <BrowserRouter>
    <ThemeToggle />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>
);

export default App;