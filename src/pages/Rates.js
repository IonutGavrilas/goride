import "./Rates.css";
import GoLocal from "../assets/GoLocal.png"
import GoTrip from "../assets/GoTrip.png"
import GoExplore from "../assets/GoExplore.png"
import GoElectric from "../assets/GoElectric.png"
import GoVan from "../assets/GoVan.png"
import GoCargo from "../assets/GoCargo.png"


const cars = [
    { type: "GoLocal", model: "Hyunday i20", description: "Masina mica, perfecta pentru o intalnire, o plimbare in oras sau pentru a-ti face cumparaturile.", priceHour: 20, priceDay: 220, image: GoLocal },
    { type: "GoTrip", model: "Skoda Octavia", description: "Un hatchback perfect pentru o iesire la munte. Portbagaj mare, pentru a putea lua cat mai multe bagaje.", priceHour: 22, priceDay: 240, image: GoTrip },
    { type: "GoExplore", model: "Seat Ateca", priceHour: 28, description: "SUV-ul perfect ce iti ofera confortul si spatiul necesar pentru deplasarile acelea lungi. Geamuri infoliate pentru o protectie solara ridicata.", priceDay: 290, image: GoExplore },
    { type: "GoElectric", model: "Hyunday Kona", priceHour: 29, description: "Bucura-te de o masina electrica, spatioasa si cu transmisie automata", priceDay: 300, image: GoElectric },
    { type: "GoVan", model: "Citroen Berlingo", priceHour: 35, description: "O autoutilitara mica cu spatiu suficient pentru a iti face treaba.", priceDay: 380, image: GoVan },
    { type: "GoCargo", model: "Ford Transit", priceHour: 42, description: "Autoutilitara perfecta pentru a iti muta lucrurile de la o locuinta la alta.", priceDay: 460, image: GoCargo },
];

function Rates() {
    return (
        <div className="rates-container">
            <h2 className="title">Tarife</h2>
            <div className="cards-wrapper">
                {cars.map((car, index) => (
                    <div key={index} className="card">
                        <h3 className="car-name-type">{car.type}</h3>
                        <div className="car-wrapper">
                            <img src={car.image} alt={car.type} className="car-image" />
                            <div className="car-price-wrapper">
                            <p className="car-price">{car.priceHour}Lei/Ora</p>
                            <p className="car-price-day">{car.priceDay}Lei/Zi</p>
                        </div>
                        </div>
                        <div className="car-features-wrapper">
                            <ul className="car-features">
                                <li>{car.model}</li>
                                <li>{car.description}</li>
                            </ul>
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rates;