import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

function LoginPage() {
  const { login, ui } = useAuthCtx()
  function loginFire({ email, password }) {
    // turi ivykdyti prisijungima
    

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('Login Success', user);
        login(user);
        ui.showSuccess();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('failed sign in', errorMessage);
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
