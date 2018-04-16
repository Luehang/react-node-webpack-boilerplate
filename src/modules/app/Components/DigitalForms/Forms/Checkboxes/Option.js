import React from 'react';
import PropTypes from 'prop-types';

export default function Option(props) {
    const {
        handleOptionInput,
        removeOption,
        name,
        value,
        index,
        isAdded,
        mainIndex,
        toggleEditing
    } = props;
    if (isAdded) {
        return (
            <p style={{margin: 0}}>
                <label className="row">
                    <input className="with-gap"  
                        type="checkbox" 
                        checked={false} 
                        data-index={mainIndex}
                        readOnly
                    />
                    <span className="col s10">
                        <input disabled 
                            className="grey-text text-darken-3"
                            style={{fontSize: 15,height: 25}}
                            placeholder={`Option ${index + 1}`}  
                            type="text"
                            value={value}
                            data-index={mainIndex}
                            readOnly
                        />
                    </span>
                </label>
            </p>
        );
    } else {
        return (
            <p style={{margin: 0}}>
                <label className="row">
                    <input type="checkbox" 
                        className="filled-in" 
                        checked={false} 
                    />
                    <span className="col s10">
                        <input style={{fontSize: 15,height: 25}}
                            className="validate grey-text text-darken-3"
                            placeholder={`Option ${index + 1}`} 
                            type="text" 
                            onChange={handleOptionInput}
                            name={name}
                            value={value}
                        />
                    </span>
                    <img src="/img/remove.svg" 
                        className="right remove-button" 
                        style={{height: 16,width: 16,margin: 4}} 
                        alt={index}
                        onClick={removeOption}
                    />
                </label>
            </p>
        );
    }
}

Option.propTypes = {
    handleOptionInput: PropTypes.func,
    removeOption: PropTypes.func,
    name: PropTypes.number,
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isAdded: PropTypes.bool,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toggleEditing: PropTypes.func
}