import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from './stores/authStore';
import Layout from './components/Layout/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';
import PlayerStats from './pages/PlayerStats';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="player" element={<PlayerStats />} />
            <Route path="clan" element={<div className="text-white">Clan Dashboard - Coming Soon</div>} />
            <Route path="wars" element={<div className="text-white">War Analytics - Coming Soon</div>} />
            <Route path="analytics" element={<div className="text-white">Advanced Analytics - Coming Soon</div>} />
            <Route path="admin" element={<div className="text-white">Admin Panel - Coming Soon</div>} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;