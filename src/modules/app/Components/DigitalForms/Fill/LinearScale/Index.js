import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import Description from './../Description';

export default function LinearScale(props) {
    const {  
        mainIndex,
        question,
        description,
        required,
        options,
        handleInputChange,
        scale_settings,
        showRequired
    } = props;
    const red = required ? <span className="red-text text-accent-4">*</span> : "";
    const redBackground = showRequired ? "red lighten-5" : "";
    const { value_start, value_end, responses } = scale_settings;
    const totalColumns = value_start == 0 ? value_end + 1 : value_end;
    const widthColumns = 100 / totalColumns;
    const rows = [];
    let j = 0;
    for (let i = value_start; i <= totalColumns; i++) {
        rows.push(
            <Option 
                widthColumns={widthColumns}
                key={i}
                index={j}
                mainIndex={mainIndex}
                option={responses[j].text}
                value={responses[j].value}
                handleInputChange={handleInputChange}
            />
        );
        j++;
    }
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
                <div className="col s12 row" style={{margin: 0}}>
                    <div className="col m2 s1">
                        <p className="center-align">{scale_settings.label_start}</p>
                    </div>
                    <div className="col m8 s10">
                        {rows}
                    </div>
                    <div className="col m2 s1">
                        <p className="center-align">{scale_settings.label_end}</p>
                    </div>
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

LinearScale.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    options: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    scale_settings: PropTypes.object.isRequired,
    showRequired: PropTypes.bool.isRequired
}