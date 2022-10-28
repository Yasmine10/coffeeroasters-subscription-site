
import Hero from "../components/general/Hero";

const Home = () => {
    const hero = {
        title: "Great coffee made simple.",
        text: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
        page: "home",
        img: "coffeepress",
        btnLabel: "Create your plan",
        btnLink: "/create-your-plan",
    }

    return ( 
        <main id="main">
            <Hero heroContent={hero} />
        </main>
     );
}
 
export default Home;