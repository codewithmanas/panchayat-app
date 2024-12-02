
import { Route, Routes } from "react-router";
import About from "./components/About";
import NotFound from "./components/NotFound";

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
    </div>
  );
}


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
