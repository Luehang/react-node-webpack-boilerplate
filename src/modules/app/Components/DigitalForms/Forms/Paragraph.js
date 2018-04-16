import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default function Paragraph(props) {
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
                <div className="row top-form" style={{margin: '25px 0 0 0'}}>
                    <div className="input-field col s12">
                        <input id={`paragraph-${_id}`} disabled
                            className="validate grey-text text-darken-3"
                            style={{fontSize: 25}}  
                            type="text" 
                            value={question}
                            data-index={mainIndex}
                        />
                        <label htmlFor={`paragraph-${_id}`}
                            style={{fontSize: 25}} 
                            className={`${red} active`}>Question</label>
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
                    <div className="input-field col s10 bottom-form" data-index={mainIndex}>
                        <input disabled  type="text" className="grey-text text-darken-2" data-index={mainIndex}/>
                        <label data-index={mainIndex}>Long answer text</label>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id={`paragraph-${_id}`}
                            className="validate grey-text text-darken-3"
                            style={{fontSize: 25}} 
                            type="text" 
                            onChange={handleQuestionInput}
                            value={question}
                        />
                        {
                            question ?
                                <label htmlFor={`paragraph-${_id}`}
                                    style={{fontSize: 25}} 
                                    className="active">Question</label> :
                                <label htmlFor={`paragraph-${_id}`}
                                    style={{fontSize: 25}}>Question</label>
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

Paragraph.propTypes = {
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