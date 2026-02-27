import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem('isAuthenticated', 'false');
            navigate('/login');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
            <h1 className="text-2xl font-bold mb-4 text-slate-800">Logging out...</h1>
            <p className="text-slate-600">You will be redirected shortly.</p>
        </div>
    );
}

export default LogoutPage; 