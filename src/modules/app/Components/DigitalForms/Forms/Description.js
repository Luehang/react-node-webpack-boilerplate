import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {
    const {
        handleDescriptionInput,
        description,
        styles,
        isAdded,
        mainIndex,
        toggleEditing
    } = props;
    const _id = Math.random().toString(36).substring(2);
    if (isAdded) {
        return (
            <div onClick={toggleEditing} className="row" style={styles}>
                <div className="input-field col s12" style={{marginTop: -5}}>
                    <textarea id={`description-${_id}`} disabled 
                            className="materialize-textarea validate grey-text text-darken-2"
                            value={description}
                            data-index={mainIndex}
                        >
                    </textarea>
                    <label htmlFor={`description-${_id}`} className="active" data-index={mainIndex}>Description</label>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row" style={styles}>
                <div className="input-field col s12 bottom-form">
                    <textarea id={`description-${_id}`} 
                            className="materialize-textarea validate grey-text text-darken-2"
                            onChange={handleDescriptionInput}
                            value={description}
                        >
                    </textarea>
                    {
                        description ?
                            <label htmlFor={`description-${_id}`} className="active">Description (optional)</label> :
                            <label htmlFor={`description-${_id}`}>Description (optional)</label>
                    }
                </div>
            </div>
        );
    }
}

Description.propTypes = {
    handleQuestionInput: PropTypes.func,
    description: PropTypes.string,
    styles: PropTypes.object,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toggleEditing: PropTypes.func
}