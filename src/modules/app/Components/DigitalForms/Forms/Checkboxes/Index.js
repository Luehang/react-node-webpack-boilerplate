import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import AddOption from './AddOption';
import Description from './../Description';

export default function Checkboxes(props) {
    const {  
        handleQuestionInput,
        handleOptionInput,
        addMoreOption,
        removeOption,
        question,
        options,
        isDescription,
        handleDescriptionInput,
        description,
        isAdded,
        required,
        mainIndex,
        toggleEditing
    } = props;
    const _id = Math.random().toString(36).substring(2);
    if (isAdded) {
        const red = required ? "red-text text-darken-2" : "grey-text text-darken-3";
        const rows = options.map(function(option, i) {
            return (
                <Option
                    key={i}
                    index={i}
                    value={option}
                    isAdded={isAdded}
                    mainIndex={mainIndex}
                />
            );
        });
        return (
            <div onClick={toggleEditing}>
                <div className="row top-form" style={{margin: '25px 0 0 0'}} data-index={mainIndex}>
                    <div className="input-field col s12">
                        <input id={`checkboxes-${_id}`} disabled
                            className="grey-text text-darken-3"
                            style={{fontSize: 25}}  
                            type="text" 
                            value={question}
                            data-index={mainIndex}
                            readOnly
                        />
                        <label htmlFor={`checkboxes-${_id}`}
                            data-index={mainIndex}
                            className={`${red} active`}
                            style={{fontSize: 25}}>Question
                        </label>
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
                    <div className="input-field col s12 bottom-form"> 
                        {rows}
                    </div>
                </div>
            </div>
        );
    } else {
        const rows = options.length > 1 ?
            options.map((option, i) => {
                return (
                    <Option key={i} 
                        handleOptionInput={handleOptionInput}
                        name={i} 
                        value={option}
                        removeOption={removeOption}
                        index={i}
                    />
                );
            }) :
            options.map((option, i) => {
                if (i == 0) {
                    return (
                        <p key={i} style={{margin: 0}}>
                            <label className="row">
                                <input type="checkbox" 
                                    className="filled-in" 
                                    checked={false} 
                                />
                                <span className="col s10">
                                    <input style={{fontSize: 15,height: 25}}
                                        className="validate grey-text text-darken-3"
                                        placeholder={`Option ${i + 1}`} 
                                        type="text" 
                                        onChange={handleOptionInput}
                                        name={i}
                                        value={option}
                                    />
                                </span>
                            </label>
                        </p>
                    );
                }
            });
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input style={{fontSize: 25}} 
                            className="validate grey-text text-darken-3"
                            id={`checkboxes-${_id}`} 
                            type="text" 
                            onChange={handleQuestionInput}
                            value={question}
                        />
                        {
                            question ? 
                                <label style={{fontSize: 25}} htmlFor={`checkboxes-${_id}`} className="active">Question</label> :
                                <label style={{fontSize: 25}} htmlFor={`checkboxes-${_id}`}>Question</label>
                        }
                    </div>
                </div>
                {
                    isDescription ? 
                        <Description
                            handleDescriptionInput={handleDescriptionInput}
                            description={description}
                        /> :
                        ""
                }
                <div className="row">
                    <div className="input-field col s12 bottom-form">
                        {rows}
                        <AddOption addMoreOption={addMoreOption} />
                    </div>
                </div>
            </div>
        );
    }
}

Checkboxes.propTypes = {
    handleQuestionInput: PropTypes.func,
    handleOptionInput: PropTypes.func,
    addMoreOption: PropTypes.func,
    removeOption: PropTypes.func,
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    isDescription: PropTypes.bool,
    handleDescriptionInput: PropTypes.func,
    description: PropTypes.string,
    isAdded: PropTypes.bool,
    required: PropTypes.bool,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toggleEditing: PropTypes.func
}