import { Link } from 'react-router-dom';
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="footer-shapes-wrapper">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>

            <div className="footer-content">    
                <div className="footer-links">
                    <ul className="footer-links-list">
                        <Link to="#" className="footer-link">Contact</Link>
                        <Link to="#" className="footer-link">Despre noi</Link>
                        <Link to="#" className="footer-link">Intrebari frecvente</Link>
                        <Link to="#" className="footer-link">Support</Link>
                        <Link to="#" className="footer-link">Politica de confidențialitate</Link>
                        <Link to="#" className="footer-link">Termeni și condiții</Link>
                        <Link to="#"><button className="footer-btn">Download App</button></Link>
                    </ul>
                </div>

                <div className="footer-links">
                    <ul className="footer-links-list">    
                        <Link to="https://github.com" className="footer-icon"><FaGithub /></Link>
                        <Link to="https://facebook.com" className="footer-icon"><FaFacebookF /></Link>
                        <Link to="https://twitter.com" className="footer-icon"><FaTwitter /></Link>
                        <Link to="https://instagram.com" className="footer-icon"><FaInstagram /></Link>
                        <Link to="https://linkedin.com" className="footer-icon"><FaLinkedin /></Link>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
