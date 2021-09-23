import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AuthHome from './pages/Home'
import Login from './pages/Login'
import { AuthContextProvider, useAuthState } from './firebase/firebase'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import Landing from './pages/Landing'

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/landing" />
      }
    />
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Router>
          <Navigation />
          <AuthenticatedRoute exact path="/" component={AuthHome} />
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <UnauthenticatedRoute exact path="/landing" component={Landing} />
        </Router>
      </Layout>
    </AuthContextProvider>
  )
}

export default App
