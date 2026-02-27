import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../appShell/fromComponent/Input';
import { Button } from '../../appShell/fromComponent/button';
import { useAuthStore } from '../../store/useAuthStore';


function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
  });

  const SetUser = useAuthStore((state) => state.SetUser);

  const handleSignup = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError({
        name: !formData.name ? 'Name is required' : '',
        email: !formData.email ? 'Email is required' : '',
        password: !formData.password ? 'Password is required' : '',
      });
      return;
    }
    SetUser({ ...formData, role: 'admin' });
    localStorage.setItem('user', JSON.stringify({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'admin'
    }));
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="p-8 bg-white shadow-md rounded-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Welcome to App</h1>
        <p className="mb-6 text-slate-600 text-center">Click login below to access your dashboard.</p>
        <div className="space-y-4">
          <Input
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            error={error.name}
          />
          <Input
            placeholder="Email"
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            error={error.email}
          />
          <Input
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            error={error.password}
          />
          <Button
            label="Signup"
            onClick={handleSignup} />
        </div>
        <div>
          <p>Already have an account?
            <span
              onClick={() => navigate('/login')}
              className="text-blue-500  cursor-pointer hover:text-blue-800 px-1 text-md font-semibold "
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
