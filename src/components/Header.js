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
        <nav>
          <ul>
            {/* Store Logo (text-based link) */}
            <li className="store-logo">
              <a href="https://i.postimg.cc/yY026bCs/Retinol-Serum.png">GLOO Store</a> {/* Replace with your store name */}
            </li>

            {/* Other navigation items */}
            <li><a href="/">Home</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/cart">Cart ({cart.length})</a></li> {/* Cart count here */}
            <li><a href="/login" className="auth-linkL">Login</a></li>

            {/* User login/logout links */}
            <li className="user-actions">
              {isLoggedIn ? (
                <>
                  <span>Welcome, {user.username}!</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <a href="/register" className="auth-linkR">Register</a>
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
