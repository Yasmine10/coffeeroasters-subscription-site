import { Link } from "react-router-dom";

const Process = (props) => {

    const steps = props.process.steps.map((step) => (
        <li key={step.id} className="process__item">
            <p className="step">{step.number}</p>
            <h3 className="title | h3">{step.title}</h3>
            <p className="explanation">{step.explanation}</p>
        </li>
    ));

    return ( 
        <section className={"process process--" + props.process.bg}>
            <div className="container--l">
                { props.process.title != undefined && 
                    <h2 className="process__title | h4">{props.process.title}</h2>
                }
                <ol className="process__list">
                    { steps }
                </ol>

                { props.process.hasButton &&
                    <Link to="/create-a-plan" className="process__btn | btn btn--primary">Create your plan</Link>
                }
            </div>
        </section>
     );
}
 
export default Process;