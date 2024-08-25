import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import Display from "./Components/Display";
import Billgenerate from "./Components/Billgenerate";
import About from "./Components/About";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="booking/:id" element={<Booking />} />
            <Route path="display" element={<Display />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="billgenerate/:id" element={<Billgenerate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
