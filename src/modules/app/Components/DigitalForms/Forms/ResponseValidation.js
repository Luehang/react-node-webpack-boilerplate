import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectDropdown from './../Settings/SelectDropdown';
import TextInput from './../Settings/TextInput';

export default class ResponseValidation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            handleValidationTypeSelect,
            handleValidationOperationSelect,
            handleValidationValueInput,
            handleValidationTextInput,
            toggleValidation,
            validations
        } = this.props;
        const text = {};
        if (validations.type.toLowerCase() == "number") {
            text.value_options = "Greater than;Greater than or equal to;Less than;Less than or equal to;Equal to;Not equal to;Between;Not between;Is Number;Whole number";
            text.title = "Number";
        } else if (validations.type.toLowerCase() == "text") {
            text.value_options = "Contains;Doesn't contain;Email address;URL";
            text.title = "Text"
        } else if (validations.type.toLowerCase() == "length") {
            text.value_options = "Maximum character count;Minimum character count";
            text.title = "Number";
        } else if (validations.type.toLowerCase() == "regular expression") {
            text.value_options = "Contains;Doesn't contain;Matches;Doesn't match";
            text.title = "Pattern";
        }
        return (
            <div style={{display: 'flex',flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                <div style={{display: 'flex',flexDirection: 'column'}}>
                    { 
                        validations.type.toLowerCase() == 'number' ?
                            <div style={{flex: 1,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexWrap: 'wrap'}}>
                                <SelectDropdown 
                                    current={validations.type}
                                    options="Number;Text;Length;Regular expression"
                                    onChange={handleValidationTypeSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                                <SelectDropdown 
                                    current={validations.number.value}
                                    name={validations.type.toLowerCase()}
                                    options="Greater than;Greater than or equal to;Less than;Less than or equal to;Equal to;Not equal to;Between;Not between;Is Number;Whole number"
                                    onChange={handleValidationOperationSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                            </div> : "" 
                    }
                    {/* { 
                        validations.type.toLowerCase() == 'text' ?
                            <div style={{flex: 1,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexWrap: 'wrap'}}>
                                <SelectDropdown 
                                    current={validations.type}
                                    options="Number;Text;Length;Regular expression"
                                    onChange={handleValidationTypeSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                                <SelectDropdown 
                                    current={validations.number.value}
                                    name={validations.type.toLowerCase()}
                                    options="Contains;Doesn't contain;Email address;URL"
                                    onChange={handleValidationOperationSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                            </div> : "" 
                    }
                    { 
                        validations.type.toLowerCase() == 'length' ?
                            <div style={{flex: 1,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexWrap: 'wrap'}}>
                                <SelectDropdown 
                                    current={validations.type}
                                    options="Number;Text;Length;Regular expression"
                                    onChange={handleValidationTypeSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                                <SelectDropdown 
                                    current={validations.number.value}
                                    name={validations.type.toLowerCase()}
                                    options="Maximum character count;Minimum character count"
                                    onChange={handleValidationOperationSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                            </div> : "" 
                    }
                    { 
                        validations.type.toLowerCase() == 'regular expression' ?
                            <div style={{flex: 1,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexWrap: 'wrap'}}>
                                <SelectDropdown 
                                    current={validations.type}
                                    options="Number;Text;Length;Regular expression"
                                    onChange={handleValidationTypeSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                                <SelectDropdown 
                                    current={validations.number.value}
                                    name={validations.type.toLowerCase()}
                                    options="Maximum character count;Minimum character count"
                                    onChange={handleValidationOperationSelect}
                                    styles={{flex: 1,margin: 5}}
                                />
                            </div> : "" 
                    }        */}
                    <div style={{flex: 1,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexWrap: 'wrap'}}>
                        <TextInput
                            label={text.title}
                            placeholder={text.title}
                            name={validations.type.toLowerCase()}
                            onChange={handleValidationValueInput}
                            value={validations.number.value}
                            styles={{flex: 1,margin: 5}}
                        />
                        <TextInput
                            label="Custom error text"
                            placeholder="Custom error text"
                            name={validations.type.toLowerCase()}
                            onChange={handleValidationTextInput}
                            value={validations.number.error_text}
                            styles={{flex: 1,margin: 5}}
                        />
                    </div>
                </div>
                <img src="/img/remove.svg" 
                    className="remove-button"
                    style={{height: '15px',width: '15px',marginTop: 10}} 
                    onClick={toggleValidation}
                />
            </div>
        );
    }
}

ResponseValidation.propTypes = {
    handleValidationTypeSelect: PropTypes.func.isRequired,
    handleValidationOperationSelect: PropTypes.func.isRequired,
    handleValidationValueInput: PropTypes.func.isRequired,
    handleValidationTextInput: PropTypes.func.isRequired,
    toggleValidation: PropTypes.func.isRequired,
    validations: PropTypes.object
}