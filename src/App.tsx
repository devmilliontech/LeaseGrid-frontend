import { Outlet } from "react-router-dom";
import {useState,useEffect} from "react";
function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);
  return (
    <div>
      {loading ? <div>Loading...</div> : <Outlet/>}
    </div>
  );
}

export default App;
