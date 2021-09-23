import { signInWithPopup, getAuth } from '@firebase/auth'

const socialAuth = provider => {
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then(res => {
      return res.user
    })
    .catch(err => err)
}

export default socialAuth
