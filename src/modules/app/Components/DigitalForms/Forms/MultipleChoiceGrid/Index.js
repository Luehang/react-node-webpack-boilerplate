import React from 'react';
import PropTypes from 'prop-types';

import AddOption from './AddOption';
import Option from './Option';
import Description from './../Description';

export default function MultipleChoiceGrid(props) {
    const {
        handleQuestionInput,
        question,
        isDescription,
        handleDescriptionInput,
        description,
        isAdded,
        required,
        mainIndex,
        toggleEditing,
        handleGridInput,
        addMoreGridRows,
        addMoreGridColumns,
        removeGrid,
        grid_settings
    } = props;
    const _id = Math.random().toString(36).substring(2);
    if (isAdded) {
        const red = required ? "red-text text-darken-2" : "grey-text text-darken-3";
        const tableHeaderRow = [];
        const radioRows = [];
        const gridRows = [];
        const totalColumns = grid_settings.columns.length + 1;
        const widthColumns = 100 / totalColumns;
        const totalRows = grid_settings.rows.length;
        tableHeaderRow.push(<span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,minWidth: 55,width: `${widthColumns}%`}} data-index={mainIndex}></span>);
        for (let i = 0; i < totalColumns; i++) {
            tableHeaderRow.push(
                <span className="col grey-text text-darken-3 center-align" data-index={mainIndex} 
                    style={{fontSize: 14,margin: 0,width: `${widthColumns}%`}}>{grid_settings.columns[i]}</span>
            );
        }
        for (let i = 0; i < totalColumns - 1; i++) {
            radioRows.push(
                <p className="col center-align" style={{width: `${widthColumns}%`,margin: 0}} data-index={mainIndex}>
                    <label>
                        <input disabled className="with-gap" type="radio" name=""  /><span data-index={mainIndex}></span>
                    </label>
                </p>
            );
        }
        for (let j = 0; j < totalRows; j++) {
            const grey = (j+1) % 2 == 0 ? "grey lighten-3" : "white";
            gridRows.push(
                <div className="col s12">
                    <div className={`row ${grey}`} style={{margin: 0,padding: '10px 0',display: 'flex',alignItems: 'center'}} data-index={mainIndex}>
                        <span className="col grey-text text-darken-3" style={{fontSize: 14,margin: 0,width: `${widthColumns}%`}} data-index={mainIndex}>{grid_settings.rows[j]}</span>
                        {radioRows}
                    </div>
                </div>
            );
        }
        return (
            <div onClick={toggleEditing}>
                <div className="row" style={{margin: '25px 0 0 0'}} data-index={mainIndex}>
                    <div className="input-field col s12 top-form" data-index={mainIndex}>
                        <input style={{fontSize: 25}} disabled
                            className="validate grey-text text-darken-3"
                            id={`multiple-choice-grid-${_id}`} 
                            type="text"  data-index={mainIndex}
                        />
                        <label style={{fontSize: 25}} className="active" data-index={mainIndex}
                            htmlFor={`multiple-choice-grid-${_id}`}>Question</label>
                    </div>
                </div>
                {
                    isDescription ? 
                        <Description
                            description={description}
                            isAdded={isAdded}
                            toggleEditing={toggleEditing}
                            mainIndex={mainIndex}
                        /> :
                        ""
                }
                <div className="row" data-index={mainIndex}>
                    {tableHeaderRow}
                </div>
                <div className="row" data-index={mainIndex}>
                    {gridRows}
                </div>
            </div>
        );
    } else {
        const rows = grid_settings.rows.length > 1 ?
            grid_settings.rows.map((row, i) => {
                return (
                    <Option
                        key={i}
                        name="rows"
                        value={row}
                        index={i}
                        onlyOne={false}
                        handleGridInput={handleGridInput}
                        removeGrid={removeGrid}
                    />
                );
            }) :
            grid_settings.rows.map((row, i) => {
                if (i == 0) {
                    return (
                        <Option 
                            key={i}
                            name="row"
                            value={row}
                            index={i}
                            onlyOne={true}
                            handleGridInput={handleGridInput}
                        />
                    );
                }
            });
        const columns = grid_settings.columns.length > 1 ? 
            grid_settings.columns.map((col, i) => {
                return (
                    <Option
                        key={i}
                        name="columns"
                        value={col}
                        index={i}
                        onlyOne={false}
                        handleGridInput={handleGridInput}
                        removeGrid={removeGrid}
                    />
                );
            }) :
            grid_settings.columns.map((col, i) => {
                if (i == 0) {
                    return (
                        <Option 
                            key={i}
                            name="columns"
                            value={col}
                            index={i}
                            onlyOne={true}
                            handleGridInput={handleGridInput}
                        />
                    );
                }
            });
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12 top-form">
                        <input style={{fontSize: 25}} 
                            className="validate grey-text text-darken-3"
                            id={`multiple-choice-grid-${_id}`} 
                            type="text"
                            onChange={handleQuestionInput}
                            value={question}
                        />
                        {
                            question ? 
                                <label style={{fontSize: 25}} htmlFor={`multiple-choice-grid-${_id}`} className="active">Question</label> :
                                <label style={{fontSize: 25}} htmlFor={`multiple-choice-grid-${_id}`}>Question</label>
                        }
                    </div>
                </div>
                {
                    isDescription ? 
                        <Description
                            handleDescriptionInput={handleDescriptionInput}
                            description={description}
                        /> : ""
                }
                <div className="row bottom-form">
                    <div className="col m6 s12">
                        <p className="grey-text text-darken-4" style={{fontSize: 15, fontWeight: 525}}>Rows</p>
                        {rows}
                        <AddOption name="rows" onClick={addMoreGridRows} index={grid_settings.rows.length} />
                        <hr className="hide-on-med-and-up"/>
                    </div>
                    <div className="col m6 s12">
                        <p className="grey-text text-darken-4" style={{fontSize: 15, fontWeight: 525}}>Columns</p>
                        {columns}
                        <AddOption name="columns" onClick={addMoreGridColumns} index={grid_settings.columns.length} />
                    </div>
                </div>
            </div>
        );
    }
}

MultipleChoiceGrid.propTypes = {
    handleQuestionInput: PropTypes.func,
    question: PropTypes.string.isRequired,
    isDescription: PropTypes.bool,
    handleDescriptionInput: PropTypes.func,
    description: PropTypes.string,
    isAdded: PropTypes.bool,
    required: PropTypes.bool,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toggleEditing: PropTypes.func,
    handleGridInput: PropTypes.func,
    addMoreGridRows: PropTypes.func,
    addMoreGridColumns: PropTypes.func,
    removeGrid: PropTypes.func,
    grid_settings: PropTypes.object.isRequired
}