const SelectOption = (props) => {
    return ( 
        <div className="select-option">
            <h2 className="select-option__title">{props.selectOption.title}</h2>
            {props.selectOption.options.map((option) => (
                <div className="form-group">
                    <input type="radio" id={option.slugTitle} name={props.selectOption.groupName} className="radio-custom" />
                    <label htmlFor={option.slugTitle}>
                        <div className="content">
                            <h3 className="content__title">{option.title}</h3>
                            <p className="content__description">{option.description}</p>
                        </div>
                    </label>
                </div>
            ))}
        </div>
     );
}
 
export default SelectOption;