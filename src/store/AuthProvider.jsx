import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  register() {},
  feedback: {
    show: false,
    msg: '',
    type: '',
  },
  showSuccess() {},
});

AuthContext.displayName = 'AutentifikacijaCTX';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    show: false,
    msg: '',
    type: '',
  });

  function showSuccess() {
    setFeedback({
      show: true,
      msg: 'Success',
      type: 'success',
    });
  }

  const isLoggedIn = !!user;

  function login(userObj) {
    setUser(userObj);
  }

  const authCtx = {
    user,
    isLoading,
    isLoggedIn,
    login,
    feedback,
    showSuccess,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
