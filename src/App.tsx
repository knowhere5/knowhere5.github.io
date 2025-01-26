import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import ThemeToggle from "./components/ThemeToggle";
import AudioPlayer from "./components/AudioPlayer";

const App = () => (
  <HashRouter>
    <ThemeToggle />
    <AudioPlayer />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </HashRouter>
);

export default App;