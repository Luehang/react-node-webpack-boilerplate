import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default class ShortAnswer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            var _input = document.querySelector(`#input-${this._id}`);
            var _counterInstance = M.CharacterCounter.init(_input);
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _input = document.querySelector(`#input-${this._id}`);
        _input.remove();
    }
    render() {
        const {  
            mainIndex,
            question,
            description,
            required,
            handleInputChange,
            showRequired
        } = this.props;
        const red = required ? <span className="red-text text-accent-4">*</span> : "";
        const redBackground = showRequired ? "red lighten-5" : "";
        return (
            <div className={redBackground} style={{textAlign: 'left'}}>
                <div className="row top-form" style={{marginBottom: -40}}>
                    <div className="input-field col s12">
                        <h5 className="grey-text text-darken-4">{question.text}{red}</h5>
                    </div>
                </div>
                {
                    description ? 
                        <Description
                            description={description}
                        /> : 
                        <div style={{padding: 25}}></div>
                }
                <div className="row" style={{padding: '0 20px',margin: 0}}>
                    <div className="input-field col m6 s8 bottom-form">
                        <input
                            id={`input-${this._id}`}
                            className="grey-text text-darken-4"
                            style={{fontSize: 14, height: 25}} 
                            placeholder="Your answer"
                            type="text"
                            data-length={100}
                            value={question.value}
                            data-mainindex={mainIndex}
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>
                {
                        showRequired ?
                            <p className="s12 red-text" style={{padding: '0 0 20px 20px',fontSize: 16,fontWeight: 400,margin: 0}}>This is a required question</p> :
                            ""
                    }
            </div>
        );
    }
}

ShortAnswer.propTypes = {
    mainIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    desription: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    required: PropTypes.bool,
    handleInputChange: PropTypes.func.isRequired,
    showRequired: PropTypes.bool.isRequired
}