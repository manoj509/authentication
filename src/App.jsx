import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./pages.jsx/Login";
import Rejister from "./pages.jsx/Rejister";
import Dashbord from "./pages.jsx/Dashbord";
import LoginOnly from "./pages.jsx/LoginOnly";
export const UserCon = createContext();
const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <UserCon.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/rejister" element={<Rejister />} />
          <Route path="/admin/dashboard" element={<LoginOnly compo={<Dashbord/>}/>} />
        </Routes>
      </BrowserRouter>
    </UserCon.Provider>
  );
};

export default App;
