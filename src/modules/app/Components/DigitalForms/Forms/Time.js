import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default function Time(props) {
    const {
        handleQuestionInput,
        question,
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
        return (
            <div className="row" style={{margin: '25px 0 0 0'}} onClick={toggleEditing}>
                <div className="input-field col s12 top-form" data-index={mainIndex}>
                    <input disabled style={{fontSize: 25}} 
                        className="grey-text text-darken-3"
                        id={`time-${_id}`} 
                        type="text" 
                        value={question}
                        data-index={mainIndex}
                    />
                    <label style={{fontSize: 25}} htmlFor={`time-${_id}`} className={`${red} active`} data-index={mainIndex}>Question</label>
                </div>
                {
                    isDescription ? 
                        <Description
                            description={description}
                            isAdded={isAdded}
                            mainIndex={mainIndex}
                        /> :
                        ""
                }
                <div className="input-field col m5 s6 bottom-form" data-index={mainIndex}>
                    <i className="small material-icons prefix grey-text text-dark-3" data-index={mainIndex}>access_time</i>
                    <input disabled id="icon_prefix" placeholder="Time" style={{fontSize: 14}} type="text" data-index={mainIndex} />
                    <label htmlFor="icon_prefix" data-index={mainIndex}></label>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12 top-form">
                        <input style={{fontSize: 25}} 
                            className="validate grey-text text-darken-3"
                            id={`time-${_id}`} 
                            type="text" 
                            onChange={handleQuestionInput}
                            value={question}
                        />
                        {
                            question ? 
                                <label style={{fontSize: 25}} htmlFor={`time-${_id}`} className="active">Question</label> :
                                <label style={{fontSize: 25}} htmlFor={`time-${_id}`}>Question</label>
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
                    <div className="input-field col m5 s6 bottom-form">
                        <i className="small material-icons prefix grey-text text-dark-3">access_time</i>
                        <input disabled id="icon_prefix" placeholder="Time" style={{fontSize: 14}} type="text" />
                        <label htmlFor="icon_prefix"></label>
                    </div>
                </div>
            </div>
        );
    }
}

Time.propTypes = {
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
    toggleEditing: PropTypes.func
}