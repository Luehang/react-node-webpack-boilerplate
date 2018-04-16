import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import Description from './../Description';

export default class LinearScale extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            var _dropdownTriggerRows = document.querySelectorAll(`.dropdown-trigger-${this._id}`);
            _dropdownTriggerRows.forEach(function(row) {
                M.Dropdown.init(row);
            });
        } catch(err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _dropdownTriggerRows = document.querySelectorAll(`.dropdown-trigger-${this._id}`);
        _dropdownTriggerRows.forEach(function(row) {
            row.remove();
        });
    }
    render() {
        const {
            handleQuestionInput,
            question,
            isDescription,
            handleDescriptionInput,
            description,
            isAdded,
            required,
            mainIndex,
            toggleEditing,
            handleLinearScaleLabelChange,
            onLinearScaleValueClick,
            scale_settings
        } = this.props;
        if (isAdded) {
            const red = required ? "red-text text-darken-2" : "grey-text text-darken-3";
            const { value_start, value_end } = scale_settings;
            const totalColumns = value_start == 0 ? value_end + 1 : value_end;
            const widthColumns = 100 / totalColumns;
            const rows = [];
            for (let i = value_start; i <= totalColumns; i++) {
                rows.push(<Option widthColumns={widthColumns} index={i} mainIndex={mainIndex} />);
            }
            return (
                <div className="row" style={{margin: '25px 0 0 0'}} onClick={toggleEditing} data-index={mainIndex}>
                    <div className="input-field col s12 top-form">
                        <input disabled style={{fontSize: 25}} 
                            className="grey-text text-darken-3"
                            id={`linear-scale-${this._id}`} 
                            type="text" 
                            value={question}
                            data-index={mainIndex}
                        />
                        <label style={{fontSize: 25}} data-index={mainIndex}
                            htmlFor={`linear-scale-${this._id}`} className={`${red} active`}>Question</label>
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
                    <div className="row" data-index={mainIndex}>
                        <div className="col s12 row" data-index={mainIndex}>
                            <div className="col m2 s1" data-index={mainIndex}>
                                <p className="center-align">{scale_settings.label_start}</p>
                            </div>
                            <div className="col m8 s10" data-index={mainIndex}>
                                {rows}
                            </div>
                            <div className="col m2 s1" data-index={mainIndex}>
                                <p className="center-align">{scale_settings.label_end}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="input-field col s12" style={{marginTop: 20}}>
                            <input style={{fontSize: 25}} 
                                className="validate grey-text text-darken-3"
                                id={`linear-scale-${this._id}`} 
                                type="text" 
                                onChange={handleQuestionInput}
                                value={question}
                            />
                            {
                                question ? 
                                    <label style={{fontSize: 25}} htmlFor={`linear-scale-${this._id}`} className="active">Question</label> :
                                    <label style={{fontSize: 25}} htmlFor={`linear-scale-${this._id}`}>Question</label>
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
                    <div className="row" style={{marginTop: -40}}>
                        <a className={`dropdown-trigger-${this._id} btn-flat`} 
                            href='#' 
                            data-target={`dropdown-${this._id}`}>{scale_settings.value_start}<i className="small material-icons right">arrow_drop_down</i>
                        </a>
                        <ul id={`dropdown-${this._id}`} className='dropdown-content'>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-start" data-value={0}>0</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-start" data-value={1}>1</a></li>
                        </ul>

                        <a className={`dropdown-trigger-${this._id} btn-flat`} 
                            href='#' 
                            data-target={`dropdown-${this._id}-2`}>{scale_settings.value_end}<i className="small material-icons right">arrow_drop_down</i>
                        </a>
                        <ul id={`dropdown-${this._id}-2`} className='dropdown-content'>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={2}>2</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={3}>3</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={4}>4</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={5}>5</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={6}>6</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={7}>7</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={8}>8</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={9}>9</a></li>
                            <li><a href="#!" onClick={onLinearScaleValueClick} data-name="value-end" data-value={10}>10</a></li>
                        </ul>
                        
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left grey-text text-darken-3" 
                                    style={{fontSize: 14,margin: 0,paddingRight: 5}}>1</span>
                                <span className="col m4 s5">
                                    <input style={{fontSize: 14,height: 18}} 
                                        className="validate grey-text text-darken-3"
                                        placeholder="Label (optional)" 
                                        type="text" 
                                        name="label-start"
                                        onChange={handleLinearScaleLabelChange}
                                        value={scale_settings.label_start}
                                    />
                                </span>
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left grey-text text-darken-3" 
                                    style={{fontSize: 15,margin: 0,paddingRight: 5}}>2</span>
                                <span className="col m4 s5">
                                    <input style={{fontSize: 14,height: 18}} 
                                        className="validate grey-text text-darken-3"
                                        placeholder="Label (optional)" 
                                        type="text" 
                                        name="label-end"
                                        onChange={handleLinearScaleLabelChange}
                                        value={scale_settings.label_end}
                                    />
                                </span>
                            </label>
                        </p>
                    </div>
                </div>
            );
        }
    }
}

LinearScale.propTypes = {
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
    toggleEditing: PropTypes.func,
    handleLinearScaleLabelChange: PropTypes.func,
    onLinearScaleValueClick: PropTypes.func,
    scale_settings: PropTypes.object.isRequired
}