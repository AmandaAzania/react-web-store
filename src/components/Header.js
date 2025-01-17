import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions'; // Import logout action

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart); // To get the cart count

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
        
      <div className="container">
      <li className="store-logo"><a href="/">GLOO</a></li>
        <nav>
          <ul>
            {/* Store logo (on the far left corner) */}
        

            {/* Other navigation items */}
            <li><a href="/">Home</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/cart">Cart ({cart.length})</a></li> {/* Cart count here */}
            
            {/* User login/logout links */}
            <li className="user-actions">
              {isLoggedIn ? (
                <>
                  <span>Welcome, {user.username}!</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <a href="/login" className="auth-link">Login</a>
                  <a href="/register" className="auth-link">Register</a>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
