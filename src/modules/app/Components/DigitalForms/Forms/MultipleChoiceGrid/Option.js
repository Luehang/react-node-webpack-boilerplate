import React from 'react';
import PropTypes from 'prop-types';

export default function Row(props) {
    const {
        name,
        value,
        index,
        onlyOne,
        handleGridInput,
        removeGrid
    } = props;
    if ( onlyOne && /row|rows/i.test(name) ) {
        return (
            <p key={index} style={{margin: 0}}>
                <label className="row">
                    <span className="left grey-text text-darken-3" 
                        style={{fontSize: 14,margin: 0,paddingRight: 5}}>{index + 1}.</span>
                    <span className="col s8">
                        <input style={{fontSize: 14,height: 18}} 
                            placeholder={`Row ${index + 1}`} type="text" 
                            className="validate grey-text text-darken-3"
                            onChange={handleGridInput}
                            value={value}
                            data-name="rows"
                            data-index={index}
                        />
                    </span>
                </label>
            </p>
        );
    } else if ( /row|rows/i.test(name) ) {
        return (
            <p key={index} style={{margin: 0}}>
                <label className="row">
                    <span className="left grey-text text-darken-3" 
                        style={{fontSize: 14,margin: 0,paddingRight: 5}}>{index + 1}.</span>
                    <span className="col s8">
                        <input style={{fontSize: 14,height: 18}} 
                            placeholder={`Row ${index + 1}`} type="text" 
                            className="validate grey-text text-darken-3"
                            onChange={handleGridInput}
                            value={value}
                            data-name="rows"
                            data-index={index}
                        />
                    </span>
                    <img src="/img/remove.svg" 
                        className="right remove-button" 
                        style={{height: 12,width: 12,margin: 6}} 
                        onClick={removeGrid}
                        data-name="rows"
                        data-index={index}
                    />
                </label>
            </p>
        );
    }
    if (onlyOne && /column|columns/i.test(name) ) {
        return (
            <p style={{margin: 0}}>
                <label className="row">
                    <input className="with-gap" 
                        type="radio" 
                        checked={false} 
                        readOnly
                    />
                    <span className="col s9">
                        <input style={{fontSize: 14,height: 18}} 
                            className="validate grey-text text-darken-3"
                            placeholder={`Column ${index + 1}`} 
                            type="text" 
                            onChange={handleGridInput}
                            value={value}
                            data-name="columns"
                            data-index={index}
                        />
                    </span>
                </label>
            </p>
        );
    } else if ( /column|columns/i.test(name) ) {
        return (
            <p style={{margin: 0}}>
                <label className="row">
                    <input className="with-gap" 
                        type="radio" 
                        checked={false} 
                        readOnly
                    />
                    <span className="col s9">
                        <input style={{fontSize: 14,height: 18}} 
                            className="validate grey-text text-darken-3"
                            placeholder={`Column ${index + 1}`} 
                            type="text" 
                            onChange={handleGridInput}
                            value={value}
                            data-name="columns"
                            data-index={index}
                        />
                    </span>
                    <img src="/img/remove.svg" 
                        className="right remove-button" 
                        style={{height: 12,width: 12,margin:6}} 
                        onClick={removeGrid}
                        data-name="columns"
                        data-index={index}
                    />
                </label>
            </p>
        );
    }
}

Row.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onlyOne: PropTypes.bool,
    handleGridInput: PropTypes.func,
    removeGrid: PropTypes.func
}