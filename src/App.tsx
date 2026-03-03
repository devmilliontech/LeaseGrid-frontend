import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./components/pages/authPages/LoginPage";
import SignupPage from "./components/pages/authPages/SignupPage";
import { ThreeDot } from "react-loading-indicators";
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
        loading ? <div className="flex items-center justify-center h-screen"><ThreeDot variant="bounce" color="#32cd32" size="medium" text="" textColor="" /></div> :
          location.pathname === "/" ? <LoginPage /> :
            location.pathname === "/signup" ? <SignupPage /> :
              <Outlet />
      }
    </div>
  );
}

export default App;
