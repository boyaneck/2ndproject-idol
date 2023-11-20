import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import { data } from "./data";
import { useState } from "react";

const Router = () => {
  const [list, setList] = useState([...data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route
          path="/detail/:id"
          element={<Detail list={data} setList={setList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
