
import { ReactComponent as Bean } from "../assets/images/home/desktop/icon-coffee-bean.svg";
import { ReactComponent as Gift } from "../assets/images/home/desktop/icon-gift.svg";
import { ReactComponent as Truck } from "../assets/images/home/desktop/icon-truck.svg";

import Hero from "../components/general/Hero";
import Process from "../components/general/Process";

const Home = () => {
    const hero = {
        title: "Great coffee made simple.",
        text: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
        page: "home",
        img: "coffeepress",
        btnLabel: "Create your plan",
        btnLink: "/create-your-plan",
    }

    const coffeeCollection = [
        {
            img: "gran-espresso",
            name: "Gran Espresso",
            description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
        },
        {
            img: "planalto",
            name: "Planalto",
            description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
        },
        {
            img: "piccollo",
            name: "Piccollo",
            description: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
        },
        {
            img: "danche",
            name: "Danche",
            description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
        }
    ];

    const sellingpoints = [
        {
            id: 1,
            icon: <Bean />,
            title: "Best quality",
            text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
        },
        {
            id: 2,
            icon: <Gift />,
            title: "Exclusive benefits",
            text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
        },
        {
            id: 3,
            icon:<Truck />,
            title: "Free shipping",
            text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
        }
    ];

    const process = {
        bg: "light",
        title: "How it works",
        steps: [
            {
                id: 1,
                number: "01",
                title: "Pick your coffee",
                explanation: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
            },
            {
                id: 2,
                number: "02",
                title: "Choose the frequency",
                explanation: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
            },
            {
                id: 3,
                number: "03",
                title: "Receive and enjoy!",
                explanation: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
            },
        ],
        hasButton: true,
    }

    return ( 
        <main id="main">
            <Hero heroContent={hero} />

            <section className="home-coffee-collection">
                <div className="container--l">
                    <div className="home-coffee-collection__title-container">
                        <h2 className="home-coffee-collection__title | alternate-title">our collection</h2>
                    </div>

                    <ul className="home-coffee-collection__list">
                        { coffeeCollection.map((coffee) => (
                            <li key={coffee.id} className="home-coffee-collection__item">
                                <div className="img-container">
                                    <img src={"./images/home/desktop/image-" + coffee.img + ".png"} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="content__title | h4">{coffee.name}</h3>
                                    <p className="content__text">{coffee.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="home-sellingpoints">
                <div className="container">
                    <div className="home-sellingpoints__intro">
                        <h2 className="title | h3">Why choose us?</h2>
                        <p className="text">A large part of our role is choosing which particular coffees
                        will be featured  in our range. This means working closely with the best coffee growers to give you a more 
                        impactful experience on every level.</p>
                    </div>
                    <div className="home-sellingpoints__list">
                        {sellingpoints.map((item) => (
                            <div key={item.id} className="home-sellingpoints__item">
                                <div className="img-container">
                                    {item.icon}
                                </div>
                                <div className="content">
                                    <h3 className="title | h4">{item.title}</h3>
                                    <p className="text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Process process={process} />
        </main>
     );
}
 
export default Home;