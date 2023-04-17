import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate()
  const { login, ui, isLoggedIn, setIsLoading } = useAuthCtx()
  function loginFire({ email, password }) {
    // ----- start LOADING -----
    ui.showLoading()
    setIsLoading(true)
    // turi ivykdyti prisijungima
    

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('Login Success', user);
        login(user);
        setIsLoading()
        navigate('/profile')
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('failed sign in', errorMessage);
        ui.showError('Neteisingas email arba slaptazodis')
      });
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>
      <LoginForm onLogin={loginFire} />
      
      
    </div>
  );
}

export default LoginPage;
