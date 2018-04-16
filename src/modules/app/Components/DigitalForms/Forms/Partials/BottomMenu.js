import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormDropdown from './../Settings/FormDropdown';
import ShowDropdown from './../Settings/ShowDropdown';

import Switch from './../../Settings/Switch';

export default class BottomMenu extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._add_btn_id = Math.random().toString(36).substring(2);
    }
    // componentDidMount() {
    //     try {
    //         var _deleteToopTipInstance = M.Tooltip.init(document.querySelector(`#delete-${this._add_btn_id}`));
    //         var _duplicateToolTipInstance = M.Tooltip.init(document.querySelector(`#duplicate-${this._add_btn_id}`));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // componentWillUnmount() {
    //     var _deleteToolTip = document.querySelector(`#delete-${this._add_btn_id}`);
    //     var _duplicateToolTip = document.querySelector(`#duplicate-${this._add_btn_id}`);
    //     _deleteToolTip.remove();
    //     _duplicateToolTip.remove();
    // }
    render() {
        const {
            toggleShowSetting,
            descriptionCheck,
            validationCheck,
            required,
            toggleRequired,
            deleteSection,
            duplicateSection,
            mainIndex
        } = this.props;
        return (
            <div style={{borderTop: '1px solid #bdbdbd',paddingTop: 15}}>
                <div style={{display: 'flex',justifyContent: 'flex-end'}}>
                    <img src="/img/duplicate.svg"
                        style={{height: 20,width: 20,margin: 8}}  
                        onClick={duplicateSection} 
                        id={`duplicate-${this._add_btn_id}`}
                        data-id={`duplicate-${this._add_btn_id}`}
                        className="tooltipped cursor"
                        // data-position="bottom"
                        // data-tooltip="Duplicate"
                        data-index={mainIndex} 
                    />
                    <img src="/img/delete.svg" 
                        style={{height: 20,width: 20,margin: 8}} 
                        id={`delete-${this._add_btn_id}`}
                        className="tooltipped cursor"
                        onClick={deleteSection} 
                        // data-position="bottom"
                        // data-tooltip="Delete"
                        data-index={mainIndex} 
                    />
                    <div style={{width: 1,height: 36,margin: '0 20px 0 30px',backgroundColor: '#bdbdbd'}}></div>
                    <div style={{display: 'flex',padding: 5,maxWidth: 120,minWidth: 120}}>
                        <span className="grey-text text-darken-3" style={{margin: 0}}>Required</span>
                        <Switch 
                            checked={required}
                            onChange={toggleRequired}
                        />
                    </div>
                    <ShowDropdown
                        onClick={toggleShowSetting}
                        descriptionCheck={descriptionCheck}
                        // validationCheck={validationCheck}
                    />
                </div>
            </div>
        );
    }
}

BottomMenu.propTypes = {
    toggleShowSetting: PropTypes.func.isRequired,
    descriptionCheck: PropTypes.bool.isRequired,
    validationCheck: PropTypes.bool,
    required: PropTypes.bool.isRequired,
    toggleRequired: PropTypes.func.isRequired,
    deleteSection: PropTypes.func.isRequired,
    duplicateSection: PropTypes.func.isRequired,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
}


