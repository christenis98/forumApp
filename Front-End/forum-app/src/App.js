import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainView from "./MainView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView />}></Route>
        <Route path="/thread/:threadId" element={<MainView />}></Route>
      </Routes>
    </>
  );
}

export default App;
