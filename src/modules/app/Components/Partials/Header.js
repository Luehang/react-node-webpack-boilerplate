import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            var _dropdownTriggerInstance = M.Dropdown.init(document.querySelector(`.dropdown-trigger-${this._id}`));
            var _toolTipRows = document.querySelectorAll(`.tool-${this._id}`).forEach(function(row) {
                M.Tooltip.init(row);
            });
            var _modalInstance = M.Modal.init(document.querySelector(`#modal-${this._id}`));
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _dropdownTrigger = document.querySelector(`.dropdown-trigger-${this._id}`);
        _dropdownTrigger.remove();
        var _toolTipRows = document.querySelectorAll(`.tool-${this._id}`).forEach(function(row) {
            row.remove();
        });
        var _modalOne = document.querySelector(`#modal-${this._id}`);
        _modalOne.remove();
    }
    render() {
        const {
            form_title,
            handleFormTitleInput,
            handleDeleteFormSubmit,
            handleSaveSubmit,
            isFilling,
            saved,
            isCreator,
            formID
        } = this.props;
        if (isFilling) {
            return (
                <header>
                    <nav id="nav-main" className="orange" style={{boxShadow: 'none',height: 100}}>
                        <div className="nav-wrapper" style={{width: '90%',margin: 'auto'}}>
                            <ul className="left">
                                {/* <li>
                                    <a href={`#modal-${this._id}`} className="modal-trigger">
                                        <i className="large material-icons left">keyboard_arrow_left</i>
                                    </a>
                                </li> */}
                                <a href="#!" className="brand-logo truncate left" style={{width: 250}}>{form_title}</a>
                            </ul>
                            
                            <ul className="right">
                                {
                                    isCreator ? 
                                        <a className={`${`tool-${this._id}`} waves-effect waves-light btn-large`}
                                            href={`/admin/administration/form?id=${formID}`}
                                            data-position="bottom"
                                            data-tooltip="Edit"
                                            style={{padding: '0 8px 0 20px'}}>
                                                <i className="material-icons left">mode_edit</i>
                                        </a> : ""
                                }
                            </ul>
                        </div>
                    </nav>
                    <div id={`modal-${this._id}`} className={`modal`}>
                        <div className="modal-content">
                            <p className="red-text center-align">ACCESS DENIED.</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" 
                                className="modal-action modal-close waves-effect waves-green btn-flat">I UNDERSTAND</a>
                        </div>
                    </div>
                </header>
            );
        } else {
            return (
                <header>
                    <nav id="nav-main" className="orange" style={{boxShadow: 'none',height: 100}}>
                        <div className="nav-wrapper" style={{width: '90%',margin: 'auto'}}>
                            <ul className="left">
                                {/* <li>
                                    <a href="#!"
                                        className={`tool-${this._id}`}
                                        data-position="bottom"
                                        data-tooltip="Form Home">
                                            <i className="material-icons left modal-trigger">keyboard_arrow_left</i>
                                    </a>
                                </li> */}
                                <li id="form-title" className="input-field" style={{width: 250}}>
                                    <input className="validate grey-text text-lighten-5 title-text"
                                        placeholder="Untitled Title" 
                                        type="text" 
                                        onChange={handleFormTitleInput}
                                        value={form_title}
                                    />
                                </li>
                            </ul>
                            
                            <ul className="right">
                                <li>
                                    {
                                        saved ?
                                            <a href={`/preview-form?id=${formID}`}
                                                className={`tooltipped tool-${this._id} hide-on-med-and-down`}
                                                data-position="bottom"
                                                data-tooltip="Preview">
                                                    <i className="material-icons right">visibility</i>
                                            </a>  : 
                                            <a onClick={() => M.toast({html: 'Form must be saved first.'})}
                                                className={`tooltipped tool-${this._id} hide-on-med-and-down`}
                                                data-position="bottom"
                                                data-tooltip="Preview">
                                                    <i className="material-icons right">visibility</i>
                                            </a>
                                    }
                                </li>
                                <li>
                                    <a className="waves-effect waves-light btn hide-on-small-only" 
                                        style={{borderRadius: 2.5}}
                                        onClick={handleSaveSubmit}>{ saved ? "UPDATE" : "SAVED" }
                                    </a>
                                </li>
                                <li>
                                    <a className={`dropdown-trigger-${this._id} tooltipped tool-${this._id} modal-trigger`} 
                                        href="#" 
                                        data-position="bottom" 
                                        data-tooltip="More" 
                                        data-target={`dropdown-${this._id}`}>
                                            <i className="material-icons right">more_vert</i>
                                    </a>
                                </li>
                                <ul id={`dropdown-${this._id}`} className="dropdown-content">
                                    <li><a href={`#modal-${this._id}`} className="modal-trigger">Move to trash</a></li>
                                </ul>
                            </ul>
                        </div>
                    </nav>

                    <div id={`modal-${this._id}`} className={`modal`}>
                        <div className="modal-content">
                            <h4>TestBright</h4>
                            <p>Are you sure you want to delete this form?</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" 
                                className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
                            <a href="#!" 
                                className="modal-action modal-close waves-effect waves-green btn-flat"
                                onClick={handleDeleteFormSubmit}>Accept</a>
                        </div>
                    </div>
                </header>
            );
        }
    }
}

Header.propTypes = {
    form_title: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    handleFormTitleInput: PropTypes.func,
    handleDeleteFormSubmit: PropTypes.func,
    handleSaveSubmit: PropTypes.func,
    saved: PropTypes.bool,
    isCreator: PropTypes.bool,
    formID: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}