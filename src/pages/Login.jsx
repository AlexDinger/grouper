import socialAuth from '../auth/auth'
import { githubProvider } from '../auth/authMethods'
import { AiFillGithub } from 'react-icons/ai'

const Login = () => {
  const handleLogin = async provider => {
    const res = await socialAuth(provider)
    console.log(res)
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-96 p-10 border-2 border-black flex flex-col items-center">
        <h1 className="text-center text-bold text-3xl mb-10">Login</h1>
        <button
          className="flex flex-row justify-between items-center px-4 py-2 bg-black text-white"
          onClick={() => handleLogin(githubProvider)}
        >
          <AiFillGithub className="mr-4" />
          Github
        </button>
      </div>
    </div>
  )
}

export default Login
