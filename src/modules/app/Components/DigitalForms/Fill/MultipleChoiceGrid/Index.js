import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import Description from './../Description';

export default function MultipleChoiceGrid(props) {
    const {  
        mainIndex,
        question,
        description,
        required,
        handleInputChange,
        grid_settings,
        showRequired
    } = props;
    const red = required ? <span className="red-text text-accent-4">*</span> : "";
    const redBackground = showRequired ? "red lighten-5" : "";
    const tableHeaderRow = [];
    const totalColumns = grid_settings.columns.length + 1;
    const widthColumns = 100 / totalColumns;
    const totalRows = grid_settings.rows.length;

    tableHeaderRow.push(<span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,minWidth: 55,width: `${widthColumns}%`}}></span>);
    //console.log(grid_settings.responses[0].id);
    for (let i = 0; i < totalColumns; i++) {
        tableHeaderRow.push(
            <span key={getRandomString(3)} className="col grey-text text-darken-3 center-align" 
                style={{fontSize: 14,margin: 0,width: `${widthColumns}%`}}>{grid_settings.columns[i]}</span>
        );
    }
    const gridRows = grid_settings.rows.map(function(row, i) {
        const grey = (i+1) % 2 == 0 ? "grey lighten-3" : "white";
        const radioRows = [];
        for (let j = 0; j < totalColumns - 1; j++) {
            radioRows.push(
                <Option
                    widthColumns={widthColumns}
                    responseIndex={i}
                    subresponseIndex={j}
                    mainIndex={mainIndex}
                    value={grid_settings.responses[i].subresponses[j].value}
                    handleInputChange={handleInputChange}
                />
            );
        }
        return (
            <div key={i} className="col s12">
                <div className={`row ${grey}`} style={{margin: 0,padding: '10px 0',display: 'flex',alignItems: 'center'}}>
                    <span className="col grey-text text-darken-3" style={{fontSize: 14,margin: 0,width: `${widthColumns}%`}}>{row}</span>
                    {radioRows}
                </div>
            </div>
        );
    });

    return (
        <div className={redBackground} style={{textAlign: 'left'}}>
            <div className="row top-form" style={{marginBottom: -40}}>
                <div className="input-field col s12">
                    <h5 className="grey-text text-darken-4">{question.text}{red}</h5>
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
                {tableHeaderRow}
            </div>
            <div className="row">
                {gridRows}
                {
                    showRequired ?
                        <p className="red-text" style={{padding: '0 0 20px 20px',fontSize: 16,fontWeight: 400,margin: 0}}>This is a required question</p> :
                        ""
                }
            </div>
        </div>
    );
}

MultipleChoiceGrid.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    handleInputChange: PropTypes.func.isRequired,
    grid_settings: PropTypes.object.isRequired,
    showRequired: PropTypes.bool.isRequired
}

function getRandomString(num) {
    let string = "";
    for (var i = 0; i < num; i++) {
        string += Math.random().toString(36).substring(2);
    }
    return string;
}