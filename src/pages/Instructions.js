import "./Instructions.css";
import GoRideIntro from "../assets/GoRideIntro.png";
import Fuel from "../assets/Fuel.png";
import Insurance from "../assets/Insurance.png"
import Speedometer from "../assets/Speedometer.png";


const Instructions = () => {
  return (
    <div className="instructions-main-container">
      <section className="instructions-intro">
        <div className="instructions-intro-wrapper">
          <div className="instructions-intro-wrapper-img">
            <img src={GoRideIntro} alt="GoRide Intro Cars" className="intro-car" />
          </div>
          <div className="instructions-intro-wrapper-msg">
            <h1 className="instructions-intro-title">Cum functioneaza?</h1>
            <p className="instructions-intro-text">
              Aplicatia GoRide este o aplicatie de car-rental care iti permite sa inchiriezi masini din orasul Timisoara.
              Prin intermediul ei, poti sa te bucuri de libertatea de a conduce fara a fi nevoit sa detii o masina.
            </p>
          </div>
        </div>
      </section>

      <section className="instructions-how-it-works">
        <h1 className="instructions-how-it-works-title">Urmeaza 6 pasi simpli</h1>
        <div className="instructions-cards">
          <div className="instructions-card">
            <div className="instructions-card-content">
              <h3 className="instructions-card-title"><b className="instructions-card-no">01</b> Inregistreaza-te</h3>
              <p className="instructions-card-body">
                Creaza un cont, apasand butonul <b>Alatura-te acum!</b>
              </p>
            </div>
          </div>
          <div className="instructions-card">
            <div className="instructions-card-content">
              <h3 className="instructions-card-title"><b className="instructions-card-no">02</b> Rezerva</h3>
              <p className="instructions-card-body">
                Rezerva o masina din aplicatie.
              </p>
            </div>
          </div>
          <div className="instructions-card">
            <div className="instructions-card-content">
              <h3 className="instructions-card-title"><b className="instructions-card-no">03</b> Urca in masina</h3>
              <p className="instructions-card-body">
                Foloseste aplicatia pentru a debloca masina.
              </p>
            </div>
          </div>
          <div className="instructions-card">
            <div className="instructions-card-content">
              <h3 className="instructions-card-title"><b className="instructions-card-no">04</b> Porneste la drum</h3>
              <p className="instructions-card-body">
                Deschide torpedoul, ia cheile din cutie si CONDU
              </p>

            </div>
          </div>
          <div className="instructions-card">
          <div className="instructions-card-content">
              <h3 className="instructions-card-title"><b className="instructions-card-no">05</b> Alimenteaza</h3>
              <p className="card-body">
              Nu uita sa alimentezi masina inainte de a o returna.
              </p>
            </div>
          </div>
          <div className="instructions-card">
            <div className="instructions-card-content">
              <h3 className="instructions-card-title"><b className="instructions-card-no">06</b> Returneaza masina</h3>
              <p className="card-body">
                Returneaza masina in punctul din care ai preluat-o.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="perks">
        <h1 className="perks-title">De ce sa alegi GoRide?</h1>
        <p className="perks-text">Inchiriaza o masina cu GoRide si bucurate de urmatoarele beneficii:</p>
        <div className="perks-container">
        <div className="perks-wrapper">
          <div className="perks-wrapper-img">
            <img src={Fuel} alt="Fuel Image" className="perks-img" />
          </div>
          <h1 className="perks-wrapper-title">Combustibil</h1>
          <p className="perks-wrapper-text">Alimenteaza si plateste cu cardul din torpedou la orice statie de alimentare OMW Petrom.</p>
        </div>
        <div className="perks-wrapper">
          <div className="perks-wrapper-img">
            <img src={Insurance} alt="Insurance Image" className="perks-img" />
          </div>
          <h1 className="perks-wrapper-title">Taxe, Asigurare si Parcare</h1>
          <p className="perks-wrapper-text">Taxele de drum, asigurarea si parcarea sunt incluse in pretul fiecarei inchirieri.</p>
        </div>
        <div className="perks-wrapper">
          <div className="perks-wrapper-img">
            <img src={Speedometer} alt="Speedometer Image" className="perks-img" />
          </div>
          <h1 className="perks-wrapper-title">50 km</h1>
          <p className="perks-wrapper-text">Bucura-te de primii 50 de km gratis la fiecare inchiriere.</p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
