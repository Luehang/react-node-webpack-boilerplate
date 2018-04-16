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
            // var _toolTipInstance = M.Tooltip.init(document.querySelector(`.dropdown-trigger-${this._id}`), {
            //     outDuration: 100,
            //     enterDelay: 500
            // });
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
            current,
            styles
        } = this.props;
        return (
            <div className="s12" style={styles}>
                <a className={`dropdown-trigger-${this._id} btn-flat tooltipped col s12 grey lighten-4`} 
                    href='#'  
                    // data-position="top" 
                    // data-tooltip="Change question" 
                    data-target={`dropdown-${this._id}`}>{current}<i className="small material-icons right">arrow_drop_down</i>
                </a>
                <ul id={`dropdown-${this._id}`} className='dropdown-content' style={{minWidth: 200}}>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/header.svg"/>Header</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/title.svg"/>Title</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/short-answer.svg"/>Short answer</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/paragraph.svg"/>Paragraph</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/multiple-choice.svg"/>Multiple choice</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/checkboxes.svg"/>Checkboxes</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/dropdown.svg"/>Dropdown</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/linear-scale.svg"/>Linear scale</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/grid.svg"/>Multiple choice grid</a></li>
                    {/* <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/file-upload.svg"/>File Upload</a></li> */}
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/date.svg"/>Date</a></li>
                    <li><a href="#!" onClick={onClick} ><img style={{height: 20,width: 20,marginRight:24}} src="/img/time.svg"/>Time</a></li>
                </ul>
            </div>
        );
    }
}

FormDropdown.propTypes = {
    onClick: PropTypes.func.isRequired,
    current: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    styles: PropTypes.object
}