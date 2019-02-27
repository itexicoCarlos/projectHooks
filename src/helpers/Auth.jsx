// ?  Funcionalidades independientes de react que me ayudan a iteracturar con firebase
import { ref, firebaseAuth } from '../data/firebase'

// Save user
const saveUser = (user) => (
  ref
    .child()
    .set({})
    .then( () => {})
)


// Crear usuario y pass
const auth = ( email, password) => {
  firebaseAuth().createUserWithEmailAndPassword(email, password)
    .then(saveUser)
}

// Login
const login = (email, password) => firebaseAuth().signInWithEmailAndPassword(email, password)

// Logout

const logout = () => firebaseAuth().signOut()

// Reset Password
const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email)

export {
  saveUser,
  auth,
  login,
  logout,
  resetPassword
}