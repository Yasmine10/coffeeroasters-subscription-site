import Hero from "../components/general/Hero";

import { ReactComponent as IconUk } from "../assets/about/desktop/illustration-uk.svg";

const About = () => {
    const hero = {
        title: "About Us",
        text: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
        img: "whitecup",
        page: "about",
    }

    const locations = [
        {
            id: 1,
            icon: "Uk",
            country: "United Kingdom",
            street: "Asfordby Rd",
            streetnr: "68",
            postal: "SY61YA",
            city: "",
            state: "Alcaston",
            phone: "+44 1241 918425",
        },
        {
            id: 2,
            icon: "Canada",
            country: "Canada",
            street: "Eglinton Avenue",
            streetnr: "1528",
            postal: "M4P 1A6",
            city: "Ontario",
            state: "Toronto",
            phone: "+1 416 485 2997",
        },
        {
            id: 3,
            icon: "Australia",
            country: "Australia",
            street: "Swanston Street",
            streetnr: "36",
            postal: "",
            city: "Victoria",
            state: "Kewell",
            phone: "+61 4 9928 3629",
        }
    ];

    return ( 
        <main id="main">
            <Hero heroContent={hero} />

            <section className="about-commitment | container--l">
                <div className="img-container">
                    <picture>
                        <source srcSet="./images/about/desktop/image-commitment.jpg" media="(min-width: 1200px)" />
                        <source srcSet="./images/about/tablet/image-commitment.jpg" media="(min-width: 768px)" />
                        <img src="./images/about/mobile/image-commitment.jpg" alt="" />
                    </picture>
                </div>
                <div className="content">
                    <h2 className="title | h2">Our commitment</h2>
                    <p className="text">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for 
                    you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific 
                    lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities 
                    in each of these places. We collaborate with exceptional coffee growers and empower a global community of 
                    farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, 
                    and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting 
                    profiles distinctive to their native growing region.</p>
                </div>
            </section>

            <section className="about-quality | container">
                <div className="about-quality__wrapper">
                    <div className="img-container">
                        <picture>
                            <source srcSet="./images/about/desktop/image-quality.jpg" media="(min-width: 1200px)" />
                            <source srcSet="./images/about/tablet/image-quality.jpg" media="(min-width: 768px)" />
                            <img src="./images/about/mobile/image-quality.jpg" alt="" />
                        </picture>
                    </div>
                    <div className="content">
                        <h2 className="title | h2 h2--mobile">Uncompromising quality</h2>
                        <p className="text">Although we work with growers who pay close attention to all stages of harvest and processing, 
                        we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. 
                        Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly 
                        coffee, so that brewing is easy and enjoyable.</p>
                    </div>
                </div>
            </section>

            <section className="about-locations">
                <h2 className="about-locations__title | h4">Our headquarters</h2>

                <ul className="about-locations__list">
                    {locations.map((location) => (
                        <li key={location.id} className="about-locations__list-item">
                            <div className="img-container">

                            </div>
                            <div className="content">
                                <h3>{location.country}</h3>
                                <div className="address">
                                    <p>{location.streetnr} {location.street}</p>
                                    <p>{location.state}</p>
                                    <p>{location.city} {location.postal}</p>
                                    <p>{location.phone}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
     );
}
 
export default About;
