import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import OngSignup from "./pages/OngSignup";
import OfertaAdocaoPage from "./pages/OfertaAdocao";
import EventsPage from "./pages/Events";
import OngsPage from "./pages/Ongs";
import UserAccountPage from "./pages/UserAccount";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />} >
          <Route
            path="/home"
            element={<HomePage />}
          />
          <Route
            path="/adoption-offer/:id"
            element={<OfertaAdocaoPage />}
          />
          <Route
            path="/events"
            element={<EventsPage />}
          />
          <Route
            path="/ongs"
            element={<OngsPage />}
          />
          <Route
            path="/user-account"
            element={<UserAccountPage />}
          />
        </Route>

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/user-signup"
          element={<UserSignup />}
        />
        <Route
          path="/ong-signup"
          element={<OngSignup />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App
