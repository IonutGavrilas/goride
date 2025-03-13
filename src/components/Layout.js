// //import HomePage from "../pages/HomePage";
// //import AuthPage from "../pages/AuthPage";
 import Navigation from "./Navigation";
 import logo from "../assets/GoRideLogo.png"
 import './Layout.css'

// const Layout = (props) => {
//     return (
//         <div>
//             <Navigation></Navigation>
//             <main>{props.children}</main>

//         </div>
//     )
// }

// export default Layout;

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbarPaths = ['/auth'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {shouldHideNavbar && (
        <nav className={shouldHideNavbar ? 'hidden' : ''}>
          <Link to="/"><img src={logo} alt="Logo"/></Link>
        </nav>
      )}
      <Navigation></Navigation>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
