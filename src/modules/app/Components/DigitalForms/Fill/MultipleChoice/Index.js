import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import Description from './../Description';

export default function MultipleChoice(props) {
    const {  
        mainIndex,
        question,
        description,
        required,
        options,
        handleInputChange,
        showRequired
    } = props;
    const red = required ? <span className="red-text text-accent-4">*</span> : "";
    const redBackground = showRequired ? "red lighten-5" : "";
    const rows = options.map(function(option, i) {
        return (
            <Option
                key={i}
                index={i}
                mainIndex={mainIndex}
                option={option.text}
                value={option.value}
                handleInputChange={handleInputChange}
            />
        );
    });
    return (
        <div className={redBackground} style={{textAlign: 'left'}}>
            <div className="row top-form" style={{marginBottom: -40}}>
                <div className="input-field col s12">
                    <h5 className="grey-text text-darken-4"
                        style={{margin: 0}}>{question.text}{red}</h5>
                </div>
            </div>
            {
                description ? 
                    <Description
                        description={description}
                    /> : 
                    <div style={{padding: 30}}></div>
            }
            <div className="row">
                <div className="input-field col s12 bottom-form" style={{padding: '0 20px', margin: 0}}> 
                    {rows}
                </div>
                {
                    showRequired ?
                        <p className="red-text" style={{padding: '0 0 20px 20px',fontSize: 16,fontWeight: 400,margin: 0}}>This is a required question</p> :
                        ""
                }
            </div>
        </div>
    );
}

MultipleChoice.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    options: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    showRequired: PropTypes.bool.isRequired
}