import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../appShell/fromComponent/Input';
import { Button } from '../../appShell/fromComponent/button';



function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  }); 
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const user = localStorage.getItem('user') as string;
  const userObj = JSON.parse(user);
  useEffect(()=>{
    if(user){
     setFormData({name:userObj.name,email:userObj.email,password:userObj.password})
    }
  },[])

  const handleLogin = () => {
    if(formData.email === userObj?.email && formData.password === userObj?.password && userObj?.role === 'admin'){
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({
                                      name:formData.name,
                                      email:formData.email,
                                      password:formData.password,
                                      role:'admin'
                                    }));
      navigate('/dashboard');
    }else{

      setError({
        email: !formData.email ? 'Email is required' : '',
        password: !formData.password ? 'Password is required' : '',
      });
    }
    console.log(error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="p-8 bg-white shadow-md rounded-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Welcome to App</h1>
        <p className="mb-6 text-slate-600 text-center">Click login below to access your dashboard.</p>
        <div className="space-y-4"> 
          <Input 
            placeholder="Email" 
            type="text"  
            value={formData.email} 
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            error={error.email}
          />
          <Input 
            placeholder="Password" 
            type="password"  
            value={formData.password} 
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
            error={error.password}
          />
          <Button label="Login" onClick={handleLogin} />
        </div>
        <div>
          <p>Don't have an account? 
              <span onClick={()=>navigate('/signup')}
                className="text-blue-500  cursor-pointer hover:text-blue-800 px-1 text-md font-semibold"
              >
                Signup
              </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
