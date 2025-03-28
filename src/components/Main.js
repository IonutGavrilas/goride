import "./Main.css";
import { Link } from "react-router-dom";
import car from "../assets/GoLocal.png";
import phoneImage from "../assets/phone.png";
import Footer from "./Footer";

const Main = () => {
  return (
    <main className="main-container">
      <section className="intro">
      <div className="intro-wrapper">
        <div className="intro-wrapper-img">
          <img src={phoneImage} alt="phone" className="phoneImg" />
        </div>
        <div className="intro-wrapper-msg">
          <h1>Detine <b>calatoria</b>, nu masina.</h1>
          <h5>Tu conduci, iar noi ne ocupam de restul.</h5>
          <Link to="/signup">
            <button className="joinNow">Alatura-te acum!</button>
          </Link>
        </div>
      </div>
      </section>

      <section className="how-it-works">
        <h1 className="how-it-works-title">Cum functioneaza?</h1>
        <div className="cards">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title"><b className="card-no">01</b> Inregistreaza-te</h3>
              <p className="card-body">
              Creaza un cont, apasand butonul <b>Alatura-te acum!</b>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title"><b className="card-no">02</b> Rezerva</h3>
              <p className="card-body">
                Rezerva o masina din aplicatie.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title"><b className="card-no">03</b> Urca in masina</h3>
              <p className="card-body">
                Foloseste aplicatia pentru a debloca masina.
              </p> 
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title"><b className="card-no">04</b> Porneste la drum</h3>
              <p className="card-body">
              Deschide torpedoul, ia cheile din cutie si CONDU
              </p>
            
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title"><b className="card-no">05</b> Returneaza masina</h3>
              <p className="card-body">
              Returneaza masina in punctul din care ai preluat-o.
              </p>
            </div>
          </div>
          <div className="findMore-card">
              <Link to="/instructions"> <button className="findMore">Afla mai multe!</button></Link>
            
          </div>
        </div>
      </section>

      <section className="rates">
        <h1 className="rates-title">Tarife</h1>
        <h4 className="rates-subtitle">Tarifele noastre sunt transparente si accesibile pentru oricine</h4>
        <div className="rates-content">
        <img src={car} alt="car" className="rates-car"/>
        <h3 className="rates-text rates-bar">De la 20Lei pe ora  </h3>
        <h3 className="rates-text rates-bar">Primii 50km gratis  </h3>
        <div className="rates-text-promo">
          <h3 className="rates-text">0,75Lei pe km</h3>
          <p className="rates-text-promo-accent">0,5Lei pe km la rezervarile de peste 6 ore</p>
        </div>
        </div>
        <Link to="/rates">
            <button className="rates-btn">Vezi toate tarifele</button>
          </Link>
      </section>
      
    </main>
  );
};

export default Main;
