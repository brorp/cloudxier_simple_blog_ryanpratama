import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import AddBlog from './Pages/AddBlog'
import EditBlog from './Pages/EditBlog'
function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<Detail />}/>
      <Route path="/add" element={<AddBlog />}/>
      <Route path="/edit/:id" element={<EditBlog />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
