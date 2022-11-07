
import Hero from "../components/general/Hero";
import Process from "../components/general/Process";
import SelectOption from "../components/general/SelectOption";

const Subscribe = () => {
    const hero = {
        title: "Create a plan",
        text: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
        img: "blackcup",
        page: "plan",
    }

    const process = {
        bg: "dark",
        title: "",
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
        hasButton: false,
    }

    const preferencesOptions = {
        title: "How do you drink your coffee?",
        groupName: "preferences",
        options: [
            {
                title: "Capsule",
                slugTitle: "capsule",
                description: "Compatible with Nespresso systems and similar brewers",
            },
            {
                title: "Filter",
                slugTitle: "filter",
                description: "For pour over or drip methods like Aeropress, Chemex, and V60",
            },
            {
                title: "Espresso",
                slugTitle: "espresso",
                description: "Dense and finely ground beans for an intense, flavorful experience",
            }
        ]
    }

    const typeOptions = {
        title: "What type of coffee?",
        groupName: "bean-type",
        options: [
            {
                title: "Single origin",
                slugTitle: "single-origin",
                description: "Distinct, high quality coffee from a specific family-owned farm",
            },
            {
                title: "Decaf",
                slugTitle: "decaf",
                description: "Just like regular coffee, except the caffeine has been removed",
            },
            {
                title: "Blended",
                slugTitle: "blended",
                description: "Combination of two or three dark roasted beans of organic coffees",
            }
        ]
    }

    const quantityOptions = {
        title: "How much would you like?",
        groupName: "quantity",
        options: [
            {
                title: "250g",
                slugTitle: "250",
                description: "Perfect for the solo drinker. Yields about 12 delicious cups.",
            },
            {
                title: "500g",
                slugTitle: "500",
                description: "Perfect option for a couple. Yields about 40 delectable cups.",
            },
            {
                title: "1000g",
                slugTitle: "1000",
                description: "Perfect for offices and events. Yields about 90 delightful cups.",
            }
        ]
    }

    const grindOptions = {
        title: "Want us to grind them?",
        groupName: "grind",
        options: [
            {
                title: "Wholebean",
                slugTitle: "wholebean",
                description: "Best choice if you cherish the full sensory experience",
            },
            {
                title: "Filter",
                slugTitle: "filter",
                description: "For drip or pour-over coffee methods such as V60 or Aeropress",
            },
            {
                title: "Cafetiére",
                slugTitle: "cafetiere",
                description: "Course ground beans specially suited for french press coffee",
            }
        ]
    }

    const deliveryOptions = {
        title: "How often should we deliver?",
        groupName: "delivery",
        options: [
            {
                title: "Every week",
                slugTitle: "every-week",
                description: "$7.20 per shipment. Includes free first-class shipping.",
            },
            {
                title: "Every 2 weeks",
                slugTitle: "2-weeks",
                description: "$9.60 per shipment. Includes free priority shipping.",
            },
            {
                title: "Every month",
                slugTitle: "month",
                description: "$12.00 per shipment. Includes free priority shipping.",
            }
        ]
    }

    return ( 
        <main id="main">
            <Hero heroContent={hero} />

            <Process process={process} />

            {/* Ordering coffee */}
            <form action="">
                <SelectOption selectOption={preferencesOptions} />
                <SelectOption selectOption={typeOptions} />
                <SelectOption selectOption={quantityOptions} />
                <SelectOption selectOption={grindOptions} />
                <SelectOption selectOption={deliveryOptions} />

                <div className="order-summary">
                    <p className="order-summary__title">Order summary</p>
                    <p className="order-summary__text">
                        "I drink my coffee as <span id="order-summary-preference"></span>, 
                        with a <span id="order-summary-type"></span> type of bean. 
                        <span id="order-summary-quantity"></span> of ground ala <span id="order-summary-grid"></span>, 
                        sent to me <span id="order-summary-delivery"></span>."
                    </p>
                </div>

                <button className="btn btn--primary">Greate my plan!</button>
            </form>

            
            
        </main>
    );
}
 
export default Subscribe;
