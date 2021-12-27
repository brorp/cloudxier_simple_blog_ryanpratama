import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import AddBlog from './Pages/AddBlog'
function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
      <Route path="/add" element={<AddBlog />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
