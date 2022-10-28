import { Link } from 'react-router-dom';

const Hero = (props) => {
    return ( 
        <section className="hero | container">
            <div className="hero__bg">
                <picture>
                    <source srcSet={"./images/"+ props.heroContent.page +"/desktop/image-hero-" + props.heroContent.img + ".jpg"} media="(min-width: 1200px)" />
                    <source srcSet={"./images/"+ props.heroContent.page +"/tablet/image-hero-" + props.heroContent.img + ".jpg"} media="(min-width: 768px)" />
                    <img src={"./images/"+ props.heroContent.page +"/mobile/image-hero-" + props.heroContent.img + ".jpg"} alt="" />
                </picture>
            </div>
            <div className="hero__content">
                <h1 className="title | h1">{props.heroContent.title}</h1>
                <p className="text">{props.heroContent.text}</p>
                { (props.heroContent.btnLabel != undefined && props.heroContent.btnLink != undefined ) &&
                    <Link to={props.heroContent.btnLink} className="btn btn--primary">{props.heroContent.btnLabel}</Link>
                }
            </div>
        </section>
     );
}
 
export default Hero;