
import Hero from "../components/general/Hero";

const Subscribe = () => {
    const hero = {
        title: "Create a plan",
        text: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
        img: "blackcup",
        page: "plan",
    }

    return ( 
        <main id="main">
            <Hero heroContent={hero} />
        </main>
    );
}
 
export default Subscribe;
