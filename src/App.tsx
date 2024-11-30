
import { Route, Routes } from "react-router";

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
    </Routes>
  );
}

export default App;
