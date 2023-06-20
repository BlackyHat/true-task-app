import client from '../../apollo/apollo.client';
import { AuthProvider } from '../../context/AuthContext';
import { Router } from '../../routesConfig/router';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
