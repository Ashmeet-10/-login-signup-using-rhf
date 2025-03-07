import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router'
import './app.css'
import SignIn from './components/sign-in/sign-in'
import SignUp from './components/sign-up/sign-up'
import Home from './components/home/home'

function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  if (currentUser) {
    return children
  } else return <Navigate to='/sign-in' />
}

function AuthenticationProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  if (currentUser) return <Navigate to='/' />
  else return children
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/sign-in'
          element={
            <AuthenticationProtectedRoute>
              <SignIn />
            </AuthenticationProtectedRoute>
          }
        />
        <Route
          path='/sign-up'
          element={
            <AuthenticationProtectedRoute>
              <SignUp />
            </AuthenticationProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
