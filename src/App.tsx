import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./components/pages/authPages/LoginPage";
import SignupPage from "./components/pages/authPages/SignupPage";
import LogoutPage from "./components/pages/authPages/logouPage";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {
        loading ? <div>Loading...</div> :
          location.pathname === "/" ? <LoginPage /> :
            location.pathname === "/signup" ? <SignupPage /> :
              location.pathname === "/logout" ? <LogoutPage /> : <Outlet />
      }
    </div>
  );
}

export default App;
