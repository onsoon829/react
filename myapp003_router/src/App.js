import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Dashboard from "./components/Dashboard";
//http://localhost:3000
//http://localhost:3000/about
//페이지 이동 주관
//<NavLink to="/about">About</NavLink>의 요청을
//routes에서 받는다
function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
