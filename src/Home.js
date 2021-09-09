import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './config/firebase'

const Home = () => {
  const { user } = useAuthState()

  return (
    <>
      <h1>Welcome {user?.email}</h1>
      <button onClick={() => signOut(getAuth())}>Sign out</button>
    </>
  )
}

export default Home
