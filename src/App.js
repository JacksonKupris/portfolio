import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import Home from './components/Home/Home.component'
import Projects from "./components/Projects/Projects.component";
import Contact from "./components/Contact/Contact.component";
import About from "./components/About/About.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>

      </Routes>
    </>
  );
}

export default App;
