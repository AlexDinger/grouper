import socialAuth from './service/auth'
import { githubProvider } from './config/authMethods'

const Login = () => {
  const handleLogin = async provider => {
    const res = await socialAuth(provider)
    console.log(res)
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin(githubProvider)}>Github</button>
    </div>
  )
}

export default Login
