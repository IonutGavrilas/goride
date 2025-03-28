import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Navigation.css';
import logo from "../assets/GoRideLogo.png"

const Navigation = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isSignedIn, setisSignedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
    
    const toggleAuth = () => {
        isLoggedIn ? navigate("/") : navigate("/auth");
        setisLoggedIn(!isLoggedIn);
    }

    const toggleSignUp = () => {
      isSignedIn ? navigate("/") : navigate("/signup");
      setisSignedIn(!isSignedIn);
  }

  return (
    <header className='header'>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo"/></Link> 
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/instructions" className="menu-option" onClick={() => setMenuOpen(false)}>Cum functioneaza?</Link></li>
          <li><Link to="/rates" className="menu-option" onClick={() => setMenuOpen(false)}>Tarife</Link></li>
          <li><Link to="/locations" className="menu-option" onClick={() => setMenuOpen(false)}>Locatii</Link></li>
          <Link to="/signup"><button className='joinNow-mobile' onClick={toggleSignUp}>Alatura-te acum!</button></Link>
          <Link to="/auth"><button className='login-mobile' onClick={toggleAuth}>Log in</button></Link>
        </ul>
      </nav>
      <div className="auth-links auth-links-mobile">
        <Link to="/signup"><button className='joinNow' onClick={toggleSignUp}>Alatura-te acum!</button></Link>
        <Link to="/auth"><button className='login' onClick={toggleAuth}>Log in</button></Link>
      </div>
    </header>
  );
}

export default Navigation;
