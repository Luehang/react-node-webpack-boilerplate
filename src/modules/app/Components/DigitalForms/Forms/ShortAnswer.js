import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default function ShortAnswer(props) {
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
            <div onClick={toggleEditing}>
                <div className="row top-form" style={{margin: '25px 0 0 0'}} data-index={mainIndex}>
                    <div className="input-field col s12" data-index={mainIndex}>
                        <input id={`short-answer-${_id}`} disabled
                            className="grey-text text-darken-3"
                            style={{fontSize: 25}} 
                            type="text"
                            value={question}
                            data-index={mainIndex}
                        />
                        <label htmlFor={`short-answer-${_id}`} className={`${red} active`} style={{fontSize: 25}} data-index={mainIndex}>Question</label>
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
                    <div className="input-field col s6 bottom-form" data-index={mainIndex}>
                        <input disabled  type="text" className="grey-text text-darken-2" data-index={mainIndex}/>
                        <label data-index={mainIndex}>Short answer text</label>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input style={{fontSize: 25}} 
                            id={`short-answer-${_id}`} type="text" 
                            className="validate grey-text text-darken-3"
                            onChange={handleQuestionInput}
                            value={question}
                        />
                        {
                            question ? 
                                <label style={{fontSize: 25}} htmlFor={`short-answer-${_id}`} className="active">Question</label> :
                                <label style={{fontSize: 25}} htmlFor={`short-answer-${_id}`}>Question</label>
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
            </div>
        );
    }
}

ShortAnswer.propTypes = {
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