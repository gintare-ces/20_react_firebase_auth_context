import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthCtx } from '../../store/AuthProvider';
import { auth } from '../../firebase/firebase';

function Logout() {
  const { isLoggedIn, logout } = useAuthCtx();

  function logoutFire() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        logout();
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return !isLoggedIn ? null : <button onClick={logoutFire}>Logout</button>;
}

export default Logout;