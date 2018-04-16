import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormDropdown extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            var _dropdownTriggerInstance = M.Dropdown.init(document.querySelector(`.dropdown-trigger-${this._id}`));
            // var _toolTipInstance = M.Tooltip.init(document.querySelector(`.dropdown-trigger-${this._id}`));
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _dropdownTrigger = document.querySelector(`.dropdown-trigger-${this._id}`);
        _dropdownTrigger.remove();
    }
    render() {
        const {  
            onClick,
            descriptionCheck,
            // validationCheck,
            styles
        } = this.props;
        console.log(descriptionCheck);
        return (
            <div style={styles}>
                <a className={`dropdown-trigger-${this._id} btn-flat tooltipped`} 
                    href='#' 
                    // data-position="bottom" 
                    // data-tooltip="Show"
                    data-target={`dropdown-${this._id}`}
                    style={{padding: 0}}>
                    <img src="/img/more-vert.svg" style={{height: 28,width: 28,margin: '2px 8px 14px 8px'}} />
                </a>
                <ul id={`dropdown-${this._id}`} className='dropdown-content' style={{minWidth: 200}}>
                    <li>
                        <a href="#!">
                            <p style={{margin: 0}}>
                                <label>
                                    <input type="checkbox"
                                        name="description"
                                        checked={descriptionCheck}
                                        onChange={onClick}
                                    />
                                    <span className="grey-text text-darken-3">Description</span>
                                </label>
                            </p> 
                        </a>   
                    </li>
                    {/* <li>
                        <a href="#!">
                            <p style={{margin: 0}}>
                                <label>
                                    <input type="checkbox"
                                        name="validation"
                                        checked={validationCheck}
                                        onClick={onClick}
                                    />
                                    <span className="grey-text text-darken-3">Validation</span>
                                </label>
                            </p> 
                        </a>   
                    </li> */}
                </ul>
            </div>
        );
    }
}

FormDropdown.propTypes = {
    onClick: PropTypes.func.isRequired,
    descriptionCheck: PropTypes.bool.isRequired,
    // validationCheck: PropTypes.bool.isRequired,
    styles: PropTypes.object
}