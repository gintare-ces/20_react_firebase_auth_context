import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../auth/LogoutForm';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
      <div className="container">
        <Link to={'/'} className="logo">
          Logo
        </Link>
        <nav>
          <NavLink className="navItem" to={'/'}>
            Home page
          </NavLink>
          {isLoggedIn && (
            <NavLink className="navItem" to={'/profile'}>
              Profile
            </NavLink>
          )}
          {isLoggedIn && (
            <>
            
            <NavLink className="navItem" to={'/posts'}>
              Posts
            </NavLink>
            <NavLink className="navItem" to={'/posts/new'}>
              Add Post
            </NavLink>
            <NavLink className="navItem" to={'/login'}>
                <Logout />
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink className="navItem" to={'/login'}>
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
