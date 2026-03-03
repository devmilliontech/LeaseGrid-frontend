import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./components/pages/authPages/LoginPage";
import SignupPage from "./components/pages/authPages/SignupPage";
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {
        loading ? <div className="flex items-center justify-center h-screen">Loading...</div> :
          location.pathname === "/" ? <LoginPage /> :
            location.pathname === "/signup" ? <SignupPage /> :
              <Outlet />
      }
    </div>
  );
}

export default App;
