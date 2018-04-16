import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default function Title(props) {
    const {
        handleTitleInput,
        title,
        isDescription,
        handleDescriptionInput,
        description,
        isAdded,
        mainIndex,
        toggleEditing
    } = props;
    if (isAdded) {
        return (
            <div onClick={toggleEditing}>
                <div className="row top-form" style={{margin: '25px 0 0 0'}}>
                    <div className="input-field col s12">
                        <input disabled
                            className="grey-text text-darken-3 title-text"
                            type="text" 
                            value={title} 
                            data-index={mainIndex}
                        />
                    </div>
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
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input className="validate grey-text text-darken-3 title-text"
                            placeholder="Untitled Title" 
                            type="text" 
                            onChange={handleTitleInput}
                            value={title}
                        />
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

Title.propTypes = {
    handleTitleInput: PropTypes.func,
    title: PropTypes.string.isRequired,
    isDescription: PropTypes.bool,
    handleDescriptionInput: PropTypes.func,
    description: PropTypes.string,
    isAdded: PropTypes.bool,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toggleEditing: PropTypes.func
}