import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface GuestRouteProps {
    children?: React.ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
    // Check if the user is authenticated (simple localStorage check for now)
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (isAuthenticated) {
        // Redirect them to the dashboard if they are already logged in
        return <Navigate to="/dashboard" replace />;
    }

    return children ? <>{children}</> : <Outlet />;
};

export default GuestRoute;
