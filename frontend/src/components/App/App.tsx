import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import { Router } from '../../routesConfig/router';

function App() {
  const { user, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
