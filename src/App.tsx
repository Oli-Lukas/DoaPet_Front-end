import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import OngSignup from "./pages/OngSignup";
import OfertaAdocaoPage from "./pages/OfertaAdocao";
import EventsPage from "./pages/Events";
import OngsPage from "./pages/Ongs";
import UserAccountPage from "./pages/UserAccount";

import "./App.scss";

const router = createBrowserRouter([
  { path: "/"                  , element: <Login />            },
  { path: "/login"             , element: <Login />            },
  { path: "/user-signup"       , element: <UserSignup />       },
  { path: "/ong-signup"        , element: <OngSignup />        },
  { path: "/home"              , element: <HomePage />         },
  { path: "/adoption-offer/:id", element: <OfertaAdocaoPage /> },
  { path: "/events"            , element: <EventsPage />       },
  { path: "/ongs"              , element: <OngsPage />         },
  { path: "/user-account"      , element: <UserAccountPage />  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
