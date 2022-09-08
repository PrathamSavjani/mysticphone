import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import News from "./News";
import SellPhone from "./SellPhone";
import SmartphoneEdit from "./SmartphoneEdit";
import Sources from "./Sources";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/news/:id" element={<News />}></Route>
          <Route path="/sources" element={<Sources />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/addphone" element={<SellPhone />}></Route>
          <Route path="/sources/edit/:id" element={<SmartphoneEdit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
