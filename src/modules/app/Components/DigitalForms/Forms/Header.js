import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default function Header(props) {
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
            <div>
                <div onClick={toggleEditing} className="row" style={{marginTop: 40}}>
                    <div className="input-field col s12" data-index={mainIndex}>
                        <input disabled 
                            className="grey-text text-darken-4"
                            style={{fontSize: 50}}
                            value={title} 
                            type="text"
                            data-index={mainIndex}
                        />
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
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input style={{fontSize: 50}} 
                            className="validate grey-text text-darken-4"
                            placeholder="Form Header" 
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

Header.propTypes = {
    handleTitleInput: PropTypes.func,
    title: PropTypes.string.isRequired,
    isDescription: PropTypes.bool,
    handleDescriptionInput: PropTypes.func,
    description: PropTypes.string,
    isAdded: PropTypes.bool,
    toggleEditing: PropTypes.func,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}