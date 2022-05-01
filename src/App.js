import Content from "./components/Content";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Photos from "./components/Photos";

function Default1() {
  return (
    <>
      <MainPage />
      <Table className="table" />
      <Content />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Default1 />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/umm" element={<Photos />} />
          <Route
            exact
            path="/works"
            element={
              <div>
                <Table />
                <Content />
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
