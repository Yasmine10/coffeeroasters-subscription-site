import { useState } from "react";

import { ReactComponent as Arrow } from "../../assets/images/plan/desktop/icon-arrow.svg";

const SelectOption = (props) => {

    const [showOptions, setShowOptions] = useState(true);
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    }

    return ( 
        <div className="select-option">
            <div className="select-option__title-container">
                <h2 className="select-option__title | h4">{props.selectOption.title}</h2>
                <button type="button" onClick={toggleOptions} className={"btn btn--icon " + (showOptions ? 'shown' : '')}><Arrow /></button>
            </div>
            
            { showOptions ? (
               <div></div> 
            ) : null}

                <div className={"select-option__options radio-btn-group " + (showOptions ? 'shown' : '')}>
                    {props.selectOption.options.map((option) => (
                        <div className="form-group" key={option.slugTitle}>
                            <input type="radio" id={option.slugTitle} name={props.selectOption.groupName} className="radio-custom" defaultChecked={(option.id == 1 ? true : false)} />
                            <label htmlFor={option.slugTitle}>
                                <div className="content">
                                    <h3 className="content__title | h4">{option.title}</h3>
                                    <p className="content__description">{option.description}</p>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            
        </div>
     );
}
 
export default SelectOption;